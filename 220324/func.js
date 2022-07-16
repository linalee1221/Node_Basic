const { odd, even } = require("./var");

function checkOddOrEven(num) {
    if(num % 2 == 1) {
        return odd;
    }
    return even;
}

module.exports = checkOddOrEven;