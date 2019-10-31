const readXlsxFile = require('read-excel-file/node');
const fs = require('fs');
// let fileName = process.env.FILE_NAME;
let fileName = process.argv[2];
console.log({ fileName });

console.log(`process.argv: ${process.argv}`);
readXlsxFile(fileName)
  .then(rows => {
    const allParams = [];
    let numberOfRows = rows[0].length;
    for (let i = 1; i < rows.length; i++) {
      var params = {};
      for (let j = 0; j < numberOfRows; j++) {
        params[rows[0][j]] = rows[i][j];
      }
      allParams.push(params);
    }
    return allParams;
  })
  .then(allParams => {
    // console.log(JSON.stringify(allParams));
    fs.writeFile('./data/data1.json', JSON.stringify(allParams), err => {
      if (err) console.log(err);
      else console.log(`wrote succesfully`);
    });
  });
