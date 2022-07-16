const fs = require("fs")

fs.readFile("./readme.txt", (err, data) => {
    if(err) {
        // 에러를 던지면서 함수 중단
        throw err;
    }
    console.log(data);
    console.log(data.toString());
});