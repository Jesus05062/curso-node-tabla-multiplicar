const argv = require('yargs')
                .option( 'b',{
                    alias: 'base',
                    type: 'number',
                    demandOption: true,
                    describe: 'es la base de la tabla de multiplicar'
                })
                .option('r', {
                    alias: 'rango',
                    type:'number',
                    describe: 'limte de multiplicaciones',
                    default: 12
                })
                .option( 'l', {
                    alias: 'listar',
                    type: 'boolean',
                    default: false,
                    describe: 'muestra la tabla en consola'
                })
                .check( (argv,options) => {
                    if ( isNaN(argv.b) ) {
                        throw 'La base tiene que ser un numero';
                    }
                    return true;
                })
                .argv;


module.exports = argv;