let archivoTareas = require('./funcionesDeTareas');

let accion = process.argv(2);

switch (accion){
    case 'listar':
        console.log('Listado de tareas');
        console.log('_________________');
        let tareas = archivoTareas.leerArchivo();
        for (let i = 0; i < tareas.length; i++){
            console.log((i + 1) + '. ' + tareas[i].titulo + ' - ' + tareas[i].estado);
        }
        console.log()
        break;

    case undefined:
        console.log();
        console.log('Atencion - Tienes que pasarme una acción');
        console.log('Las acciones disponibles son: listar');
        console.log('________________________________________');
        break;

    default:
        console.log('____________________________________')
        console.log('No entiendo que quieres Hacer');
        console.log('Las acciones disponibles son: listar ');
        console.log('_______________________________________');
};




