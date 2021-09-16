function factor(n) {
    var ans = {
                diff: n-1,
                arr: [n,1]
            };
    for(let i = 1; i <= Math.floor(Math.sqrt(n)); i++) {
        if( n%i == 0 ) {
            let firstFactor = i;
            let secondFactor = n/i;
            if(firstFactor >= secondFactor) {
                if(ans["diff"] > (firstFactor - secondFactor)) {
                    ans["diff"] = firstFactor - secondFactor;
                    ans["arr"] = [firstFactor, secondFactor];
                }
            }else{
                ans["diff"] = secondFactor - firstFactor;
                ans["arr"] = [secondFactor, firstFactor];
            }
        }
    }
    return ans;
}

function recursiveFactor(m,n) {
    if (n <= 0 ) 
        return [];
    var ans = recursiveFactor(m, n-1);
    var factor = [];
    if(m%n == 0) {
        factor.push(n);
        factor.push(m/n);
        ans.push(factor);
    }
    
    return ans;
}



console.log(recursiveFactor(122122,Math.floor(Math.sqrt(122122))));