
const fher = {
    nombre: 'Fernando',
    edad: 30,
    imprimir() {
        console.log(`Nombre: ${this.nombre} - Edad: ${this.edad}`);
    }
};

const pedro = {
    nombre: 'Pedro',
    edad: 20,
    imprimir() {
        console.log(`Nombre: ${this.nombre} - Edad: ${this.edad}`);
    }
};

// fher.imprimir();

//  ok esto se debe de crear con la palabra new
function Persona(nombre, edad) {
    console.log('Sejecuto esta linea');
    this.nombre = nombre;
    this.edad = edad;

    this.imprimir = function() {
        console.log(`Nombre: ${this.nombre} - Edad: ${this.edad}`);
    };
};

const maria = new Persona('Maria', 18);
const melisa = new Persona('Melissa', 20);
// console.log(maria);
maria.imprimir();
melisa.imprimir();