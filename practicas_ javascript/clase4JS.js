//  CALLBACKS   AND  METHODS ARRAYS PART-2

//    Callbacks ---> es una funcion que se pasa como parametro de otra funcion, la fuuncion q lo recibe es quien la ejecuta cuando sea

// ejemplo callback
function nombreCompleto(nombre, apellido){
    return nombre + ' '+ apellido;
};

function saludar(nombre, apellido, callback){
    return 'Hola ' + callback(nombre, apellido) + ' !';
};

saludar('Juanete', 'Sanchez', nombreCompleto);


// METODOS ARRAYS  PARTE 2 ---- METHODS ARRAYS PART TWO

// JS provee varios metodos para ejecutar arrays para usarlos se precisa entender bien el CALLBACK
// las funciones pueden recibir uno o mas parametros, en ese caso pueden ser números, strings, boleans, fuunciones
// cuando un metodo o funcion recibe una funcion como parametro a esa funcion es a la q se le llama   CALLBACK



//   .map()    este metodo recibe recibe como parametro callback. Recorre el array y devuelve el nuevo array ya modificado con lo configuracion programada 
//  en la  funcion invocada mediante el callback 

// ejemplo
let numeros = [2, 4, 6];
let elDoble = numeros.map(function(num){
    // multiplicara por 2 cada numero
    return num * 2;
});
console.log(elDoble); //[4,8,12]  


//    .filter()   metodo  q  recibe funcion como parametro, recorre el array y filtra los elementos segun la condicion programada en el CALLBACK
// retorna una nuevo array q contiene unicamente los elementos q cumplan con esa condicion, osea q puede tener menos elementos q el array original

//ejemplo 

let edades = [22, 8, 17, 14, 30];
let mayores = edades.filter(function (edad){
    return edad > 18;
});
console.log(mayores);

//   .reduce()  este metodo recorre el array y devuelve un unico valor. Recibe  un CALLBACK  q se ejecuta sobre cada elemento del array. Este a su ves 
// recibe 2 parametros: un ACOMULADOR y el elemento actual q este recorriendo

// example

let nums = [5, 7, 16];
let suma = nums.reduce(function(acum, nums){
    return acum + nums;
});
console.log(suma); // 28


//  .forEach()  el proposito de este metodo es iterar(realizar una accion varias veces) sobre un array. Recibe un CALLBACK  
// como parametro a diferencia de los anteriores metodos

// example

let paises = ['Argentina', 'Bolivia', 'Brasil'];
paises.forEach(function(pais){
    console.log(pais);
});

