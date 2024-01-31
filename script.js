//1. Crea una funzione che controlli due numeri interi. Ritorna true se uno dei due è 50 o se la somma dei due è 50.
function solution(num1, num2) {
    if (num1 === 50 || num2 === 50 || num1 + num2 === 50) {
        return true;
    } else {
        return false;
    }
}


//2. Crea una funzione che rimuova il carattere in una specifica posizione da una stringa. La funzione riceve come parametri la stringa  
// e la posizione e ritorna la stringa modificata.
function removeChar(string, position) {
    if (position < 0 || position >= string.length) {
        return string;
    }
    return string.slice(0, position) + string.slice(position + 1);
}


let result = removeChar("Hello World", 2);
console.log(result);




//3. Crea una funzione che controlli se due numeri sono compresi tra 40 e 60 o tra 70 e 100. Ritorna true se soddisfano queste condizioni, 
// altrimenti ritorna false.
function checkRange(num1, num2) {
    let inFirstRange = num1 >= 40 && num1 <= 60 && num2 >= 40 && num2 <= 60;
    let inSecondRange = num1 >= 70 && num1 <= 100 && num2 >= 70 && num2 <= 100;

    return inFirstRange || inSecondRange;
}





//4. Crea una funzione che accetti il nome di una città come parametro e ritorni lo stesso nome se inizia con "Los" o "New", 
// altrimenti ritorni false.
function solution(cityName) {
    if (cityName.startsWith("Los") || cityName.startsWith("New")){
        return cityName;
    } else {
    return false;
    }
    }




//5. Crea una funzione che calcoli e ritorni la somma di tutti gli elementi di un array. L'array deve essere passato come parametro.
function solution(array) {
    return array.reduce((acc, current) => acc + current, 0);
}


function solution(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum;
}


function solution(array) {
    let sum = 0;
    array.forEach(element => {
        sum += element;
    });
    return sum;
}



//6. Crea una funzione che verifichi che un array NON contenga i numeri 1 o 3. Se NON li contiene, ritorna true, altrimenti ritorna false.
function solution(array) {
    if (array.includes(1) || array.includes(3)) {
        return false;
    } else {
        return true;
    }
}




//7. Crea una funzione per determinare il tipo di un angolo in base ai gradi passati come parametro.
// Angolo acuto: meno di 90° => ritorna "acuto"
// Angolo ottuso: tra 90° e 180° => ritorna "ottuso"
// Angolo retto: 90° => ritorna "retto"
// Angolo piatto: 180° => ritorna "piatto"
function determinaTipoAngolo(gradi) {
    if (gradi < 90) {
        return "acuto";
    } else if (gradi === 90) {
        return "retto";
    } else if (gradi > 90 && gradi < 180) {
        return "ottuso";
    } else if (gradi === 180) {
        return "piatto";
    } else {
        return "Invalid value";
    }
}






//8. Crea una funzione che generi un acronimo a partire da una frase. Esempio: "Fabbrica Italiana Automobili Torino" deve ritornare "FIAT".
function solution(phrase){
    return phrase
        .split(' ')
        .map(word => word[0].toUpperCase())
        .join('');
}























