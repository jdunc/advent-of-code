let directions = 'L5, R1, R4, L5, L4, R3, R1, L1, R4, R5, L1, L3, R4, L2, L4, R2, L4, L1, R3, R1, R1, L1, R1, L5, R5, R2, L5, R2, R1, L2, L4, L4, R191, R2, R5, R1, L1, L2, R5, L2, L3, R4, L1, L1, R1, R50, L1, R1, R76, R5, R4, R2, L5, L3, L5, R2, R1, L1, R2, L3, R4, R2, L1, L1, R4, L1, L1, R185, R1, L5, L4, L5, L3, R2, R3, R1, L5, R1, L3, L2, L2, R5, L1, L1, L3, R1, R4, L2, L1, L1, L3, L4, R5, L2, R3, R5, R1, L4, R5, L3, R3, R3, R1, R1, R5, R2, L2, R5, L5, L4, R4, R3, R5, R1, L3, R1, L2, L2, R3, R4, L1, R4, L1, R4, R3, L1, L4, L1, L5, L2, R2, L1, R1, L5, L3, R4, L1, R5, L5, L5, L1, L3, R1, R5, L2, L4, L5, L1, L1, L2, R5, R5, L4, R3, L2, L1, L3, L4, L5, L5, L2, R4, R3, L5, R4, R2, R1, L5';
directions = directions.split(', ');
// console.log(directions.length);
var coordinatesPassed = [[0,0]];
var currentCoordinates = [0,0]; // x,y
var currentDirection = 'N'; // N S E W
var blocksTravelled = [0,0,0,0]; //NSEW
//we start facing north
for (var i = 0; i < directions.length; i++) {
  var rightLeft = directions[i].charAt(0);
  if (currentDirection === 'N' && rightLeft === 'L') {
    blocksTravelled[3] += parseInt(directions[i].split('L')[1]);
    currentDirection = 'W';
    for (var i = 0; i < parseInt(directions[i].split('L')[1]); i++) {
      console.log(i,currentCoordinates);
      var newX = currentCoordinates[0] - i;
      var currentCoordinates = [newX,currentCoordinates[1]];
      if(coordinatesPassed.indexOf(currentCoordinates) != -1){
        console.log('passed these coordinates ', currentCoordinates);
      }
      else{
        coordinatesPassed.push(currentCoordinates);
      }
    }
  } else   if (currentDirection === 'N' && rightLeft === 'R') {
    blocksTravelled[2] += parseInt(directions[i].split('R')[1]);
    currentDirection = 'E';
    for (var i = 0; i < parseInt(directions[i].split('R')[1]); i++) {
      console.log(i,currentCoordinates);
      var newX = currentCoordinates[0] + i;
      var currentCoordinates = [newX,currentCoordinates[1]];
      if(coordinatesPassed.indexOf(currentCoordinates) != -1){
        console.log('passed these coordinates ', currentCoordinates);
      }
      else{
      }
    }
  } else   if (currentDirection === 'S' && rightLeft === 'L') {
    blocksTravelled[2] += parseInt(directions[i].split('L')[1]);
    currentDirection = 'E';
    for (var i = 0; i < parseInt(directions[i].split('L')[1]); i++) {
      console.log(i,currentCoordinates);
      var newX = currentCoordinates[0] + i;
      var currentCoordinates = [newX,currentCoordinates[1]];
      if(coordinatesPassed.indexOf(currentCoordinates) != -1){
        console.log('passed these coordinates ', currentCoordinates);
      }
      else{
      }
    }
  } else   if (currentDirection === 'S' && rightLeft === 'R') {
    blocksTravelled[3] += parseInt(directions[i].split('R')[1]);
    currentDirection = 'W';
    for (var i = 0; i < parseInt(directions[i].split('R')[1]); i++) {
      var newX = currentCoordinates[0] - i;
      var currentCoordinates = [newX,currentCoordinates[1]];
      if(coordinatesPassed.indexOf(currentCoordinates) != -1){
        console.log('passed these coordinates ', currentCoordinates);
      }
      else{
      }
    }
  } else   if (currentDirection === 'E' && rightLeft === 'L') {
    blocksTravelled[0] += parseInt(directions[i].split('L')[1]);
    currentDirection = 'N';
    for (var i = 0; i < parseInt(directions[i].split('L')[1]); i++) {
      var newY = currentCoordinates[1] + i;
      var currentCoordinates = [currentCoordinates[0],newY];
      if(coordinatesPassed.indexOf(currentCoordinates) != -1){
        console.log('passed these coordinates ', currentCoordinates);
      }
      else{
        coordinatesPassed.push(currentCoordinates);
      }
    }
  } else   if (currentDirection === 'E' && rightLeft === 'R') {
    blocksTravelled[1] += parseInt(directions[i].split('R')[1]);
    currentDirection = 'S';
    for (var i = 0; i < parseInt(directions[i].split('R')[1]); i++) {
      var newY = currentCoordinates[1] - i;
      var currentCoordinates = [currentCoordinates[0],newY];
      if(coordinatesPassed.indexOf(currentCoordinates) != -1){
        console.log('passed these coordinates ', currentCoordinates);
      }
      else{
        coordinatesPassed.push(currentCoordinates);
      }
    }

  } else   if (currentDirection === 'W' && rightLeft === 'L') {
    blocksTravelled[1] += parseInt(directions[i].split('L')[1]);
    currentDirection = 'S';
    for (var i = 0; i < parseInt(directions[i].split('L')[1]); i++) {
      var newY = currentCoordinates[1] - i;
      var currentCoordinates = [currentCoordinates[0],newY];
      if(coordinatesPassed.indexOf(currentCoordinates) != -1){
        console.log('passed these coordinates ', currentCoordinates);
      }
      else{
        coordinatesPassed.push(currentCoordinates);
      }
    }

  } else   if (currentDirection === 'W' && rightLeft === 'R') {
    blocksTravelled[0] += parseInt(directions[i].split('R')[1]);
    currentDirection = 'N';
    for (var i = 0; i < parseInt(directions[i].split('R')[1]); i++) {
      var newY = currentCoordinates[1] + i;
      var currentCoordinates = [currentCoordinates[0],newY];
      if(coordinatesPassed.indexOf(currentCoordinates) != -1){
        console.log('passed these coordinates ', currentCoordinates);
      } else {

        coordinatesPassed.push(currentCoordinates);
      }
    }
  }
}
  console.log(coordinatesPassed);
