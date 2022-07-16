const fs = require("fs").promises;

fs.readFile("./readme.txt")
// 성공하면 then 안의 펑션이 실행됨
    .then((data) => {
        console.log(data);
        console.log(data.toString());
    })
// 실패하면 catch 안의 펑션이 실행됨
    .catch((err) => {
        console.log(err);
    })