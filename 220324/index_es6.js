import { odd, even } from "./var_es6.js";
import checkNumber from "./func_es6.js";

// 문자열 길이가 홀수인지 짝수인지 판단하는 함수
function checkStringOddOrEven(str) {
    if(str.length % 2 == 1) {
        return odd;
    }
    return even;
}

console.log(checkNumber(10));
// 문자열 길이가 짝수인지 홀수인지 판별
console.log(checkStringOddOrEven("hello"));