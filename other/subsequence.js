function findSubsequence(str) {
    if(str.length == 0) 
        return [""];
    

    var smallAns = findSubsequence(str.slice(1));
    var ans = [];

    for(let i = 0; i < smallAns.length; i++) 
        ans[i] = smallAns[i];
    

    for(let i = 0; i < smallAns.length; i++) 
        ans[i + smallAns.length] = str.charAt(0) + smallAns[i];
    

    return ans;
}

function main() {
    var ans = findSubsequence("mehul");
    console.log(ans);
}

main();