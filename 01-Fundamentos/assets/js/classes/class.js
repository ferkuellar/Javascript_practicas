
class Persona {

    static _conteo = 0;
    static get conteo() {
        return Persona._conteo + ' instacias';
    };
    
    static mensaje() {
        console.log(this.nombre); //undefined
        console.log('Hola a todos, soy un metodo statico'); //undefined
    };

    nombre = '';
    codigo = '';
    frase = '';
    _comida = '';
    
    constructor(nombre = 'Sin nombre', codigo = 'Sin codigo', frase = 'Sin frase'){
        // console.log('Hola!');
        // return undefined;
        this.nombre = nombre;
        this.codigo = codigo;
        this.frase = frase;

        Persona._conteo++;
    };

    set setComidaFavorita(_comida){
        this._comida = _comida.toUpperCase();
    };

    get getComidaFavorita() {
        return `La comida favorita de ${this.nombre} es ${this._comida}`;
    };

    quienSoy() {
        console.log(`Soy ${this.nombre} y mi edientidad es ${this.codigo}`);
    };

    miFrase(){
        this.quienSoy();
        console.log(`${this.codigo} dice: ${this.frase}`);
    };
};

const spiderman = new Persona('Peter Parker', 'Spiderman', 'Soy tu amigable vecino Spiderman');
const ironman = new Persona('Tony Stark', 'Ironman', 'Yo soy Irnoman');


// console.log(spiderman);
// console.log(ironman);

spiderman.quienSoy();
// ironman.quienSoy();
// spiderman.miFrase();
// ironman.miFrase();

spiderman.setComidaFavorita = 'El pay de cereza de la tia May';
// spiderman.nemesis = 'Duende verde';

// console.log(spiderman.getComidaFavorita);
// console.log(spiderman);

// Persona._conteo = 2;
console.log('Conteo estatico', Persona._conteo );
console.log(Persona.conteo );
Persona.mensaje();

Persona.propiedadExterna = 'Hola Mundo';
console.log(Persona.propiedadExterna);
console.log(Persona);
