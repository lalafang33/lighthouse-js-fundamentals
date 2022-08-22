

const carPassing = function (cars, speed) {
  let newObject = {
    speed:speed,
    time: date.now(),
  }
  cars.push(newObject);
  return cars; 
  
  }
  
  
  
  carPassing(cars, speed);
  console.log(cars);  

  const vegetables = function judgeVegetable(veggies, characteristic){
    var veggies = [ ];

  }

const judgeVegetable = function (vegetables, metric) {
 let vegetables = [];
 vegetables = {
   submitter: submitter,
   redness: redness,
   plumpness:plumpness, 
vegetables.redness.sort();
vegetables.plumpness.sort();
if (vegetables.redness > vegetables.plumpness || vegetables.plumpness > vegetables.redness){
  return submitter;
}
}
}

const judgeVegetable = function (vegetables, metric) {
  veggies.sort(function (a, b) {
    return b[metric] - a[metric];
  });
  return veggies[0].submitter;
};
const veggies = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5,
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8,
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3,
  },
];

const metric = 'redness';

judgeVegetable(veggies, metric);


const judgeVegetable = function (vegetables, metric) {
  vegetables.sort(function (a, b) {
    return b[metric] - a[metric];
  });
  return vegetables[0].submitter
}