const moves = ['north', 'north', 'west', 'west', 'north', 'east','north']  

const finalPosition = function (moves) {
  let x = 0;
  let y = 0;
  let arrayMove = [];
  for(let i = 0 ; i < moves.length ; i++)
  {
    if(moves[i] === 'south')
    {
      y -= 1;
    } else if(moves[i] === 'north')
    {
      y += 1;
    } else if(moves[i] === 'west')
    {
      x -= 1;
    } else if(moves[i] === 'east')
    {
      x += 1;
    }
  }
  arrayMove.push(x);
  arrayMove.push(y);
  return arrayMove;
}


console.log(finalPosition(moves));
