
let a = 5;
let b = 3;

let resultados = a & b ;

console.log(resultados); 

console.log('________________________');

//* ASME un ejemplo para usar .map en javascript 

const numeros = [1, 2, 3, 4, 5];

const numerosMultiplicados = numeros.map( numero => numero * 2 );
console.log(numerosMultiplicados);

console.log('___________________________');

//* Crea una función que imprima en consola los números del 1 al 20 y 
//* que en los múltiplos de 2 obtener 'play' en javascript

function imprimirNumero() {
    for (let i = 1; i <= 20; i++) {
        if (i % 2 === 0) {
            console.log('play');
        } else {
            console.log(i);
        }
    }
}
imprimirNumero();

//* Números FizzBuzz
//*Descripción: Imprime los números del 1 al 100. Para los múltiplos de 3, 
//*imprime "Fizz" en lugar del número, y para los múltiplos de 5, imprime "Buzz". 
//*Si el número es múltiplo de ambos (3 y 5), imprime "FizzBuzz".
//*Objetivo: Practicar el uso de condicionales.

for (let i = 0; i < 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log('FizzBuzz');
    } else if (i % 3 === 0) {
        console.log('Fizz');
    } else if (i % 5 === 0) {
        console.log('Buzz');
    } else {
        console.log(i);
    }
}

console.log('________________________');


//* Palíndromo
//* Descripción: Escribe una función que verifique si una palabra 
//* o frase es un palíndromo (se lee igual de izquierda a derecha y viceversa, 
//* ignorando espacios y puntuación).
//* Objetivo: Trabajar con cadenas y manipulación de texto.

function esPalindromo(cadena) {
    // Convertir la cadena a minúsculas y eliminar los caracteres no alfabéticos
    let cadenaLimpia = cadena.toLowerCase().replace(/[^a-z0-9]/g, '');
    
    // Invertir la cadena limpia
    let cadenaInvertida = cadenaLimpia.split('').reverse().join('');
    
    // Comparar la cadena limpia con la invertida
    return cadenaLimpia === cadenaInvertida;
  }
  
  // Ejemplo de uso:
  console.log(esPalindromo("A man, a plan, a canal, Panama")); // true
  console.log(esPalindromo("No es un palíndromo")); // false
  

  console.log('______________________________');

 //* Factorial
 //* Descripción: Crea una función que calcule el factorial de un número dado.
 //* Objetivo: Practicar recursividad o bucles.
  
 function factorialRecursivo(n) {
    if (n === 0 || n === 1) {
      return 1;
    } else {
      return n * factorialRecursivo(n - 1);
    }
  }
  
  // Ejemplo de uso:
  console.log(factorialRecursivo(5)); // 120
  

  function factorialIterativo(n) {
    let resultado = 1;
    for (let i = 2; i <= n; i++) {
      resultado *= i;
    }
    return resultado;
  }
  
  // Ejemplo de uso:
  console.log(factorialIterativo(5)); // 120
  

 /*  console.log('___________________________'); */
  

/* 
function fibonacci(n) {
    if (n <= 1) {
      return n;
    } else {
      return fibonacci(n - 1) + fibonacci(n - 2);
    }
  }
  
  // Función para obtener los primeros N números de la secuencia
  function generarFibonacci(n) {
    let secuencia = [];
    for (let i = 0; i < n; i++) {
      secuencia.push(fibonacci(i));
    }
    return secuencia;
  }
  
  // Ejemplo de uso:
  console.log(generarFibonacci(12)); // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89]
   */
  console.log('__________________________');

//* Secuencia de Fibonacci
//* Descripción: Escribe una función que devuelva 
//* los primeros N números de la secuencia de Fibonacci.
//* Objetivo: Practicar con series numéricas y recursión.

  function fibonacci(n) {
    let secuencia = [0, 1];
    for (let i = 2; i < n; i++) {
      secuencia.push(secuencia[i - 1] + secuencia[i - 2]);
    }
    return secuencia.slice(0, n); //* Para manejar casos donde n < 2
  }  
//* Ejemplo de uso:
  console.log(fibonacci(12)); //* [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89]
  
console.log('__________________________________');

//* Suma de dígitos
//* Descripción: Crea una función que tome un número entero y 
//* devuelva la suma de sus dígitos. Por ejemplo, para el número 1234, 
//* el resultado sería 10 (1 + 2 + 3 + 4).
//* Objetivo: Manejar operaciones con números y cadenas.

function sumaDeDigitos(numero) {
  //* Convertir el número a una cadena, luego dividirla en caracteres, 
  //*convertir cada uno a número y sumarlos
  let suma = numero
   .toString()      //* Convertir el número a cadena
   .split('')       //* Dividir la cadena en un array de caracteres
   .map(Number)     //* Convertir cada carácter de vuelta a número
   .reduce((acc, digito) => acc + digito, 0 );
         //* Suma todos los dígitos en el arreglo. 
         //* acc es el acumulador que guarda la suma parcial, y
         //* digito es el valor actual en cada iteración.

   return suma;
}
console.log(sumaDeDigitos(1234)); //* 10
console.log(sumaDeDigitos(56789)); //* 35

console.log('______________________________');

//* Aplanar una lista
//* Descripción: Dada una lista que puede contener otras listas anidadas, 
//* escribe una función que la aplane, es decir, 
//* devuelva una lista simple con todos los elementos. 
//* Por ejemplo, [[1, 2], [3, [4, 5]]] debería convertirse en [1, 2, 3, 4, 5].
//* Objetivo: Practicar recursión y manejo de listas.

