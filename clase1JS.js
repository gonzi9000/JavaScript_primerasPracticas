//clase 1  JAVASCRIPT
 
//declaracionb de variables
let nombre = 'Gonzalo'; //String     supuestamente ya no se usa 'var' para declarar variables(investigar eso despues)
const apellido = 'Arancibia'; //String   declara constante(no se puede modificar el valor de la variable) 
let edad = 35; //Int enteros
let altura = 183.43;  // decimales, simepre con'.' nunca con comas (x el idioma)
let hombreSigma = true; // boolean (true and false)

// las comillas simples y las comillas dobles son indiferente en su uso


//objetos
 let persona = {
   nombre: 'Javier', //string
   edad: 35, //number
   soltero: true //boolean
 }

 //array   
let comidasFavoritas = ['Milanesas napolitanas',
   'Ravioles con bolognesa','Pizza calabreza'];

let numerosSorteados =[15,67,43,24,42,545,656,77,3,2];

// tipo de datos especiales
//NaN (Not a Number)   indica q el valor no puede ser parseado como un numero
let malaDivision = '35' / 43; // NaN no es un numero

// Null (valor nulo) lo asignamos nosotros para indicar un valor vacio o desconocido
let temperatura = null;//no llego un dato, algo falló

// Undefined (valor sin definir)    indica la ausencia de valor
// las variables tienen un valor indefinido hasta q les asignemos uno
let saludo;   // undefined, no tiene valor   
saludo = 'hola!!';   // ahora si tiene un valor

 //datos aritmeticos
 //operadores  
 /*  suma +
    resta -
    multiplicar *
    division /
    incremento ++   suma 1
    decremento -- resta 1
    modulo    % devuelve el resto de una division

    comparacion simple
    compara 2 valores i devuelve true or false

    10 == 15// false           == igualdad
    10 != 15//  true          != desigualdad
    
    comparacion estricta   
    10 === '10' igualdad estricta -> false
    10 !== 15 desigualdad estricta -> true
    */
   //operadores de comparacion     siempre escrivir el <> antes q el = en javascript
   15 > 25 //mayor q           false
   15 >= 15 //mayor o igual q   true
   10 < 15 // menor q            true
   10 <= 15 // menor o igual     true

//operadores logicos
//    AND &&    ambos valores deben ser true para dar verdadero
//    OR ||     al menos un valor debe dar como true para q sea verdadero
//    NOT ¡=    niega la condicion, invierte los resultados booleanos,,, si era true, sera false y viceversa


//concatenacion  lo mismo q java
let nomb = 'Gonzalo';
let ap = 'Arancibia';
let nombreComp = nomb + ' ' + ap;

// si mezclamos otros tipo de datos, estos se convierten en cadena de texto
let letra = 'm';
let nu = 7;
let ubi = fila + letra;

//FUNCION parseInt
//vuelve entero todo parametro q le pasemos siempre y cuando pueda transformarse de lo contrario da NaN
let mumEn = parseInt(123.4); // dara 123 osea lo parsea
















