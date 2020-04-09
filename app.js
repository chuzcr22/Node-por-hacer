const argv = require('./config/yargs').argv;
const porHacer = require('./por-hacer/por-hacer');
const colors = require('colors');

/*con esto leo los comandos que se ingresan en la consola
  utilizando argv(yargs)*/
let comando = argv._[0];

switch (comando) {

    case 'crear':
        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);
        break;
    case 'listar':
        let datos = porHacer.getListado();
        for (let tarea of datos) {
            console.log('======POR HACER======'.green);
            console.log(tarea.descripcion);
            console.log(`Estado: ${tarea.completado}`);
            console.log('=====================\n'.green);
        }
        break;
    case 'actualizar':
        let actualizar = porHacer.actualizar(argv.descripcion, argv.completado);
        console.log(actualizar);
        break;
    case 'borrar':
        let borrar = porHacer.borrarTarea(argv.descripcion);
        console.log(borrar);
        break;
    default:
        console.log('Comando no es reconocido');

}