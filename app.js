// var viz = new tableau.Viz(placeholderDiv, url, options);

let viz;
// 1. Create a variable to store the placeholder div
const placeholderDiv = document.getElementById("VizContainer");
// 2. Create a variable to store the url
const url =
  "https://public.tableau.com/shared/W26YHBS8C?:display_count=n&:origin=viz_share_link";
// 3. Create a variable to store the dashboard options
const options = {
  device: "Desktop",
  height: "800px",
  width: "1100px",
};

function initViz() {
  console.log("Viz is ready to load");
  viz = new tableau.Viz(placeholderDiv, url, options);
}

// Listen for the content to be loaded, when finished load the viz

document.addEventListener("DOMContentLoaded", initViz);

//Buttons
//Where are my buttons?
const exportpdfbutton = document.getElementById("ExportPDF");

//Listen for buttons clicked
exportpdfbutton.addEventListener("click", exportPDFfunction);

//what happens when buttons are clicked
function exportPDFfunction() {
  viz.showExportPDFDialog();
}

//Powerpoint
//Where is my powerpoint?
const exportpowerpointbutton = document.getElementById("ExportPowerPoint");

// listen for buttons clicked
exportpowerpointbutton.addEventListener("click", exportpowerpointfunction);

//what happens when buttons are clicked
function exportpowerpointfunction() {
  viz.showExportPowerPointDialog();
}
//Image
//Where is my Image?
const exportimagebutton = document.getElementById("ExportImage");

// listen for buttons clicked
exportimagebutton.addEventListener("click", exportimagefunction);

//what happens when buttons are clicked
function exportimagefunction() {
  viz.showExportImageDialog();
}

//--------------------------

// Filter Range Buttons

//Where is my filter button

console.log(MinValue, MaxValue);

const Filterbutton = document.getElementById("Filterbutton");
Filterbutton.addEventListener("click", getRangeValues);

function getRangeValues() {
  const MinValue = document.getElementById("MinValue").value;
  //let minNumber = MinValue.value;
  const MaxValue = document.getElementById("MaxValue").value;
  console.log(MinValue, MaxValue);
  //Filterbutton.addEventListener("click", getRangeValues);

  // need to get the active sheet and then list of worksheets

  const workbook = viz.getWorkbook();
  console.log(workbook);
  const activeSheet = workbook.getActiveSheet();
  console.log(activeSheet);
  const sheets = activeSheet.getWorksheets();

  console.table(sheets);

  const sheetToFilter = sheets[0];
  console.log(sheetToFilter);
  sheetToFilter
    .applyRangeFilterAsync("SUM(Sales)", { min: MinValue, max: MaxValue })
    .then(alert("Viz Filtered"));
}
