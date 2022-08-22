let age = 13 

if (age < 13){
    return
}if else (age >= "13" && age <= "18"){
    console.log("I am going to Secondary School");
} else{
    console.log("I am going to Lighthouse labs.");
}while (x <= 20) {
    if (x % 3 === 0 && x % 5 === 0){
        console.log("JuliaJames");
    }else if(x % 5 === 0){
        console.log("James");
    }else if(x % 3 === 0){
    console.log("Julia");
    } else {
        console.log(x);
    }
x = x + 1;
}  

while (num >=1) {
    // Last iteration. Note occurances of bottle, bottle, bottleS
    if (num === 1) {
        console.log(num + " bottle of juice on the wall! "
                    + num + " bottle of juice! Take one down, pass it around... "
                    + (num-1) + " bottles of juice on the wall!");
    }
    // Second-last iteration. Note occurances of bottleS, bottleS, bottle
    else if (num === 2){
        console.log(num + " bottles of juice on the wall! "
                    + num + " bottles of juice! Take one down, pass it around... "
                    + (num-1) + " bottle of juice on the wall!");
    }
    // All other iterations. Note occurances of bottleS, bottleS, bottleS
    else {
        console.log(num + " bottles of juice on the wall! "
                    + num + " bottles of juice! Take one down, pass it around... "
                    + (num-1) + " bottles of juice on the wall!");
    }
    num = num - 1;
}


while (num >=1 ) {
    if(num === 1 ){
        console.log(num +" bottle of juice on the wall!" 
                        + num +" bottle of juice! Take one down, pass it around..."
                        + (num -1) +" bottles of juice on the wall!");
        }
        else if (num === 2) {
            console.log(num +" bottles of juice on the wall!" 
                        + num +" bottles of juice! Take one down, pass it around..."
                        + (num -1) + " bottle of juice on the wall!");
    }else {
        console.log(num +" bottles of juice on the wall!" 
                    + num +" bottles of juice! Take one down, pass it around..."
                    + (num -1) + " bottles of juice on the wall!");
    }    
    num = num - 1;
}
