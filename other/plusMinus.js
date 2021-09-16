function PlusMinus(num) {
    let arr = num.split('').map((num) => parseInt(num)); // We need to break the integer apart into its individual numbers.
    let combinations = []; //make an array to hold our possible solution strings.
  
    const iterate = ([d, ...rest], combination, sum) => { //helper function to traverse through our array of numbers.
        
      if (rest.length === 0) {
        if (sum + d === 0) 
          combinations.push(combination + '+');
        if (sum - d === 0) 
          combinations.push(combination + '-');
      }else{
        iterate(rest, combination + '+', sum + d);
        iterate(rest, combination + '-', sum - d);
      }
    }
  
    const moreMinus = (solutions) => { // Another helper funciton to figure out the best possible solution from the nes we have come up with.
      return solutions.reduce((acc, curr) => [...acc].filter(c => c === '-').length > [...curr].filter(c => c === '-').length ? acc : curr);
    }
  
    iterate(arr.slice(1), '', arr[0]);
    return combinations.length ? moreMinus(combinations) : 'not possible';  // we return the possibility with the most minuses or we return 'not possible'
  }
  
  console.log(PlusMinus('35132'));
  console.log(PlusMinus('199'));
  console.log(PlusMinus('26712'));