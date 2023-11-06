//window.onload = function(){

//}

//Uppgift 4
//skapa en funktion som gör att texten "Du klickade på knappen" kommer upp i consollen när man trycker på knappen. 

function onClick (){
    console.log("Du klickade på knappen")
}
const myButton = document.getElementById("myButton");
myButton.addEventListener("click", onClick);


/* function buttonclick (){
    console.log("Du klickade på OnClick-knappen")
    }
 */

/* const onClick = document.getElementById("onClick");
onClick.addEventListener("click", buttonclick ); */

//Uppgift 5

/* function inputButtonClick (){
    console.log("Du klickade på Formulär-knappen");
    }
 */
//Uppgift 5
// Ena sättet

const inputButton = document.getElementById("inputButton");
const inputText = document.getElementById ("inputText");

function addPTag (){
    const textvalue = inputText.value;
    const paragraph = document.createElement("p");
    paragraph.innerHTML = textvalue;
    document.body.appendChild(paragraph);
}

inputButton.addEventListener("click", addPTag);



/* //Andra sättet
const inputButton = document.getElementById("inputButton");
const inputText = document.getElementById("inputText");

inputButton.addEventListener("click", () => {
    const textValue = inputText.value;

    // Skapa ett <p>-element dynamiskt.
    const paragraph = document.createElement("p");

    // Använd paragraph.innerHTML för att sätta HTML-innehållet.
    paragraph.innerHTML = textValue;

    // Lägg till det skapade <p>-elementet i body-taggen.
    document.body.appendChild(paragraph);

    // Rensa textrutan efter att du har lagt till texten i <p>-elementet.
    inputText.value = "";
});
 */
//Uppgift 6

/* const x = document.getElementById("x");
const y = document.getElementById("y");
const summa = document.getElementById("summa");

function myCount(){
    const xvalue = x.value; 
    const yValue = y.value;
    const sum = xvalue + yValue;
    const p = document.createElement("p");
    p.innerHTML = sum;
    document.body.appendChild(p)
}
summa.addEventListener("click", myCount); 
 */
 //Uppgift 7 försöker göra om x och y till tal. Nu funkar den! 
const x = document.getElementById("x"); // id för min input x
const y = document.getElementById("y"); // id för min input y
const summa = document.getElementById("summa"); // id för min knapp

function myCount(){
    const xvalue = parseInt(x.value); // const xvalue = parseFloat(x.value) om man vill ha decimal-tal. 
    const yValue = parseInt(y.value);
    
    const sum = xvalue + yValue;
    const p = document.createElement("p");
    p.innerHTML = sum;
    document.body.appendChild(p)
}
summa.addEventListener("click", myCount);
 
/* // Alternativ 
const x = document.getElementById("x");
const y = document.getElementById("y");
const summaKnapp = document.getElementById("summa");

function myCount() {
    const xValue = parseInt(x.value) || 0; // Konvertera inmatade x till ett heltal, använd 0 om konverteringen misslyckas. 
    const yValue = parseInt(y.value) || 0; // Konvertera inmatade y till ett heltal, använd 0 om konverteringen misslyckas.

    const sum = xValue + yValue;
    const p = document.createElement("p");
    p.innerHTML = "Summan är: " + sum;
    document.body.appendChild(p);
}

summaKnapp.addEventListener("click", myCount);

const xvalue = parseInt.x.value
 */
//Uppgift 8

/* const q = document.getElementById("q");
const btn_q = document.getElementById("btn_q");
btn_q.addEventListener("click", () => {
const qvalue = parseInt(q.value);
if (qvalue>100) {
    const para = document.createElement("p");
    para.innerHTML = "Det var ett stort tal!";
    document.body.appendChild(para)
}
else{
    const para = document.createElement("p");
    para.innerHTML = "Det var ett litet tal!";
    document.body.appendChild(para);
}
});
 */

// En gång till:
const q = document.getElementById("q");
const btn_q = document.getElementById ("btn_q");
btn_q.addEventListener( ("click"), () =>{
    const qvalue = parseInt(q.value);
    if(qvalue>100){
        const para = document.createElement("p");
        para.innerHTML = " oj vad stort tal!";
        document.body.appendChild(para);
    }
    else{
        const para = document.createElement("p");
        para.innerHTML = "oj vad litet tal!";
        document.body.appendChild(para)
    }
});