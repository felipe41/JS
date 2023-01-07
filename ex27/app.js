/*function fizzBuzz(numero) {
    if (typeof numero !== 'number') return numero;
    if (numero % 3 === 0 && numero % 5 === 0) return 'FizzBuzz';
    if (numero % 3 === 0) return 'Fiz';
    if (numero % 5 === 0) return 'Buzz';
    return numero;

}
console.log('a', fizzBuzz('a'))
for (let i = 0; i <= 100; i++) {
    console.log(i, fizzBuzz(i))
} */


function soma(x, y) {
    if( 
        typeof x !== 'number' ||
        typeof y !== 'number'
)   {
    throw new console.error('x e y precisam ser numeros.');
}
return x + y;
}
try {
    console.log(soma(1, 2)); // Executa esse comando, caso seja iválido, executa a mensagem abaixo.
    console.log(soma('1', 2));
} catch (error) {
    console.log(error); // o error  aparece. Não é recomendável deixar o erro exposto, pois expões a segurança do sistema / código. O ideal é escrever uma mensagem dizendo que está com erro ou algo do tipo.
    console.log('Alguma coisa mais amigável para o usuário.');
}

try {
    // É executada quando não há erros
}catch (e) {
    // É executado quando há erros 
} finally {
    // É executado sempre
}

function mostrarHora() {
    let data = new Date();
    return data.toLocaleDateString('pt-br',{
        hour12: false

    });

}

const timer = setInterval (function() {
    console.log(mostrarHora());
}, 1000);

setTimeout(function() {
    clearInterval(timer);
}, 3000);

setTimeout(function(){
    console.log('Olá mundo!');

}, 5000);