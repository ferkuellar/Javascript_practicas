

const dia = '2'; // 0: Domingo.... 1: Lunes....

switch( dia ) {
    case 0:
        console.log('Domingo');
        break; // salir del procedimento se rompe el ciclo
    case 1: 
        console.log('Lunes');
        break;
    case '2':
        console.log('Martes');
        break;
    default:
        console.log('No es lunes, martes o domingo');
}



