/*   IF / ELSE IF / ELSE  
componentes de un IF
  ejecuta una sentencia si una condicion especificada es evaluada como verdadera. si la condicion es evaluada como falsa, otra sentencia puede ser ejecutada
  CONDICION:   Una expresion q puede ser evaluada como verdadera o falsa
  SENTENCIA1   Sentencia q se ejecutara si la CONDICION es evaluada como VERDADERA
  SENTENCIA2 se ejecutara si CONDICION se evalua como FALSA

  tambien se pueden hacer Multiples sentencis IF...ELSE pueden ser anidadas para crear una clausula   else if;
 */




// ejemplo IF ELSE Sintaxis    clase8
 let edad = 19;
 let acceso = ' ';

 if(edad < 16) {
    acceso = 'Prohibida la Entrada';
 }else if (edad >= 16 && edad <= 18) {
    acceso = 'Permitido solo acompañado de un Mayor';
 }else {
    acceso = 'Permitido';
 }

 // Arrays
 let myArray = ['cosa1','cosa2','cosa3','cosa4','cosa5'];//el conteo del indice  empieza desde el 'CERO' es decir aca hay hasta el objeto 4
//Metodos Arrays


//   .push()    sirve para insertar uno o varios elementos al final del array ya existente
//   recibe uno o mas elementos como parametros
// retorna la nueva longitud del array

let colores = ['rojo','azul','verde'];
colores.push('violeta'); //inserta nuevo apramettro al array
console.log(colores);//imprime lo de arriba
colores.push('gris','amarillo','celeste');
console.log(colores);//imprime lo de arriba si este fue actualizado o no con nuevos datos


//    .pop()   Elimina el ultimo elemento de un array
//  no recibe parametros
//  devuelve elemento eliminado

let series = ['the walking dead','the bing bang teory','malcom','game of trones'];
let ultimaSerie = series.pop();
console.log(series);// muestra todo los elementos del array
console.log(ultimaSerie);// muestra el ultimo elemento del array el cual fue borrado aparte de guardar el elemento


//    .shift()     Elimina el primer elemento de un array
// no recibe aprametros
//  Devuelve el elemento eliminado

let nombres = ['frida','diego','sofia','miguel'];
let primerNombre = nombres.shift(); // se crea variable para guardar lo q devuelve .shift()

console.log(nombres);//frida,diego,sofia
console.log(primerNombre);//miguel


//   .join     une elementos de un array utilizando el separador q le especifiquemos. Si no lo especificamos, utiliza comas
//recibe un separador (String) es opcional
// retorna un string con elementos unidos

let dias = ['martes','miercoles','viernes'];

let separadosPorComas = dias.join();
 console.log(separadosPorComas);

 let separadoPorGuion = dias.join('-');
console.log(separadoPorGuion); 


//   .unshift()      Agrega uno o varios elementos al principio del array
// Recibe uno o ms elementos como paramentros
// Retorna la nueva longitud array


let marcas = ['audi'];

marcas.unshift('ford');
console.log(marcas); //['ford,'audi']   agrega al principio

marcas.unshift('ferrari','BMW');
console.log(marcas);// ['ferrari','BMW','ford','audi']   agrega añ principio


//    .indexOf()       busca en el array el elemento q recibe como parametro
//recibe un elemento a buscar en el array
// retorna el primer indice donde encontro lo q buscamos. Si no lo encuentra retorna un -1.

let frutas = ['manzana','pera','frutilla'];
frutas.indexOf('frutilla'); //encontro lo q buscaba. Devuelve 2, el indice del elemento encontrado

frutas.indexOf('banana');// no encontro lo q buscaba. Devuelve -1



//        .lastindexOf()      similar a .indexOf() con la salvedad d q empieza a buscar el elemento por el final del array (de atras hacia adelante).
//  en caso de haber elementos repetidos, devuelve la posicion dek primero q encuentre (osea el ultimo si miramos desde el principio)

let clubes = ['racing','boca','lanus','boca'];

clubes.lastIndexOf('boca');// encontro lo q   buscaba. devuelve 3

clubes.lastIndexOf('river');// no se encontro lo q buscaba. Devuelve -1



//        .includes()      tambien similar a .indexOf() con la salvedad q retorna un booleano
//   recibe un elemento a buscar en el array
//   retorna TRUE si encontro lo q buscabamos, FALSE en caso contrario

let mascotas = ['gato','perro','loro','tortuga'];

mascotas.includes('tortuga');// encontro lo q buscaba. Devuelve TRUE

mascotas.includes('pajarito');// no encontro lo q buscaba . Devuelve FALSE
















