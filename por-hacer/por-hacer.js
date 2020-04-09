const fs = require('fs');


let listadoPorHacer = [];

const crear = (descripcion) => {

    let porHacer = {
        descripcion,
        completado: false
    };
    cargarDB();
    listadoPorHacer.push(porHacer);
    guardarBD()
        .then(console.log('Información almacenada correctamente'))
        .catch(err => { console.log(err); })

    return porHacer;
}

const cargarDB = () => {
    try {
        listadoPorHacer = require('../db/data.json');
    } catch {
        listadoPorHacer = [];
    }

};

const guardarBD = async() => {
    let data = JSON.stringify(listadoPorHacer);
    fs.writeFile(`db/data.json`, data, (err) => {
        if (err)
            throw new Error(err);
    });
};

const getListado = () => {
    cargarDB()
    return listadoPorHacer;
}

const actualizar = (descripcion, completado = true) => {
    cargarDB();
    /*si index devuelve un -1 significa que no lo encontro*/
    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);
    if (index >= 0) {
        listadoPorHacer[index].completado = completado;
        guardarBD();
        return true;
    } else {
        return false;
    }

}

const borrarTarea = (descripcion) => {
    cargarDB();
    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);
    if (index >= 0) {
        listadoPorHacer.splice(index, 1);
        guardarBD();
        return true;
    } else {
        return false;
    }
    /*anteriormente se elimino un registro encontrado, existe otra opcion para retornar
      el arreglo ya son el registro encontrado mediante la funcion filter de la siguiente forma*/
    let nuevoListado = listadoPorHacer.filter(tarea => {
        return tarea.descripcion !== descripcion;
    })
    if (listadoPorHacer.length === nuevoListado.length) return false;
    else {
        listadoPorHacer = nuevoListado;
        guardarBD();
        return true;
    }

};
module.exports = {
    crear,
    getListado,
    actualizar,
    borrarTarea
}