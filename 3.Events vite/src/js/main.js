import './../css/style.css'

function myFirstFunction(){
    console.log("Du klickade");
}

//FÖRSTA HÄNDELSEN: 
// jag lägger till en händelse "click", när knappen klickas körs funktionen "myFirstFunction" och då skrivs "Du klickade" i consolen.
//first.addEventListener("click", myFirstFunction); 

//ANDRA HÄNDELSEN:
// vi gör en ny händelse till vår knapp, funktionen ska heta "paintItBlue". Vi vill att knappen (first) ska få en ny class="blue" när man hovrar över den (event="mouseenter") .
/* first.addEventListener("mouseenter", paintItBlue);
 */
//Jag måste nu göra min funktion "paintItBlue" annars kan inte händelsen ovan göras. Vi använder det andra sättet att göra en funktion. e = event, target= det html-elementet som startade händelsen, e.target = first (vår knapp). vi kan byta ut nu byta ut "first" mot "e.target".
/* const paintItBlue = (e) => {
    e.target.className = "blue";
};
 */


/* const paintItBlue = (e) => {
    e.target.className = "blue";
};
 */

/* const paintItBlue = (e) => {
    e.target.className += " blue";
};
 */
const paintItBlue = (e) => {
    e.target.classList.toggle ("blue");
};

const first = document.getElementById("first");
first.addEventListener("click", myFirstFunction); 
first.addEventListener("mouseenter", paintItBlue);
first.addEventListener("mouseleave", (event) => {
    event.target.classList.toggle("blue");
});



//first.classList.add("red")
//first.classList.remove("red")
//first.classList.toggle("blue");


/* const age = 48;
console.log(age);
 */
/* document.getElementById("app").innerHTML="hej" */