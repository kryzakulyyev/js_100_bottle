
let numberOfBottles = 99


function bottleOfNumber(num,fall){
 
  while(num >= 0){
   if(num === 0){
     console.log('No more bottle of milk on the wall.');
   }else if(num===1){
    console.log("1 bottle left!!!");
    }else{
    console.log(num + ' bottle of milk on the wall. Take one down, pass it around.');
    } 
    num-=fall
 }
}

bottleOfNumber(numberOfBottles,1);

//Step 2
// bottles(25, 5);
// console.log(num + ' bottle of milk on the wall. Take one down, pass it around.');


// 3- 
let input = parseInt(prompt("Please enter bottle number!"));
let fallInput = parseInt(prompt("Please enter how many bottle you want to fell down!"));
bottles(input, fallInput);
console.log("------------------");

function bottles2() {
  let num = parseInt(prompt("Please enter bottle number!"));
  while(num >= 0 ) {
    let fall = parseInt(prompt("Please enter how many bottle you want to fell down!"));
    if(num === 0) {
      console.log('No more bottle of milk on the wall.');
    } else {
      console.log(num+ "bottle of milk on the wall. Take one down, pass it around");
    }
    
    num -= fall;
  }
}

bottles2();
