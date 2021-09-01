const vegetables = [
  {
    submitter: 'Old Man Franklin',
    d: 1,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    d: 20,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    d: 4,
    plumpness: 3
  }
]

const metric = 'd';

const judgeVegetable = function (vegetables, metric) {
  let highest = vegetables[0][metric];
  let temp = 0;
  for(let i = 1; i < vegetables.length ; i++)
  {
    if(vegetables[i][metric] > highest)
    {
      highest = vegetables[i][metric];
      temp = i;
    }
  }
  return vegetables[temp].submitter;
}



console.log(judgeVegetable(vegetables, metric));