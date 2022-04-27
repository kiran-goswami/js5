console.log("working");
// loops , for,while,do while,for each,for-in
for(let i=10; i<20;i++){
console.log(i);
}
// in for loop first condition checks then if conditionn is true it will go inside the body after that it will increment
// while loop it first checks the checks condition and then do decrement or increment

let a=10;
while(a>0){
console.log(a);
a--;
}
// do while

// using for loop try to print a multiple of 2
for(let i=2; i<=10;i++) {
    console.log(i*2);
}
let j=2;
while(j<=20){
    console.log(j);
    j=j+2;
}
let c=2;
do{
console.log(a);
c=c+2;
} while(c<=20);

// for-in loop we will get indexses

let name="kiran";
let tourists = ["kiran","goswami"];
for (let k in tourists)
{
    console.log(k);
}
// for-of loop gives all values
for(let values of tourists){
    console.log(values);
}

// forEach loop for indexex as well as values
tourists.forEach((index,values)=>{
    console.log(values,index);
})





