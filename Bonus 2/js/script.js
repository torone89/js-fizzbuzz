
// VERIFICA COLLEGAMENTO JAVA
console.log("JS")



// DICHIARAZIONI VARIABILi

const contenitore = document.getElementById("quadrato")
console.log(contenitore)

// SOLUZIONE FINALE IN CONSOLE 

let numero

for (var i = 1; i <= 100; i++) {



    numero = i
    if (numero % 3 == 0 && numero % 5 == 0) {
        numero = " FizzBuzz";
    }
    if (numero % 3 == 0) {
        numero = " Fizz";
    }

    if (numero % 5 == 0) {
        numero = " Buzz";
    }

    // STAMPO NEL CONTENITORE
    console.log(numero)
    contenitore.innerHTML +=
        `
        <div class="col">
        <div class="quadrato d-flex align-items-center justify-content-center m-1 p-2">
        <strong>${numero}</strong>
        </div>
        </div>
        
        `


}
