
const heroes = ['Batman', 'Superman', 'Mujer Maravilla', 'Aquaman'];

// sintaxis basica de un for

console.warn('For tradicional');
for( let i = 0; i < heroes.length; i++ ) {
    console.log( heroes[i] );
};

//  sintaxis basica simplificada mas limpio

console.warn('For in');
for( let i in heroes ) {
    console.log( heroes[i] );
};

// se utiliza par areferencias y arreglos mas sencilla

console.warn('For of');
for( let heroe of heroes ){
    console.log( heroe );
};




