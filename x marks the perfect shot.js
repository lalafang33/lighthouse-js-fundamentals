const finalPosition - function (moves){
  let grid = [0,0];
  for (let i= 0, i< moves.lengthl i++){
    if (moves[i] === 'north'){
      grid[1] = grid[1] + 1;
    } else if (moves[i] === 'south') {
      grid[1] = grid[1] - 1;
    } else if (moves[i] === 'east') {
      grid[0] = grid[0] + 1;
    } else if (moves[i] === 'west') {
      grid[0] = grid[0] - 1;
    }
  }
  return grid; =
};
    }
  }
}




function ageCalculator (name, yearOfBirth, currentYear){
  var age = currentYear - yearOfBirth;
  return name + "is " + age + "years old.";
}
console.log(ageCalculator("Miranda", 1983, 2015));
console.log(ageCalculator("Ferdinand", 1988, 2015));



function howManyHundreds(num){
  num = num % 100 = 0 


}


function calculateRectangleArea(length, width){
  var area = length x width 
  return area;
}

function calculateTriangleArea(base, height){
  var triangleArea = base x height / 2; 
  return triangleArea;
}

function calculateCircleArea(radius){
  var circleArea = π x (radius^2); 
  return circleArea;
}