function subset(arr) {
    if (arr.length == 0)
        return [""];

    var smallAns = subset([...arr.slice(1)]);
    var ans = [];
    smallAns.forEach(element => {
        ans.push(element);
    });
    var helper = [];
    for (let j = 0; j < smallAns.length; j++) {
        helper.push(arr[0] +"-"+ smallAns[j]);
    }
    if(helper.length > 0)
    {
        helper.forEach(element => {
            ans.push(element);
        });
    }

    return ans;
}

console.log(subset([1,2,3]));