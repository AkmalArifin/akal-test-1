function countCode(str) {
    const pattern = "co*e";
    var i = 0;          // pointer for str
    var j = 0;          // pointer for pattern
    var flagC = false;  // flag if third character is 'c'
    var count = 0;      // count results

    while (i + pattern.length - j - 1 < str.length) {
        if (j == 2) {
            flagC = str[i] === 'c';
            i++; 
            j++; 
        } else if (str[i] == pattern[j]) {
            i++; 
            j++;
            if (j > 3) {
                count++;
                j = 0;
            }
        } else {
            if (j === 3 && flagC) {
                j = 1;
            } else if (j > 0) {
                j = 0;
            } else {
                i++;
            }
        }
    }
    return count;
}

console.log(countCode('aaacodebbb')) // 1
console.log(countCode('codexxcode')) // 2
console.log(countCode('cozexxcope')) // 2