let lista = [[1, 2], [3,[4, 5]], 6];
let listaAplanada = lista.flat(Infinity);  //* El parámetro Infinity aplana todas las capas
console.log(listaAplanada);  //* [1, 2, 3, 4, 5, 6]

console.log('______________________________');

//* Anagramas
//* Descripción: Escribe una función que determine si dos cadenas son anagramas, 
//* es decir, si tienen las mismas letras en el mismo número, pero en distinto orden. 
//* Por ejemplo, "amor" y "roma" son anagramas.
//*Objetivo: Manipulación de cadenas y manejo de conteo de caracteres.

function sonAnagramas(cadena1, cadena2) {
   //* Eliminar espacios y convertir a minúsculas
  let limpiarCadena = (cadena) => cadena.toLowerCase().replace(/\s+/g, '');

   //* Ordenar los caracteres de ambas cadenas y compararlas
  let cadenaOrdinaria1 = limpiarCadena(cadena1).split('').sort().join('');
  let cadenaOrdinaria2 = limpiarCadena(cadena2).split('').sort().join('');

  return cadenaOrdinaria1 === cadenaOrdinaria2;

  /* split(''): Convierte la cadena en un arreglo de caracteres.
     sort(): Ordena alfabéticamente los caracteres.
     join(''): Une los caracteres nuevamente en una cadena.
          Comparación:
  Si las cadenas ordenadas son iguales, las dos cadenas originales son anagramas.
 */
}

console.log(sonAnagramas('amor', 'roma'));   //* true
console.log(sonAnagramas('objeto', 'jetos')); //* false
console.log(sonAnagramas('listen', 'silent')); //* true
console.log(sonAnagramas('hola', 'adios'));    //* false
console.log(sonAnagramas('reto', 'rote'));    //* true


console.log('________________________________');


//* Adivina el número
//* Descripción: Crea un programa que genere un número aleatorio entre 1 y 100, 
//* y permita al usuario adivinarlo. El programa debe indicar 
//* si el número ingresado es mayor o menor que el número generado.
//* Objetivo: Practicar interacción con el usuario y condicionales.

function adivinaElNumero() { 
  // Generar un número aleatorio entre 1 y 100
  let numeroSecreto = Math.floor(Math.random() * 100) + 1;
  let intento = null;

   // Mientras el intento no sea igual al número secreto
  while (intento !== numeroSecreto) {
    // Pedir al usuario que ingrese un número
    intento = parseInt(prompt('Adivina el numero entre 1 y 100:'));

    if (isNaN(intento)) {
      alert('Porfavor, ingresa un numero valido.');
    } else if (intento < numeroSecreto) {
      alert('El numero es mayor');
    } else if (intento > numeroSecreto) {
      alert('El numero es menor');
    }else {
      alert('¡Felicidades! Adivinaste el numero correcto');
    }
  }
}
adivinaElNumero();
 
console.log('_________________________');

//* Encontrar el número más grande
//* Descripción: Escribe una función que encuentre
//* el número más grande en una lista de números.
//* Objetivo: Manipulación de listas y bucles.

function numeroMasGrande(lista) {
  return Math.max(...lista);
}
console.log(numeroMasGrande([10, 20, 30, 50]));  // 50


function numeroMasGrande(lista) {
  let maximo = lista[0];  // Asignar el primer número de la lista como el máximo inicial
  for (let i = 1; i < lista.length; i++) {
    if (lista[i] > maximo) {
      maximo = lista[i];  // Actualizar el máximo si se encuentra un número mayor
    }
  }
  return maximo;
}
console.log(numeroMasGrande([10, 20, 60, 70]));  // 70


function numeroMasGrande(lista) {
  return lista.reduce((maximo, numero) => {
    return numero > maximo ? numero : maximo;
  }, lista[0]);
}
console.log(numeroMasGrande([10, 20, 30, 60]));  //60

/* Operador Ternario (? :)
El operador ternario es una forma concisa de escribir una declaración if-else. Su sintaxis es:
condición ? expresiónSiVerdadero : expresiónSiFalso;
condición: La expresión que se evalúa como true o false.
expresiónSiVerdadero: El resultado si la condición es verdadera.
expresiónSiFalso: El resultado si la condición es falsa. */

let edad = 18;
let resultado = (edad >= 18) ? "Es mayor de edad" : "Es menor de edad";
console.log(resultado); // "Es mayor de edad"


console.log('_____________________________');

//* Reversa de una cadena
//* Descripción: Escribe una función que reciba una cadena y 
//* la devuelva en orden inverso. Por ejemplo, 
//* si se pasa "hola", la función debería devolver "aloh".
//* Objetivo: Practicar con cadenas y bucles.

function reversaCadena(cadena) {
  return cadena.split('').reverse().join('');
    //split('') convierte "hola" en ['h', 'o', 'l', 'a'].
    //reverse() invierte el arreglo a ['a', 'l', 'o', 'h'].
    //join('') une el arreglo de vuelta a la cadena "aloh".

}
console.log(reversaCadena('hola'));  // "aloh"


console.log('_____');

function reversaCadena(cadena) {
  let reversa = '';
  for (let i = cadena.length - 1; i >= 0; i--) {
    reversa += cadena[i];
  }
  return reversa;
}
console.log(reversaCadena('hola'));  // "aloh"
