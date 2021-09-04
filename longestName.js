const instructorWithLongestName = function(instructors) {
  longest = instructors[0]["name"].length;
  let temp = 0;
  for( let i = 0 ; i < instructors.length ; i++)
  {
    if( longest < instructors[i]["name"].length)
    {
      longest = instructors[i]["name"].length
      temp = i ;
    }
  }
  for( let i = 0 ; i < instructors.length ; i++)
  {
    if(i !== temp)
    {
      if((longest === instructors[i]["name"].length) && (temp > i))
      {
        longest = instructors[i]["name"].length
        temp = i ;
      }
    }
  }
  return instructors[temp];
};

console.log(instructorWithLongestName([
  {name: "Samuel", course: "iOS"},
  {name: "Jeremiah", course: "Web"},
  {name: "Ophilia", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(instructorWithLongestName([
  {name: "Matthew", course: "Web"},
  {name: "David", course: "iOS"},
  {name: "Domascus", course: "Web"}
]));