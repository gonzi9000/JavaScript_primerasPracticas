// CALCULADORA CALLBACK
let suma = (n1, n2) => n1 + n2;
let resta = (n1, n2) => n1 - n2;
let multiplicar = (n1, n2) => n1 * n2;
let dividir = (n1, n2) => n1 / n2;

let calculadora = (n1, n2, operacion) => operacion(n1, n2);
console.log(calculadora(20,10,resta));// 10   


// FILTER CON NÚMEROS
 let alumnos = [
    {nombre: 'Joaquin', apellido: 'Ramirez', promedio: 8.5, aprobado: true},
    {nombre: 'Mariel', apellido: 'Lopez', promedio: 7, aprobado: true},
    {nombre: 'Ernesto', apellido: 'Hernandez', promedio: 4, aprobado: false},
 ];

 let aprobados = alumnos.filter(alumnos=> alumnos.aprobado == true);
 console.log(aprobados);
 let desaprobados = alumnos.filter(alumnos=> alumnos.aprobado == false);
 console.log(desaprobados);

  /* 
    if(promedio >= 7){
    console.log('alumnos aprobados' );
    }else{
        console.log('alumnos desaprobados')
    };
    */    
    
   
    // MAP cambio de horarios

let horarios = '';




