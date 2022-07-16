import { odd, even } from "./var_es6.js";

function checkOddOrEven(num) {
    if(num % 2 == 1) {
        return odd;
    }
    return even;
}

export default checkOddOrEven; 