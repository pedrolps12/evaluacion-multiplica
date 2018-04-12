/* 
    Aplicando programción funcional crear una función que reciba el obj PLACA y retorne el nombre del modelo si es que existe; caso contrario devolver 'no existe el modelo'.
    Aplicar validaciones para que el programa no lance errores.
    Puede darse el caso que el obj Placa retorne marca o modelo como obj vacio o undefined
*/

var placa1 = {
    marca : {
        name : 'Honda',
        modelo : {
            name : 'CR-V'
        }
    },
    pais: 'Perú'
}
var getNameModelo = placa => (placa && placa.marca && placa.marca.modelo) ? (placa.marca.modelo.name) ? placa.marca.modelo.name : 'No existe el modelo' : 'Datos faltantes en la placa';
