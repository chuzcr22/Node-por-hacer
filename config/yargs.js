const optCrear = {
    descripcion: {
        demand: true,
        alias: 'd'
    }
};

const optActualzar = {
    descripcion: {
        demand: true,
        alias: 'd',
        desc: 'Descrición de la tarea por hacer'
    },
    completado: {
        alias: 'c',
        default: true
    }
}

const optListar = {
    descripcion: {
        alias: 'd',
        desc: 'Marca como completado o pendiente la tarea'
    },
}


const argv = require('yargs')
    .command('crear', 'Crea una tarea por hacer', optCrear)
    .command('actualizar', 'Actualiza el estado completado de una tarea', optActualzar)
    .command('listar', 'Muestra las tareas por hacer', optListar)
    .command('borrar', 'Borra una tarea por hacer', optCrear)
    .help()
    .argv;



module.exports = {
    argv
};