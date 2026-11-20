// Broadsheet drawing sheet: create or refresh sheets and write their per-sheet values.
//
//   bim revit exec --pid <P> --file revit/fill_sheet.cs --args-json '{"layout":"<dir>/sheet.bimcli.json","sheets":[
//     {"number":"A-001","name":"Site + zoning","project":"...","site":"...","data":["line", ...],
//      "date":"2026-11-02","scale":"1\" = 40'-0\""}]}'
//
// Runs inside exec's transaction on the active document, which must have been started
// from the property's out/<template_file> (it carries the title block and the
// <type_prefix>* text types). Idempotent: a sheet that exists keeps its viewports;
// only the text notes this script owns (type name <type_prefix>*) are deleted and rewritten. Values live on the SHEET because
// Revit cannot create parameter-bound labels in a family.
using System.IO;
using System.Text.Json;

string layoutPath = args != null && args.ContainsKey("layout") && args["layout"] != null ? args["layout"].ToString() : "";
if (layoutPath == "" || !args.ContainsKey("sheets")) return new { ok = false, error = "args.layout and args.sheets are required" };
if (doc == null) return new { ok = false, error = "no active document" };
var L = JsonDocument.Parse(File.ReadAllText(layoutPath)).RootElement;
// nested args arrive as .NET objects, not JSON text: re-serialize before parsing
var sheetsArg = JsonDocument.Parse(JsonSerializer.Serialize(args["sheets"])).RootElement;
Func<double, double> FT = i => i / 12.0;

string family = L.GetProperty("family").GetString();
string prefix = L.GetProperty("type_prefix").GetString();
var sym = new FilteredElementCollector(doc).OfCategory(BuiltInCategory.OST_TitleBlocks).WhereElementIsElementType()
    .Cast<FamilySymbol>().FirstOrDefault(s => s.FamilyName == family);
if (sym == null) return new { ok = false, error = "titleblock-not-in-document", hint = "start the project from out/" + L.GetProperty("template_file").GetString() };
if (!sym.IsActive) sym.Activate();

var types = new FilteredElementCollector(doc).OfClass(typeof(TextNoteType)).Cast<TextNoteType>()
    .Where(x => x.Name.StartsWith(prefix)).ToDictionary(x => x.Name.Substring(prefix.Length), x => x.Id);
foreach (var p in L.GetProperty("styles").EnumerateObject())
    if (!types.ContainsKey(p.Name)) return new { ok = false, error = "text-type-missing", type = prefix + p.Name };

var S = L.GetProperty("strip");
double x0 = S.GetProperty("x0").GetDouble(), x1 = S.GetProperty("x1").GetDouble(), pad = S.GetProperty("pad").GetDouble();
var rows = new Dictionary<string, JsonElement>();
foreach (var r in L.GetProperty("rows").EnumerateArray()) rows[r.GetProperty("id").GetString()] = r;

var done = new List<object>();
foreach (var s in sheetsArg.EnumerateArray()) {
    string number = s.GetProperty("number").GetString();
    var sheet = new FilteredElementCollector(doc).OfClass(typeof(ViewSheet)).Cast<ViewSheet>()
        .FirstOrDefault(v => v.SheetNumber == number);
    bool created = false;
    if (sheet == null) { sheet = ViewSheet.Create(doc, sym.Id); sheet.SheetNumber = number; created = true; }
    if (s.TryGetProperty("name", out var nm)) sheet.Name = nm.GetString();

    var owned = new FilteredElementCollector(doc, sheet.Id).OfClass(typeof(TextNote)).Cast<TextNote>()
        .Where(n => types.ContainsValue(n.GetTypeId())).Select(n => n.Id).ToList();
    if (owned.Count > 0) doc.Delete(owned);

    int written = 0;
    foreach (var fp in L.GetProperty("fields").EnumerateObject()) {
        if (!s.TryGetProperty(fp.Name, out var v)) continue;
        string text = v.ValueKind == JsonValueKind.Array
            ? string.Join("\r", v.EnumerateArray().Select(e => e.GetString()))
            : v.GetString();
        if (string.IsNullOrEmpty(text)) continue;
        var fdef = fp.Value;
        var r = rows[fdef.GetProperty("row").GetString()];
        double left = x0, right = x1;
        if (r.TryGetProperty("split", out var sp)) {
            int col = fdef.TryGetProperty("col", out var c) ? c.GetInt32() : 0;
            if (col == 0) right = sp.GetDouble(); else left = sp.GetDouble();
        }
        double yTop = r.GetProperty("y1").GetDouble() - fdef.GetProperty("dy").GetDouble();
        var o = new TextNoteOptions(types[fdef.GetProperty("style").GetString()]) { HorizontalAlignment = HorizontalTextAlignment.Left };
        TextNote.Create(doc, sheet.Id, new XYZ(FT(left + pad), FT(yTop), 0), FT(right - left - 2 * pad), text, o);
        written++;
    }
    done.Add(new { number, id = sheet.Id.ToString(), created, replaced = owned.Count, written });
}
return new { ok = true, titleBlock = family, sheets = done };
