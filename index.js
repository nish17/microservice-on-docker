const readXlsxFile = require('read-excel-file/node');
const fs = require('fs');
let fileName = 'test.xlsx';
// if (!fileName) {
//     fileName = process.argv[2];
//     // console.log(fileName);
// }
readXlsxFile(fileName).then((rows) => {
    const allParams = [];
    let numberOfRows = rows[0].length;
    for (let i = 1; i < rows.length; i++) {
        var params = {};
        // if (rows[i][0]) {
        for (let j = 0; j < numberOfRows; j++) {
            console.log(`rows[0][j] => ${rows[0][j]}`);
            console.log(`rows[i][j] => ${rows[i][j]}`);
            params[rows[0][j]] = rows[i][j]
        }
        // }
        allParams.push(params)
    }
    return allParams;
})
    .then((allParams) => {
        // console.log(JSON.stringify(allParams));
        fs.writeFile("data.json", JSON.stringify(allParams), (err) => {
            if (err) console.log(err);
            else console.log(`wrote succesfully`);
        })
    }); 