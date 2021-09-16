function fractionToDecimal(numr, denr)
    {
        // Initialize result
        let res = "";
  
        // Create a map to store already
        // seen remainders. Remainder is
        // used as key and its position in
        // result is stored as value.
        // Note that we need position for
        // cases like 1/6.  In this case,
        // the recurring sequence doesn't
        // start from first remainder.
        let mp = new Map();
        mp.clear();
  
        // Find first remainder
        let rem = numr % denr;
        // Keep finding remainder until
        //  either remainder becomes 0 or repeats
        while ((rem != 0) && (!mp.has(rem)))
        {
            // Store this remainder
            mp.set(rem, res.length);
  
            // Multiply remainder with 10
            rem = rem * 10;
  
            // Append rem / denr to result
            let res_part = Math.floor(rem / denr);
            res += res_part.toString();
            // Update remainder
            rem = rem % denr;
        }
  
        if (rem == 0)
            return "";
        else if (mp.has(rem))
            return res.substr(mp.get(rem));
  
        return "";
    }
 
// Driver program
 
      let numr = 8, denr = 3;
      let res = fractionToDecimal(numr, denr);
      if (res == "")
          console.log("No recurring sequence");
      else
          console.log("Recurring sequence is "
                             + res);

