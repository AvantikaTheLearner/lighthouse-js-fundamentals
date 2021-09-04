const checkAir = function (samples, threshold) {
  let countDirty = 0;
  let ratioDirty = 1;
  for(let i = 0 ; i < samples.length ; i++)
  {
    if(samples[i] === 'dirty')
    {
      countDirty += 1;
    }
  }
  ratioDirty = countDirty / samples.length ;
  if( ratioDirty < threshold)
  {
    return 'Clean';
  }
  else
  {
    return 'Polluted';
  }
};

console.log(checkAir(
  ['clean', 'clean', 'dirty', 'clean', 'dirty', 'clean', 'clean', 'dirty', 'clean', 'dirty'],
  0.3
));

console.log(checkAir(
  ['dirty', 'dirty', 'dirty', 'dirty', 'clean'],
  0.25
));

console.log(checkAir(
  ['clean', 'dirty', 'clean', 'dirty', 'clean', 'dirty', 'clean'],
  0.9
))