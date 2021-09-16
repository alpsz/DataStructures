function grammerCheck (first, rem) {
    // console.log("first:> ", first);
    // console.log("rem:> ", rem);
    if (rem == '' && first == '') {
        // console.log("if str empty");
        return console.log(false);
    }
    if (rem == '') {
        // console.log("if rem empty");
        return console.log(true);
    }
    var remain = rem.charAt(0) + rem.charAt(1);
    console.log("0",rem.charAt(0));
    console.log("1",rem.charAt(1));

    if (first == 'a' &&  remain == 'bb') {
        // console.log("if a");
        first = 'bb';
        rem = rem.slice(2);
        // console.log("after silce:> ", rem);
        grammerCheck(first, rem);
    } else if (first == 'bb' && rem.charAt(0) == 'a') {
        // console.log("if bb");
        first = 'a';
        rem = rem.slice(1);
        // console.log("after silce:> ", rem);
        grammerCheck(first, rem);
    } else {
        return console.log(false);
    }
}

function checkAB(str) {
    if (str.length == 0) 
        return true;
    
    if (str.charAt(0) == 'a') {
        if (str.slice(1).length > 1 && str.substring(1,3) == 'bb')
            return checkAB(str.substring(3));
        else
            return checkAB(str.substring(1));
    }

    return false;
}

let str = "abbb";
// grammerCheck(str.charAt(0), str.slice(1));
console.log(checkAB(str));