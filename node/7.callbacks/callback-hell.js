const fs = require('fs');

fs.readFile('input.txt', 'utf8', (err, data) => {
  if (err) {
    console.log("Error reading file:", err);
    return;
  }
  const modifiedData = data.toUpperCase();
  fs.writeFile('output.txt', modifiedData, (err) => {
    if (err) {
      console.log("Error writing file:", err);
      return;
    }
    console.log("File written successfully.");

    fs.readFile('output.txt', 'utf8', (err, data) => {
      if (err) {
        console.log("Error reading output file:", err);
        return;
      }
      console.log(data);
    });
  });
});