
//  Metodos String


//   completar url
function dominio(string){
    return("http://www." + string)    
};

console.log(dominio("digitalhouse.com.ar"));




//   Contar los Caracteres

let texto = 'otorrinolaringologia'.length;
console.log(texto);




// Remplazae fast fast

function remplazoFastFast(texto1, palabra1, palabra2){
   return texto1.replace(palabra1, palabra2)
}
 let txtCambio = remplazoFastFast('voy a remplazar esta palabra','remplazar','sustituir')
console.log(txtCambio);


 
// Buscando palabra
function menciona(texto00, palabra00){
    if (texto00.indexOf(palabra00) == -1){
        return ' ' == false
    };
    return true
};
 console.log(menciona('hola como estas','estas'));


 // Recortar palabra

 let txt = 'hola! soy Carli';

 let licenciada = txt.slice(10); 
 console.log(licenciada);



 //  OBJETO LITERAL

 // crear un objeto literal

 let perro = {
    nombre: 'Rodolfo',
    edad: 5,
    vacunado: true
 };
 console.log(perro);



 // utlizando los metodos de los objetos
let contador = 5;
 let deportista = {
    nombre: 'Armando',
    energia: 100,
    experiencia: 10,
  entrenarHoras: function(horas) {
    this.energia = this.energia - (horas * 5);
    this.experiencia = this.experiencia + (horas *2);
    
 }
 
 };

console.log(deportista.entrenarHoras(contador));
console.log('deportista energia restante: ' +deportista.energia);
console.log('deportista experiencia ganada: ' +deportista.experiencia);
console.log(deportista);



// ARROW FUNCTION   
// convierte a arrow function

const arUno = x => x * x;
console.log(arUno(2));     

// arrow saludar

let saludar = nombre => 'Hola '+ nombre;
console.log(saludar('mario'));


// arrow function q recibe mas de un parametro

const darSaludo = (nombre, apellido) => 'Hola ' + nombre +' '+ apellido + ', ¿Como estas?';
console.log(darSaludo('Horacio', 'Gutierrez'));


//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> NOTA PRACTICAR MUCHO MAS ESTO XQ SE ME OLVIDA Y NO LO ENTIENDO BIEN  <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

//   SWITCH e IF   el case debe ser del tipo de dato de variable, ya se string o numero

// fin de semanda
// 
let dia = 'domingo o sabado';

    switch(dia){
        case 'lunes':
        case 'martes':
             console.log('es: ' + 'principios de semana')
        break;
        case 'miercoles':
         case 'jueves': 
         console.log('es: ' + 'mediados de semana')
        break;
        case 'viernes': console.log('es: ' + 'casi fin de semana')
        break;
        default: 
        console.log('es: ' + 'fin de semana')
    }

console.log(dia);

// function con switch ejemplo

function finDeSemana(dia){
    switch(dia){
        case 'lunes':
        case 'martes':
            console.log('q fiaca empezar');
            
             break;
        case 'miercoles':
        case 'jueves':
             console.log('x ffin casi fin de semana');
             break;
       default: console.log('q fekicidad fin de semana x fin!!!');
        break;


    }
}
console.log(finDeSemana);