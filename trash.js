const smartGarbage = function(trash, bins) {
  if(trash === 'recycling')
  {
    bins['recycling']++;
  } else if(trash === 'waste')
  {
    bins['waste']++;
  }
  else
  {
    bins['compost']++;
  }
  return bins;
}

console.log(smartGarbage('recycling', { waste: 4, recycling: 2, compost: 5 }));