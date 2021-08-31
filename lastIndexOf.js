function lastIndexOf(array, value)
{
  let i = 0;
  let temp;
  
  while(i < array.length)
  {
    if(array[i] === value)
    {
      temp = i ;
    } 
    i++;
  }
  if((temp == null) || (array.length < 1))
  {
    temp = -1 ;
  }
  return temp;
}

console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 1));
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 2));
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 3));
console.log(lastIndexOf([ 5, 5, 5 ], 5));
console.log(lastIndexOf([], 3));