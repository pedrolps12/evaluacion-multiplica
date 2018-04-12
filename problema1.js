// Crear una función que tenga definidos parámetros requeridos (no deben ser undefined). Si falta alguno de los parámetros, se debe lanzar un mensaje de error.

var problem = function(value1, value2, callback) {
    for (let i = 0; i < 2; i++){
        //Evaluates if any of the parameters is undefined or of function type and throws an exception
        if(typeof(arguments[i]) === 'undefined') throw new Error("The parameter "+ (i+1) + " is undefined");
        if(typeof(arguments[i]) === 'function') throw new Error("The parameter "+ (i+1) + " is undefined");
    }
    if('function' === typeof callback) return callback(value1, value2);
}


