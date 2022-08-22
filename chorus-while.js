const chorus = "Let's dance!";
let repeat = 0;
while (repeat < 10) {
  console.log(chorus);
  repeat++;
}
console.log("Until the sun comes up!");


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

for (var x = 100; x <= 200;++x) {
    
}