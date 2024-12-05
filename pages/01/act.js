function displayGreeting1(msg){
    console.log(msg);
}

function displayGreeting2(msg1,msg2){
    console.log(msg1);
    console.log(msg2);
}

// A
displayGreeting1("Good evening","José");
// B
displayGreeting1("Good evening","José");
// C
let name = "José";
displayGreeting1("Good evening",name);
// D
displayGreeting2("Good evening",name);
// E
let nameb = "Dave";
displayGreeting2("Good evening",nameb);
// F
let str = "Good evening, Dave";
displayGreeting2(str);
// G
let sum = 2+3;
displayGreeting1("The sum is",sum);

// H
let sum2 = 2+3;
displayGreeting1(sum2);

// I
let sum3 = 2+3;
displayGreeting2("The sum is",sum3);

// J
displayGreeting2("2+3", "equals", "5");