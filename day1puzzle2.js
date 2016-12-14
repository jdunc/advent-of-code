let directions = 'L5, R1, R4, L5, L4, R3, R1, L1, R4, R5, L1, L3, R4, L2, L4, R2, L4, L1, R3, R1, R1, L1, R1, L5, R5, R2, L5, R2, R1, L2, L4, L4, R191, R2, R5, R1, L1, L2, R5, L2, L3, R4, L1, L1, R1, R50, L1, R1, R76, R5, R4, R2, L5, L3, L5, R2, R1, L1, R2, L3, R4, R2, L1, L1, R4, L1, L1, R185, R1, L5, L4, L5, L3, R2, R3, R1, L5, R1, L3, L2, L2, R5, L1, L1, L3, R1, R4, L2, L1, L1, L3, L4, R5, L2, R3, R5, R1, L4, R5, L3, R3, R3, R1, R1, R5, R2, L2, R5, L5, L4, R4, R3, R5, R1, L3, R1, L2, L2, R3, R4, L1, R4, L1, R4, R3, L1, L4, L1, L5, L2, R2, L1, R1, L5, L3, R4, L1, R5, L5, L5, L1, L3, R1, R5, L2, L4, L5, L1, L1, L2, R5, R5, L4, R3, L2, L1, L3, L4, L5, L5, L2, R4, R3, L5, R4, R2, R1, L5';
directions = directions.split(', ');
// //console.log(directions.length);
let coordinatesPassed = [[0,0]];
let currentCoordinates = [0,0];
let doublePasses = [];
let currentDirection = 'N'; // N S E W
let blocksTravelled = [0,0,0,0]; //NSEW
//we start facing north
for (let i = 0; i < directions.length; i++) {
  //console.log(directions[i]);
  let rightLeft = directions[i].charAt(0);
  if (currentDirection === 'N' && rightLeft === 'L') {
    let distance = parseInt(directions[i].split('L')[1]);
    blocksTravelled[3] += distance;
    currentDirection = 'W';
    for (let i = 0; i < distance; i++) {
      let newX = currentCoordinates[0] - 1;
      currentCoordinates = [newX, currentCoordinates[1]];
      if(coordinatesPassed.indexOf(currentCoordinates) !== -1){
        doublePasses.push(currentCoordinates);
      }
      coordinatesPassed.push(currentCoordinates);
      //console.log(i);
    }
  } else   if (currentDirection === 'N' && rightLeft === 'R') {
    let distance = parseInt(directions[i].split('R')[1]);
    blocksTravelled[2] += distance;
    currentDirection = 'E';
    for (let i = 0; i < distance; i++) {
      let newX = currentCoordinates[0] + 1;
      currentCoordinates = [newX, currentCoordinates[1]];
      if(coordinatesPassed.indexOf(currentCoordinates) !== -1){
        doublePasses.push(currentCoordinates);
      }
      coordinatesPassed.push(currentCoordinates);

      //console.log(i);
    }
  } else if (currentDirection === 'S' && rightLeft === 'L') {
    let distance = parseInt(directions[i].split('L')[1]);
    blocksTravelled[2] += distance;
    currentDirection = 'E';
    for (let i = 0; i < distance; i++) {
      let newX = currentCoordinates[0] + 1;
      currentCoordinates = [newX, currentCoordinates[1]];
      if(coordinatesPassed.indexOf(currentCoordinates) !== -1){
        doublePasses.push(currentCoordinates);
      }
      coordinatesPassed.push(currentCoordinates);
      //console.log(i);
    }
  } else if (currentDirection === 'S' && rightLeft === 'R') {
    let distance = parseInt(directions[i].split('R')[1])
    blocksTravelled[3] += distance;
    currentDirection = 'W';
    for (let i = 0; i < distance; i++) {
      let newX = currentCoordinates[0] - 1;
      currentCoordinates = [newX, currentCoordinates[1]];
      if(coordinatesPassed.indexOf(currentCoordinates) !== -1){
        doublePasses.push(currentCoordinates);
      }
      coordinatesPassed.push(currentCoordinates);
      //console.log(i);
    }
  } else   if (currentDirection === 'E' && rightLeft === 'L') {
    let distance = parseInt(directions[i].split('L')[1]);
    blocksTravelled[0] += distance;
    currentDirection = 'N';
    for (let i = 0; i < distance; i++) {
      let newY = currentCoordinates[1] + 1;
      currentCoordinates = [currentCoordinates[0], newY];
      if(coordinatesPassed.indexOf(currentCoordinates) !== -1){
        doublePasses.push(currentCoordinates);
      }
      coordinatesPassed.push(currentCoordinates);
      //console.log(i);
    }
  } else   if (currentDirection === 'E' && rightLeft === 'R') {
    let distance = parseInt(directions[i].split('R')[1]);
    blocksTravelled[1] += distance;
    currentDirection = 'S';
    for (let i = 0; i < distance; i++) {
      let newY = currentCoordinates[1] - 1;
      currentCoordinates = [currentCoordinates[0], newY];
      if(coordinatesPassed.indexOf(currentCoordinates) !== -1){
        doublePasses.push(currentCoordinates);
      }
      coordinatesPassed.push(currentCoordinates);
      //console.log(i);
    }
  } else   if (currentDirection === 'W' && rightLeft === 'L') {
    let distance = parseInt(directions[i].split('L')[1]);
    blocksTravelled[1] += parseInt(directions[i].split('L')[1]);
    currentDirection = 'S';
    for (let i = 0; i < distance; i++) {
      let newY = currentCoordinates[1] - 1;
      currentCoordinates = [currentCoordinates[0], newY];
      if(coordinatesPassed.indexOf(currentCoordinates) !== -1){
        doublePasses.push(currentCoordinates);
      }
      coordinatesPassed.push(currentCoordinates);
      //console.log(i);
    }
  } else   if (currentDirection === 'W' && rightLeft === 'R') {
    let distance = parseInt(directions[i].split('R')[1]);
    blocksTravelled[0] += distance;
    currentDirection = 'N';
    for (let i = 0; i < distance; i++) {
      let newY = currentCoordinates[1] + 1;
      currentCoordinates = [currentCoordinates[0], newY];
      if(coordinatesPassed.indexOf(currentCoordinates) !== -1){
        doublePasses.push(currentCoordinates);
      }
      coordinatesPassed.push(currentCoordinates);
      //console.log(i);
    }
  }
}
// console.log(doublePasses);
let coordinatesPassedString = [];
// coordinatesPassed.split(',');
for (var i = 0; i < coordinatesPassed.length; i++) {
  let x = coordinatesPassed[i][0];
  let y = coordinatesPassed[i][1];
  coordinatesPassedString.push(`${x}, ${y}`);
// console.log(coordinatesPassed[i][1]);
}
// console.log(coordinatesPassedString);
for (var i = 0; i < coordinatesPassedString.length; i++) {
  // console.log(coordinatesPassedString.indexOf(coordinatesPassedString[i]));
  if (coordinatesPassedString.indexOf(coordinatesPassedString[i]) !== i) {
    console.log('heres the one' + coordinatesPassedString[i]);
  }
}
// console.log(coordinatesPassed);
//console.log(coordinatesPassed);
// //console.log(blocksTravelled);
// //console.log(Math.abs(blocksTravelled[0]-blocksTravelled[1]));
// //console.log(Math.abs(blocksTravelled[2]-blocksTravelled[3]));
let totalBlocks = Math.abs(blocksTravelled[0]-blocksTravelled[1]) + Math.abs(blocksTravelled[2]-blocksTravelled[3]);
// //console.log('total blocks travelled = ' + totalBlocks);
