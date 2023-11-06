import './../css/style.css'

// uppgift 1
/* window.onload = function(){
  const myNameLetters= "Patricia";
  
  console.log(myNameLetters.length)
  for (let i = 0; i < myNameLetters.length; i++) { // En loop görs uppgift2. 
    console.log(myNameLetters[i]);
  }
}
 */
/* const myNameLetters= "Patricia";
const p = document.createElement("p");
  console.log(myNameLetters.length)
  for (let i = 0; i < myNameLetters.length; i++) { // En loop görs uppgift2. 
    console.log(myNameLetters[i] + " ");
    p.innerHTML = ""
    document.body.appendChild(p);
  } */

/*   // annat sätt. Mindre kod. 
 const myNameLetters= "Patricia";
  let helaNamnet = "";
    for (let i = 0; i < myNameLetters.length; i++) { 
      if (myNameLetters.length -1){ // om i är på sista positionen ska mellanrummet läggas på
        helaNamnet += myNameLetters [i] + " "; //+= behåller värdet den har och lägger på helaNAmnet = HelaNamnet+myNameLetters
      }      
      else
      helaNamnet += myNameLetters [i];
      };
      console.log(helaNamnet); 
 */ 
//uppgift 4
//const numbers= [1,2,3,4,5,6,7,8,9,10];

//uppgift 5
// skapa en array
const numbers= [1,2,3,4,5,6,7,8,9,10];
let sum = 0 //

for(let i=0; i<numbers.length; i ++){ // iterate over each item in the array
  let summa = "";
sum += numbers[i];
};
console.log(sum)

//uppgift 6

const djur = ["katt", "hund", "elefant", "zebra", "åsna", "gorilla"];
const theList = document.getElementById("theList");
for (let index = 0; index < djur.length; index++) {
  const li = document.createElement("li");
  li.innerHTML = djur[index];
  theList.appendChild(li);
  
}
