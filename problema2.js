/*
    Simulando el llamado a un API, mediante las sgte. funciones asíncronas (rertornan una promesa).
    Escribir un programa que consulte una placa a getPlaca(nroPlaca), y que con el response obtenido ({pais,dniConductor}), haga una consulta a
    Imprimir en consola el response del conductor ({name, dni, sexo}).
    En los mensajes de error promesas o sentencias, imprimir la hora mas el msg del error.
*/

function getPlaca(nroPlaca) {
    // response: {pais, dniConductor}
    return fetch(`some-api/ ${nroPlaca}`)
            .then((resp) => resp.json())
            .then(function(data){
                let placa = data.results;
                getConductor(placa.dniConductor);
            })
            .catch(function (error){
                logError(error);
            }); 

}

function getConductor(dniConductor) {
    // response: {name, dni, sexo}
    return fetch(`some-api/ ${dniConductor}`)
            .then((resp) => resp.json())
            .then(function(data){
                let conductor = data.results
                console.log(conductor);
            })
            .catch(function (error){
                logError(error);
            }); 
}

function logError(error) {
    console.log(`${new Date().toLocaleTimeString()} ${error}`);
}