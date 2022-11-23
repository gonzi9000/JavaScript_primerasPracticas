//     clase 3 JSON  (JAVA SCRIPT OBJECT NOTATION)   cadena de texto simple STRING      compatible con multiples lenguajes
//  formato de texto sencillo utilizado para intercambio de texto entre distintos sistemas
//  
/*
        JAVASCRIPT                                               JSON
{                                                    {
    texto: 'mi texto'                                   "texto": "mi texto",
    numero: 16,                                         "numero": 16,
    array: ['uno','dos'],                               "array": ["uno","dos"],
    booleanno: true,                                    "booleano": true
    metodo(): {return '¡hola!'},        
}                                                     }   
                                                      JSON  no soporta metodos
*/

//    JSON.parse()     convierte un texto en formato JSON al tipo de dato equivalente JAVASCRIPT
//recibe una cadena de texto con formato JSON
// devuelve el mismo dato q recibio en formato JAVASCRIPT

let datosJson = '{"club": "independiente", "barrio": "avellaneda"}';
let datosConvertidos = JSON.parse(datosJson);

console.log(datosConvertidos);
//se vera en consola un objeto literal
// {club: 'independiente', barrio: 'avellaneda}´



//          JSON.stringify()    convierte un tipo de dato de JAVASCRIPT en texto en formato JSON
//   recibe un tipo de dato de  JAVASCRIPT
//   devuelve una cadena de texto con formato JSON

let objetoLiteral = {nombre: 'carla', pais: 'argentina'};
let datosConverJSON = JSON.stringify(objetoLiteral);

console.log(datosConverJSON);
// se veran en consola los datos en un string de tipo JSON
// '{"nombre": "carla", "pais": "argentina"}'


//   METODOS de STRING    array de caracteres al igual q un array la primera posicion sera siempre "0"

let nombreString = 'Francisco';
//para acceder a un caracter puntual de un String, nombramos al String y dentro de los corchetes escribimos el indice q queremos acceder
nombreString[3];  //accedemos a la  letra N del indice 3 del string


//   .length     Esta propiedad retorna la cantidad total de caracteres incluidos los espacios, como es una propieedad, al usarla no precisamos los parentesis

let miSerie = 'Mat Men';
miSerie.length; // devuelve 7

let arrayNombres = ['Bart', 'Lisa', 'Homero'];
arrayNombres.length; // devuelve 3

arrayNombres[0].length;// corresponde a "Bart" devuelve 4

//    indexOf()       busca en el String el String q recibe como parametro----- revibe un elemento a buscar en el array-----
// retorna el primer indice donde encontro lo q buscamos,, si no lo encuentra devuelve "-1"

let saludo = 'hola! estoy programando';

saludo.indexOf('estoy'); // devuelve 5
saludo.indexOf('vamos'); // devuelve -1, no encontro el String buscado
saludo.indexOf('l');  // encuentra la letra 'l' q esta en la posicion 2, devuelve2 y corta la ejecucion


//     .slice()       Corta el string y devuelve una parte de donde se aplica ------ corta una seccion de un texto especificandolo mediante la posicion de su indice 
// recibe 2 numeros como parametro, el indice  desde donde inicia el corte y el indice hasta donde finaliza el corte---------- devuelve la parte correspondiente al corte

let frase = 'Breaking Bad Rules!';
frase.slice(9,12);// devuelve 'Bad'
frase.slice(13); // devuelve 'Rules!'
frase.slice(-10);//el conteo comienza de atras hacia adenalte devuelve--> 'Bad Rules!'
console.log(frase.slice(-6));


//          .trim()     elimina los espacios q estan al principio y al final de un String --------no recibe parametros---------no quita los espacios del medio

let nombreCompleto = '   Homero Smpson   ';
nombreCompleto.trim(); // devuelve 'Homero Simpson'

let nombreCompleto2 = '   Homero   J.   Simpson   ';
nombreCompleto2.trim();// devñuelve 'Homero   J.   Simpson'


//     .split()      Divide un String en partes-------recibe un string q usara como separador de las partes--------devuelve un array con las partes del string

let cancion = 'And bingo was his name, oh!';
cancion.split(' '); // devuelve ['And', 'bingo', 'was', 'his', 'name,', 'oh!']

cancion.split(', '); // devuelve ['And bingo was his name', 'oh!'] ------toma la coma como caracter separador en el texto



//   .replace()   Remplazas una parte del String por otra----- el String q queremos buscar o el q se va remplazar-------retorna un String con el remplazo
// son metodos simples q combinados logran resultados mas complejos

let fraseR = 'Aguante Javita';
fraseR.replace('Javita', 'JavaScript'); // devuelve 'Aguante JavaScript'  -->  remplazo una palabra completa
fraseR.replace('jav', 'SQL'); // devuelve 'Aguante SQLita'   --> remplaza parte d una palabra
console.log(fraseR.replace('Jav', 'SQL')); // -----prueba------



//  Objetos Literales ---> son la representacin en codigo de un elemento de la vida real
//  Un Objeto es una estructura de datos q puede contener PROPIEDADES y METODOS

//  ESTRUCTURA BASICA   --------> para su creacion se usa llaves de apertura y cierre {}   (Parecido a javita d mi kokoro)

let auto ={
    patente: 'AC 123 DD'
};  //PROPIEDAD: definimos el nombre d la propiedad de un objeto-------DOS PUNTOS: separa el nombre d la propiedad, de su valor--------- VALOR: puede ser cualquier tipo de dato permitido


//PRPIEDADES DE UN OBJETO    -----   un objeto puede tener las propiedades q queramos, si hay mas de una, las separamos con comas ',' 
// Con el nombre/notacion del objeto.propiedad accedemos a al valor de cada una de ellas

let futbolista ={
    nombre:'Roger',
    apellido: 'Federer'
};
console.log(futbolista.nombre); // devuelve el Nombre 'Roger'
console.log(futbolista.apellido);// devuelve el Apellido 'Federer'


//  METODOS DE UN OBJETO ----- una PROPIEDAD puede almaceanr cualquier tipo de dato. si una propiedad alamancena una FUNCION, se dice q es un metodo del objeto

let tenista = {
    nombre: 'Marcos',
    apellido: 'Vianchi',
    saludar: function(){
        return 'hola me llamo Marcos';
    }
};

console.log(tenista.saludar()); // devolveria ?Hola me llamo Marcos'


//  TRABAJANDO DENTRO DEL OBJETO --- la palabra reservada 'THIS' hace referencia en si al objeto donde estamos parados. Es decir el objeto en si donde escribimos la palabra
// Con la notacion   this.propiedad accedemos al valor d cada prpiedad interna d ese objeto

let ciclista = {
    nombre: 'Alfonso',
    apellido: 'Aguirre',
    darSaludo: function(){ return '¡Hola! Me Llamo ' + this.nombre;}
};
console.log(ciclista.darSaludo());// ¡Hola! Me Llamo Alfonso



//  FUNCIONES CONSTRUCTORAS  

































