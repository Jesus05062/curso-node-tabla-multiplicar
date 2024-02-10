const { crearArchivo } = require('./helpers/multiplicar');
const colors = require('colors');

const argv = require('./config/yargs');


console.clear();

/* console.log( process.argv );
console.log( argv ); */

//console.log('base: yargs', argv.b);







/* console.log( process.argv);
const [ ,,arg3 = 'base =5'] = process.argv;
const [ , base] = arg3.split('='); */


//const number = 8;


crearArchivo(argv.b, argv.l , argv.r)
    .then( nombreArchivo => console.log( nombreArchivo.rainbow, 'creado'))
    .catch( err => console.log( 'ERROR!', err));



