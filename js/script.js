
// VERIFICA COLLEGAMENTO JAVA
console.log("JS")



// DICHIARAZIONI VARIABILi

const contenitore = document.getElementById("quadrato")
console.log(contenitore)

// SOLUZIONE FINALE IN CONSOLE 

let numero = ""

for (var i = 1; i <= 100; i++) {

    if (i % 3 == 0 && i % 5 == 0) {
        numero = "FizzBuzz"


    }
    else if (i % 3 == 0) {
        numero = " Fizz";

    }
    else if (i % 5 == 0) {
        numero = " Buzz";

    }
    else { numero = i }

    console.log(numero)

}


