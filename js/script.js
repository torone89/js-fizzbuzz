
// VERIFICA COLLEGAMENTO JAVA
console.log("JS")


// // SCRIVO UN NUMERO DA 1 a 100

// let content = ''; contaMultipi = 0
// for (let i = 1; i <= 100; i++) {
//     content = ("scrivi " + i);
//     console.log(content);


// DICHIARAZIONI VARIABILi

const contenitore = document.getElementById("quadrato")
console.log(contenitore)

// SOLUZIONE FINALE IN CONSOLE 

let numero

for (var i = 0; i <= 100; i++) {

    numero = i

    if (numero % 3 == 0) {
        numero += " Fizz";
    }

    if (numero % 5 == 0) {
        numero += " Buzz";
    }

    // STAMPO NEL DOC
    console.log(numero)
    contenitore.innerText += " " + "scrivi " + numero

}






// for (var i = 0; i < 100; i++) {

//     prova = i
//     if (prova % 5 == 0) {
//         prova = "buzz"
//     }
//     console.log(prova)
// }

