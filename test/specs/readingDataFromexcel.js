var xlsx= require("xlsx")
var wb= xlsx.readFile("./test/specs/TestData/altairretro.xlsx")
let totalsheet= wb.SheetNames;
let ws=wb.Sheets['Sheet1'];
let exceldata=xlsx.utils.sheet_to_json(ws);
console.log(exceldata);
console.log(exceldata[0].url);
console.log(exceldata[0].un);
console.log(exceldata[0].pw);