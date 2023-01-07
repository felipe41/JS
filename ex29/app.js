// Declaração de função.

function falaOi() {
    console.log('Oie');
}

// Objeto de primeira classe.
 const souUmDado = function() {
    console.log('Sou um dado.');

 };
souUmDado();

// Arrow function
const functionArrow = () => {
    console.log('Sou um arrow function.');

};

functionArrow();
// Dentro de um objeto
const obj {
    falar(){
        console.log('Estou falando..')
    }
};
obj.falar();

/* function funcao () {
    let total = 0;
    for (letargumento of arguments) {
        total += argumento;
    }
    
    console.log(total);

}
funcao(1,2,3,4,5,6,7);

*/



/* function criaMultiplicador(multiplicador) {
    return function (n) {
        return n * multiplicador;
    };
} 

const duplica = criaMultiplicador(2);
const triplica = criaMultiplicador(3);
const quadriplica = criaMutiplicador(4);

console.log(duplica(3));
console.log(triplica(2));
console.log(quadriplica(10));
*/


