const sumLargestNumbers = function(data) {
  data.sort(function(a, b) {
  return b - a;
  });
  return (data[0] + data[1]);
  };
 

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));
 
//* kata 3 
const numberOfVowels = function(data) {
  let vowel = 'aeiou';
  let count = 0;
  for(let i = 0; i < data.length; i++){
    if(vowel.indexOf(data[i]) >= 0) count++;
  }
  return count;
};

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));   
console.log(numberOfVowels("aeiou")); 


//* kata 2

const conditionalSum = function(values, condition) { 
  sum = 0 
  for (let i = 0; i < values.length; i++){
   if(condition === 'even' && values[i] % 2 === 0 ){
      sum += values[i];
    } else if (condition === 'odd' && values[i] % 2 !== 0){
        sum += values[i];
      }
    }return sum;
  }; 

console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));




// kata 5

const urlEncode = function(text) {
  text = text.trim();
  let encodedStr = ' ';
  let index = 0; {
  for (let i = 0; i < text.length; i++){
    if(text[i] === ' '){
      encodedStr += text.slice(index, i) + '20%';
      index = i + 1; 
    }
  }
  } return encodedStr + text.slice(index, text.length);
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));

// Kata 6 
const whereCanIPark = function (spots, vehicle) {
  for (let y = 0; y < spots.length; y++){
    for (let x = 0; x < spots[y].length; x++){
      
      const spot = spots[y][x];
      if(vehicle === 'regular'){
        if(spot === 'R'){
          return [x, y];
      }if (vehicle === 'small'){
          if (spot === 'R' || spot === "S"){
            return [x, y];
      } if (vehicle === 'mortorcyle'){
          if (spot === 'R' || spot === 'M' || spot === 'S'){
            return [x, y]
          }
      }
        }
      }
    
    }

  }return false; 
}


console.log(whereCanIPark(
  [
    // COLUMNS ARE X
    // 0    1    2    3    4    5
    ['s', 's', 's', 'S', 'R', 'M'], // 0 ROWS ARE Y
    ['s', 'M', 's', 'S', 'r', 'M'], // 1
    ['s', 'M', 's', 'S', 'r', 'm'], // 2
    ['S', 'r', 's', 'm', 'r', 'M'], // 3
    ['S', 'r', 's', 'm', 'r', 'M'], // 4
    ['S', 'r', 'S', 'M', 'M', 'S']  // 5
  ],
  'regular'
));

console.log(whereCanIPark(
  [
    ['M', 'M', 'M', 'M'],
    ['M', 's', 'M', 'M'],
    ['M', 'M', 'M', 'M'],
    ['M', 'M', 'r', 'M']
  ],
  'small'
));

console.log(whereCanIPark(
  [
    ['s', 's', 's', 's', 's', 's'],
    ['s', 'm', 's', 'S', 'r', 's'],
    ['s', 'm', 's', 'S', 'r', 's'],
    ['S', 'r', 's', 'm', 'r', 's'],
    ['S', 'r', 's', 'm', 'R', 's'],
    ['S', 'r', 'S', 'M', 'm', 'S']
  ],
  'motorcycle'
))


// kata 7 
const checkAir = function (samples, threshold) {
  dirtyCount = 0;
  for(let i = 0; i < samples.length; i++){
    if(samples[i] === 'dirty'){
      dirtyCount++
    }
  }
  if(threshold > dirtyCount/samples.length){
    return 'Polluted';
  }else{
    return 'Clean';
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


