const fs = require('fs');
require('colors');
/* const crearArchivo = (number = 5) => new Promise ( (resolve, reject) => {

        let salida = '';

        for (let i = 0; i <= 10; i++) {
            salida += `\n ${number} x ${i} = ${number * i} `;
        }
        
        const nombreArchivo = `tabla-${number}.txt`;

        if(salida){
            fs.writeFileSync(`tabla-${number}.txt`, salida);
            resolve( nombreArchivo );
        } else {
            reject(`No se pudo crear el archivo ${nombreArchivo}`);
        }

    }) */


const crearArchivo = async (number = 5, listar = false, rango = 12) => {
    try {

        

        let salida = '';
        let consola = '';

        for (let i = 0; i <= rango; i++) {
            salida += `${number} x ${i} = ${number * i}\n`;
            consola += `${number} ${ 'x'.green } ${i} = ${number * i}\n`;
        }
        fs.writeFileSync(`./salida/tabla-${number}.txt`, salida);
        if (listar) {
            console.log('Ohla');
            console.log(consola);

        }
        return `tabla-${number}.txt`;
        
    } catch (error) {
        throw error;
    }
}

module.exports = {
    crearArchivo
}
