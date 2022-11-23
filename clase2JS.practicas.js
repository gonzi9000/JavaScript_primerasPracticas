// 1 MI PRIMER IF

let dato = true
if(dato == true){
console.log('es true');
}else{
    console.log('es falso');
}

// 2 IGUALDAD, IF Y ELSE

let lenguaje = 'java';
if(lenguaje == 'javascript'){
    console.log('estoy aprendiendo');
}else{
    console.log('lo aprendere mas tarde');
}

// 3 PUEDE PASAR COSME FULANITO?  FUNCTION con IF

function puedePasar (nombre){
    if(nombre == 'cosme fulanito'){
        return false
    }else{
        'julio'
        return true
    }
}
console.log(puedePasar);


// 4   indexOf  array   busca en el array el elento especificado

let alumnos = ['Marcelo','Joaquin','Juan','Hector','Francisco'];
    let indiceJuan = alumnos.indexOf('Juan');
    let indiceFrancisco = alumnos.indexOf('Francisco');
    console.log(indiceFrancisco);
    console.log(indiceJuan);


// 5 join array   une los string usando separadores especificados

let arrayFrase = ['No eh Fracasado, ','simplemente me eh','topado con diezmil','soluciones negativas'];
let fraseNueva = arrayFrase.join(' ');
console.log(fraseNueva);


//  6   .pop array  elimina el ultimo estudiante del array


let estudiantes = [
          //apertura de llaves para la creacion de varios OBJETOS dentro de un array
          //despues de cerrar  la llave al declarar varios objetos, poner COMA','
     {   nombre: 'alfredo',
        promedio: 7,
        curso: 'iOS',
    },
    {
        nombre: 'ramiro',
        promedio: 3,
        curso: 'android',
    },
    {
        nombre: 'daniel',
        promedio: 5,
        curso: 'full stack',
    },
    {
        nombre: 'alexis',
        promedio: 4,
        curso: 'java',
    }
    ];
let alumnosEgresados = estudiantes.pop();
console.log(alumnos);
console.log(alumnosEgresados);



//     .push   array agregar alunEs al final del array

let alumneEs = [
    {
        nombre: 'pablo',
        promedio: 5,
        curso: 'iOS',
    },
    {
        nombre: 'samuel',
        promedio: 2,
        curso: 'base de datos',
    },
    {
        nombre: 'elias',
        promedio: 5,
        curso: 'full stack',
    },
]

let newAlumnos = alumneEs.push( {
    nombre: 'juan',
    promedio: 5,
    curso: 'iOS',
},
{
    nombre: 'eduardo',
    promedio: 2,
    curso: 'android',
},
)

console.log(alumneEs);
console.log(newAlumnos);



//    .shift   array  eliminar el primer cursante

let cursantes = [
    {
        nombre: 'mariel',
        promedio: 4,
        curso: 'java',
    },
    {
        nombre: 'eleonora',
        promedio: 2,
        curso: 'pyton',
    },
    {
        nombre: 'ernesto',
        promedio: 8,
        curso: 'sql',
    },
]

let cursantesDeBaja = cursantes.shift(0);
console.log(cursantes);
console.log(cursantesDeBaja);



//     .unshift  reintegrar alumnos

let alumnetes = [
    {
        nombre: 'pablo',
        promedio: 5,
        curso: 'iOS',
    },
    {
        nombre: 'samuel',
        promedio: 2,
        curso: 'base de datos',
    },
    {
        nombre: 'elias',
        promedio: 5,
        curso: 'full stack',
    }, 
]

alumnetes.unshift(
    {
        nombre: 'mariana',
        promedio: 5,
        curso: 'full stack',
    }
)

alumnetes.unshift(
    {
        nombre: 'armando',
        promedio: 8,
        curso: 'android',
    }
)

console.log(alumnetes);

