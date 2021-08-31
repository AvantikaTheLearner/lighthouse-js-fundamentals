function howManyHundreds(num)
{
  let container;
  if(num % 100 === 0)
  {
    container = num / 100;
  }
  else
  {
    container = num % 100;
    num -= container;
    container = num / 100;
  }
  return container;
}

console.log(howManyHundreds(1000));
console.log(howManyHundreds(894));
console.log(howManyHundreds(520));
console.log(howManyHundreds(99));
console.log(howManyHundreds(0));