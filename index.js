const readData = require("./readExcel");
const excelFileName = "./not_found.xlsx";

const readNames = async (excelFileName) => {
  const result = await readData(excelFileName);
  const details = [];
  details.push(...result.rows);

  for (const detail of details) {
    let actualName = "";
    if (detail.name.startsWith("Prof Dr")) {
      actualName = detail.name.slice(8, detail.name.length);
    } else if (detail.name.startsWith("Prof")) {
      actualName = detail.name.slice(5, detail.name.length);
    } else if (detail.name.startsWith("Dr")) {
      actualName = detail.name.slice(3, detail.name.length);
    } else actualName = detail.name;

    console.log(actualName);
  }
};

readNames(excelFileName);
