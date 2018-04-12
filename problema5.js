/*
    Escribir un programa que permita encontrar la suma acumulada de los cubos impares de los números enteros 
    entre 1 y 1000. Empleando una combinación de las funciones map, reduce, filter. Deberas implementar tus
    propias funciones map, reduce, filter recibiendo funciones anónimas como parametros.
    No podrás utilizar mutación de variables, por lo cual deberás utilizar técnicas recursivas para realizar dicha implementación
*/

// 1   1    1
// 2   8    1
// 3   27   28
// 4   64   28
// 5   125  153

function sumCubes(n) {
    return new Array(n).fill(undefined).map((val,index) => Math.pow((index+1),3)).filter((number) => number%2 === 1).reduce((previous,current) => previous +current)
}
