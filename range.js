function range(start, end, step)
{
  let array = [];
  if((start > end) || (step <=0) || (step == null) || (start == null) || (end == null))
  {
    return array;
  }
  else
  {
    while(start <= end)
    {
      array.push(start);
      start = start + step;
    }
  }
  return array;
}

console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));