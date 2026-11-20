// Test harness: new project from the built template (out/<template_file>), saved and
// ACTIVATED, so fill_sheet.cs (which works on the active doc) can run next.
//   bim revit exec --pid <P> --allow-no-doc --no-transaction --file revit/new_project.cs \
//       --args-json '{"rte":"<dir>/out/bimcli-Sheet.rte","rvt":"<dir>/out/test.rvt"}'
using System.IO;
string rte = args["rte"].ToString(), rvt = args["rvt"].ToString();
var d = app.NewProjectDocument(rte);
d.SaveAs(rvt, new SaveAsOptions { OverwriteExistingFile = true });
d.Close(false);
var ud = uiApp.OpenAndActivateDocument(rvt);
return new { ok = true, rvt, active = ud.Document.Title };
