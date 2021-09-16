function combination(digit) {
    if( digit === 0 || digit === 1)
        return [""];
    
    var keypad = [];
    keypad[2] = "abc";
    keypad[3] = "def";
    keypad[4] = "ghi";
    keypad[5] = "jkl";
    keypad[6] = "mno";
    keypad[7] = "pqrs";
    keypad[8] = "tuv";
    keypad[9] = "wxyz";

    var last = digit % 10;
    digit = Math.floor(digit / 10);
    var combArr = combination(digit);
    var lastArr = [...keypad[last]];
    var smallAns = [];
    combArr.forEach(element => {
        lastArr.forEach(char => {
            smallAns.push(element+char);
        })
    });
    
    return smallAns;
}

console.log(combination(10));