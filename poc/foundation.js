// HTML page -> work -> browser
// represent webpage
// console.log(document);
// element -> search return

 let h2Elem = document.querySelector("h2");
// h2Elem text laa ke dedo
// console.log(h2Elem.innerText);
// h2Elem text change karna
// h2Elem.innerText = "New Value";
// let ulELem = document.querySelector('ul');

// // li create

// let liElem = document.createElement("li");
// // li content add
// liElem.innerText = "I am an li element";
// // append ul
// ulELem.appendChild(liElem);

// for(let i=0;i<=5;i++){
//     let liELem = document.createElement("li");
//     liELem.innerText = "I am li "+i;
//     ulELem.appendChild(liELem);
// }

// remove
// h2Elem.remove();
/*********** Event listeners **************/
let ulELem = document.querySelector('ul');
let liElem = document.createElement("li");
// // // li content add
liElem.innerText = "I am an li element";
//ul
ulELem.appendChild(liElem);


// event listen -> logic apply
liElem.addEventListener("click",liRemover);
function liRemover(){
    console.log("Li was clicked");
    liElem.remove();
}


/** 
 * document -> create, update, delete , read
 * eventlistener -> element pe event -> listener -> logic run
 */