console.log(process.argv);

function checkParam(param) {
    return process.argv.indexOf(param) !== -1;
    // process.argv.indexOf()
    // retorna o index do elemento caso exista no array,
    // se não existe retorna -1 
}

if (checkParam('--teste')) {
    console.log('passado por param');
} else {
    console.log('não foi passado por param');
}