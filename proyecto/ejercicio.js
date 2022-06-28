const min = 1;
const max = 20;

const output = {};

for (let i = 0; i < 10000; i++) {
    let numero = Math.floor(Math.random() * (max - min) + min);
    
    if(output[numero]) {
        output[numero]++;
    } else {
        output[numero] = 1;
    }
}

console.log(output);

////////
///////Realizar un proyecto en node.js que permita calcular cuántos años y días totales transcurrieron desde la fecha de tu nacimiento. Para ello utilizar la dependencia moment instalándola en forma local desde npm. Imprimir los resultados por consola. Hacer las modificaciones necesarias para que sólo se actualicen los patches para la librería recién instalada.
///////Un ejemplo de salida:
///////Hoy es 11/01/2021
//////Nací el 29/11/1968
//////Desde mi nacimiento han pasado 52 años.
//////Desde mi nacimiento han pasado 19036 días.

//////Ayuda:
//////Utilizar los métodos diff y format de la librería moment.

var a = moment([2007, 0, 29]);
var b = moment([2007, 0, 28]);
a.diff(b, 'days') // 1
