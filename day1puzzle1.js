let directions = 'L5, R1, R4, L5, L4, R3, R1, L1, R4, R5, L1, L3, R4, L2, L4, R2, L4, L1, R3, R1, R1, L1, R1, L5, R5, R2, L5, R2, R1, L2, L4, L4, R191, R2, R5, R1, L1, L2, R5, L2, L3, R4, L1, L1, R1, R50, L1, R1, R76, R5, R4, R2, L5, L3, L5, R2, R1, L1, R2, L3, R4, R2, L1, L1, R4, L1, L1, R185, R1, L5, L4, L5, L3, R2, R3, R1, L5, R1, L3, L2, L2, R5, L1, L1, L3, R1, R4, L2, L1, L1, L3, L4, R5, L2, R3, R5, R1, L4, R5, L3, R3, R3, R1, R1, R5, R2, L2, R5, L5, L4, R4, R3, R5, R1, L3, R1, L2, L2, R3, R4, L1, R4, L1, R4, R3, L1, L4, L1, L5, L2, R2, L1, R1, L5, L3, R4, L1, R5, L5, L5, L1, L3, R1, R5, L2, L4, L5, L1, L1, L2, R5, R5, L4, R3, L2, L1, L3, L4, L5, L5, L2, R4, R3, L5, R4, R2, R1, L5';
directions = directions.split(', ');
// console.log(directions.length);

var currentDirection = 'N'; // N S E W
var blocksTravelled = [0,0,0,0]; //NSEW
//we start facing north
for (var i = 0; i < directions.length; i++) {
  var rightLeft = directions[i].charAt(0);
  if (currentDirection === 'N' && rightLeft === 'L') {
    blocksTravelled[3] += parseInt(directions[i].split('L')[1]);
    currentDirection = 'W';
    // console.log('from N to W', directions[i].split('L')[1]);
    // console.log(blocksTravelled[3]);
  } else   if (currentDirection === 'N' && rightLeft === 'R') {
    blocksTravelled[2] += parseInt(directions[i].split('R')[1]);
    currentDirection = 'E';
  } else   if (currentDirection === 'S' && rightLeft === 'L') {
    blocksTravelled[2] += parseInt(directions[i].split('L')[1]);
    currentDirection = 'E';
  } else   if (currentDirection === 'S' && rightLeft === 'R') {
    blocksTravelled[3] += parseInt(directions[i].split('R')[1]);
    currentDirection = 'W';
  } else   if (currentDirection === 'E' && rightLeft === 'L') {
    blocksTravelled[0] += parseInt(directions[i].split('L')[1]);
    currentDirection = 'N';
  } else   if (currentDirection === 'E' && rightLeft === 'R') {
    blocksTravelled[1] += parseInt(directions[i].split('R')[1]);
    currentDirection = 'S';
  } else   if (currentDirection === 'W' && rightLeft === 'L') {
    blocksTravelled[1] += parseInt(directions[i].split('L')[1]);
    currentDirection = 'S';
  } else   if (currentDirection === 'W' && rightLeft === 'R') {
    blocksTravelled[0] += parseInt(directions[i].split('R')[1]);
    currentDirection = 'N';
  }
}

console.log(blocksTravelled);
console.log(Math.abs(blocksTravelled[0]-blocksTravelled[1]));
console.log(Math.abs(blocksTravelled[2]-blocksTravelled[3]));
var totalBlocks = Math.abs(blocksTravelled[0]-blocksTravelled[1]) + Math.abs(blocksTravelled[2]-blocksTravelled[3]);
console.log('total blocks travelled = ' + totalBlocks);
