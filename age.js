function ageCalculator(name, yearOfBirth, currentYear)
{
  let age = 0;
  let string = '';
  age = currentYear - yearOfBirth;
  string = name + " is " + age + " years old."
  return string;
}


console.log(ageCalculator("Miranda", 1983, 2015));
console.log(ageCalculator("Ferdinand", 1988, 2015));