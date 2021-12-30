const fs = require("fs");

function printFolder(fname) {
  var results = {};
  var files = [];
  // console.log("inside " + fname);
  fs.readdirSync(fname).forEach((file) => {
    // results[fname] = file;
    files.push(file);
    // console.log(file);
    var next = fname + "\\" + file;

    if (fs.lstatSync(next).isDirectory()) {
      // console.log(next);
      files.push(printFolder(next));
    }
  });
  results[fname] = files;
  // console.log(results);
  // console.log(files);

  return results;
}
result = printFolder(__dirname);
console.log(result);
fs.writeFile("file.json", JSON.stringify(result), (error) => {
  if (error) throw error;
});
