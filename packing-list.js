const packingList = ["bowls", "plates", "pots", "pans", "eating utensils", "glasses", "cups", "cooking utensils"];

console.log("Kitchen stuff to pack:");
for (let i = 0; i < packingList.length; i++) {
  console.log(packingList[i]);
}
packingList[3];


for (var x = 100; x <= 200;++x) {
  if (x % 3 === 0 && x % 4 === 0){
    console.log("LoopyLighthouse");
  } else if (x % 4 === 0) {
    console.log("Lighthouse");
  } else if (x % 3 === 0) {
    console.log("Loopy");
  } else {
    console.log(x);
  }  
}

function loopyLighthouse(range, multiples, words){
  for (var count = range[0]; count <= range[1]; count++) {
    if ((count % multiples[0] === 0) && (count % multiples[1] === 0)) {
      console.log(words[0] + words[1]);
    } else if (count % multiples[0] === 0){
      console.log(words[0]);
    } else if (count % multiples[1] === 0){
      console.log(words[1]);
    } else {
      console.log(count);
    }
  }
}

loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]);




function concat(theArray1, theArray2) {
  var theArray3 = [ ];
  theArray3 = theArray1.concat(theArray2);
  return theArray3;
}

function merge(theArray1, theArray2) {
  var theArray3 = [ ];
  theArray3 = theArray1.concat(theArray2);
  return theArray3.sort();
}
console.log(merge([ 4, 5, 6 ], [ 1, 2, 3, 4 ]), "=?", [ 1, 2, 3, 4, 4, 5, 6 ]);
console.log(merge([ 4 ], [ 2, 5, 8 ]), "=?", [ 2, 4, 5, 8 ]);
console.log(merge([ 1, 2, 6 ], []), "=?", [ 1, 2, 6 ]);

var savingsAccount = {
  balance: 1000,
  interestRatePercent: 1,
  deposit: function addMoney(amount) {
      if (amount > 0) {
          savingsAccount.balance += amount;
      }
  },
  withdraw: function removeMoney(amount) {
      var verifyBalance = savingsAccount.balance - amount;
      if (amount > 0 && verifyBalance >= 0) {
          savingsAccount.balance -= amount;
      }
  },
  printAccountSummary: function (){
    return "Welcome!\n Your balance is currently $"+ savingsAccount.balance +  " and your interest rate is "+ savingsAccount.interest+ "%.";
}
};
console.log(savingsAccount.printAccountSummary());


var facebookProfile ={
  name: "Lala",
  friends: 2,
  messages: ["I love Mcdonalds", "Everyone come to my party", "Learning how to code"],
  postMessage: function(message){
    return message.push("I love learning"); 
  },
  deleteMessage: function(index){
    return message.splice([1]);
  },
  addFriend: function(){
    friends = friends + 1; 
    return friends;
  },
  removeFriend: function(){
    friends = friends - 1; 
    return this.friends;
  },
}

smartGarbage('recycling', {waste: 4, recycling: 3, compost:5}),
trash: function(type){
  return smartGarbage[1]
}

const smartGarbage = (trash, bins) => {
  bins[trash] += 1; 
  return bins;
}

var cars = {
  speed: [],
  time: [],
carPassing: function(speed, time){
  carPassing =[],
  for (var i = 1, i <= Cars.speed.length; i++){

  }
}
}

const carPassing = function (cars, speed) {
  let newObject = {
    speed:speed,
    time: date.now(),
  }
  cars = cars.push(newObject);
  return cars; 
  
  }
  
  const cars = [
    {
      time: 1568329654807,
      speed: 40,
    },
    {
      time: 1568329821632,
      speed: 42,
    },
    {
      time: 1568331115463,
      speed: 35
    }
  ]
  
  const speed = 38
  
  carPassing(cars, speed)