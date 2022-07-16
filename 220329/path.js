const path = require("path");

const string = __filename;

console.log("path.sep:", path.sep);
console.log("path.delimiter:", path.delimiter);

console.log("")

console.log("----------------------------------");
console.log("path.dirname():", path.dirname(string));
console.log("path.extname():", path.dirname(string));
console.log("path.basename():", path.dirname(string));
console.log("path.basename - extname():", path.dirname(string, path.extname(string)));

console.log("")

console.log("----------------------------------");
console.log("path.parse()", path.parse(string));
console.log("path.format():", path.format({
    dir: "C:\\users\\zerocho",
    name: "path",
    ext: ".js"
}));
console.log("path.normalize():", path.normalize("C://users\\\zerocho\\\path.js"));

console.log("")

console.log("----------------------------------");
console.log("path.isAbsolute(C:\\):", path.isAbsolute("C:\\"));
console.log("path.isAbsolute(./home):", path.isAbsolute("./home"));
console.log("----------------------------------");

console.log("")

console.log("path.relative():", path.relative("C\\users\\zerocho\\path.js", "C:\\"));
console.log(__dirname);
console.log("path.join():", path.join(__dirname, "..", "..", "/users", ".", "/zerocho"));