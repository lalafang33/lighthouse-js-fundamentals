const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
];

function chooseStations(stations){
  for (constant stations of stations){
    const capacity = station [1];
    if(capacity > 20 && station3[2]=== 'school' || station3[2]=== 'community centre'){
      console.log(station[0]);
    } else{
      console.log("not a voting station");
    }
} 
chooseStations(stations);


function chooseStations(station){
  var goodStations = []
  for (const stations of stations){
    const capacity = stations[1];
    if (capacity >= 20){
      const type = stations[2]
        if (type === 'school' || type === 'community centre'){
          goodStations.push(stations[0]);
        }
    }
  } 
}return goodStations;

console.log(chooseStations(station));

function chooseStations(stations){

const chooseStations = function (stations) {
var choosenStations = [];
for (const station of stations){
  const capacity = station[1];
  const type = station[2];
  if (capacity >= 20){
    if(type === 'school' || type === 'community centre'){
      choosenStations.push(goodStations[0]);
    }
  }
}return choosenStations;
}
}

console.log(chooseStations(stations));