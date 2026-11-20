// Broadsheet drawing sheet: author the project template (.rte) that carries the title block.
//
//   bim revit exec --pid <P> --allow-no-doc --no-transaction --file revit/project_template.cs \
//       --args-json '{"layout":"<dir>/sheet.bimcli.json","out":"<dir>/out"}'
//
// default.rte stripped of sheets and views, purged, then (AFTER the purge, or the
// purge deletes it again) the title block family and the <type_prefix>* text types
// loaded. Run titleblock.cs first.
using System.IO;
using System.Text.Json;

string layoutPath = args != null && args.ContainsKey("layout") && args["layout"] != null ? args["layout"].ToString() : "";
string outDir = args != null && args.ContainsKey("out") && args["out"] != null ? args["out"].ToString() : "";
if (layoutPath == "" || outDir == "") return new { ok = false, error = "args.layout and args.out are required" };
var L = JsonDocument.Parse(File.ReadAllText(layoutPath)).RootElement;
string family = L.GetProperty("family").GetString();
string tbRfa = Path.Combine(outDir, family + ".rfa");
string prefix = L.GetProperty("type_prefix").GetString();
string outRte = Path.Combine(outDir, L.GetProperty("template_file").GetString());
string baseRte = @"C:\ProgramData\Autodesk\RVT " + app.VersionNumber + @"\Templates\English-Imperial\default.rte";
var info = L.GetProperty("project_info");
Func<string, string> PI = k => info.TryGetProperty(k, out var v) ? v.GetString() : null;
if (!File.Exists(tbRfa)) return new { ok = false, stage = "titleblock-missing", tbRfa };
if (!File.Exists(baseRte)) return new { ok = false, stage = "base", baseRte };
Func<double, double> FT = i => i / 12.0;

Document t = null;
string err = null, tbLoaded = null;
int sheetsDeleted = 0, viewsDeleted = 0, purged = 0;
var styles = new List<string>();
try {
    t = app.NewProjectTemplateDocument(baseRte);
    using (var tx = new Transaction(t, "Strip to the Broadsheet sheet template")) {
        tx.Start();
        foreach (var s in new FilteredElementCollector(t).OfClass(typeof(ViewSheet)).ToElementIds().ToList()) {
            try { t.Delete(s); sheetsDeleted++; } catch { }
        }
        // keep one plan (Revit refuses to delete the last view; scripts create the views they need)
        var views = new FilteredElementCollector(t).OfClass(typeof(View)).Cast<View>()
            .Where(v => !v.IsTemplate && v.ViewType != ViewType.ProjectBrowser && v.ViewType != ViewType.SystemBrowser)
            .OrderBy(v => v.ViewType == ViewType.FloorPlan ? 1 : 0).ToList();
        for (int i = 0; i < views.Count - 1; i++) { try { t.Delete(views[i].Id); viewsDeleted++; } catch { } }
        var pi = t.ProjectInformation;
        try { if (PI("name") != null) pi.Name = PI("name"); } catch { }
        try { if (PI("organization") != null) pi.OrganizationName = PI("organization"); } catch { }
        try { if (PI("number") != null) pi.Number = PI("number"); } catch { }
        try { if (PI("status") != null) pi.Status = PI("status"); } catch { }
        tx.Commit();
    }
    for (int pass = 0; pass < 3; pass++) {
        ICollection<ElementId> unused = null;
        try { unused = t.GetUnusedElements(new HashSet<ElementId>()); } catch { }
        if (unused == null || unused.Count == 0) break;
        using (var tx = new Transaction(t, "Purge unused " + pass)) {
            tx.Start();
            foreach (var id in unused) { try { if (t.GetElement(id) != null) { t.Delete(id); purged++; } } catch { } }
            tx.Commit();
        }
    }
    using (var tx = new Transaction(t, "Load the title block + text types")) {
        tx.Start();
        Family fam;
        t.LoadFamily(tbRfa, out fam);   // null when already loaded: look it up by name regardless
        fam = new FilteredElementCollector(t).OfClass(typeof(Family)).Cast<Family>().FirstOrDefault(x => x.Name == family);
        tbLoaded = fam != null ? fam.Name : null;

        var baseType = new FilteredElementCollector(t).OfClass(typeof(TextNoteType)).Cast<TextNoteType>().First();
        foreach (var p in L.GetProperty("styles").EnumerateObject()) {
            var s = p.Value; string tn = prefix + p.Name;
            var nt = new FilteredElementCollector(t).OfClass(typeof(TextNoteType)).Cast<TextNoteType>().FirstOrDefault(x => x.Name == tn)
                     ?? baseType.Duplicate(tn) as TextNoteType;
            nt.get_Parameter(BuiltInParameter.TEXT_FONT).Set(s.GetProperty("font").GetString());
            nt.get_Parameter(BuiltInParameter.TEXT_SIZE).Set(FT(s.GetProperty("pt").GetDouble() * s.GetProperty("cap").GetDouble() / 72.0));
            nt.get_Parameter(BuiltInParameter.TEXT_STYLE_BOLD).Set(s.GetProperty("bold").GetBoolean() ? 1 : 0);
            var c = s.GetProperty("rgb");
            nt.get_Parameter(BuiltInParameter.LINE_COLOR).Set(c[0].GetInt32() + c[1].GetInt32() * 256 + c[2].GetInt32() * 65536);
            try { nt.get_Parameter(BuiltInParameter.TEXT_BACKGROUND).Set(1); } catch { }
            styles.Add(tn);
        }
        tx.Commit();
    }
    t.SaveAs(outRte, new SaveAsOptions { OverwriteExistingFile = true, Compact = true });
    t.Close(false);
} catch (Exception ex) {
    err = ex.GetType().Name + ": " + ex.Message;
    try { if (t != null) t.Close(false); } catch { }
}
if (err != null) return new { ok = false, stage = "author", error = err };
if (tbLoaded == null) return new { ok = false, stage = "titleblock-not-loaded", template = outRte };
return new { ok = true, template = outRte, titleBlock = tbLoaded, styles, sheetsDeleted, viewsDeleted, purged,
             sizeKB = new FileInfo(outRte).Length / 1024 };
