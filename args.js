#!/usr/bin/env node

//  Get arguments
let [,, ...nums] = process.argv;

//  If there are no arguments, log 0 and exit
if (nums.length === 0) {
  console.log(0);
  process.exit();
}

//  Use .map to parse each index of nums to Numbers,
//  then filter out any index that is not a number,
//  finally, sum each index using reduce

let args = nums.map((num) => parseFloat(num))
               .filter((num) => !isNaN(num));


//  Check if args.length is 0 after map and filter, if it is, log a string, if not, sum the array using reduce
args = args.length === 0 ? `Please enter numbers` : args.reduce((sum, num) => sum += num)
console.log(args);
