const urlEncode = function(text) {
  if(text)
  {
    text = text.trim(); //removes white spaces from both ends of string
  }
  text = text.split(" ").join('%20');
  return text;
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));