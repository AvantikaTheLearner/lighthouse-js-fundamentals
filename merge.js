function merge(array1, array2)
{
  for(let i = 0 ; i < array2.length ; i++)
  {
    array1.push(array2[i]);
  }
  array1.sort();
  return array1;
}

//console.log(merge([ 4, 5, 6 ], [ 1, 2, 3, 4 ]));
//console.log(merge([ 0, 3, 1 ], [ 9, 7, 2 ]));
//console.log(merge([4], [ 2, 5, 8 ]));
console.log(merge([ 5, 10 ], []));
console.log(merge([], [ 5, 10 ]));