const sumLargestNumbers = function(data) {
  let largest = data[0];
  let temp = 0;
  for (let i = 1 ; i < data.length ; i++)
  {
    if(largest < data[i])
    {
      largest = data[i];
      temp = i;
    }
  }
  let secondLargest = data[0];
  for (let i = 1 ; i < data.length ; i++)
  {
    if((secondLargest < data[i]) && (i !== temp))
    {
      secondLargest = data[i];
    }
  }
  return largest + secondLargest ;
};

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));
console.log(sumLargestNumbers([34, 4, 92, 6, 10, 2]));