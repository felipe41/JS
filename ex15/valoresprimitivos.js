/*let a = 'A';
let b = a; //cópia
console.log(a, b);

a = 'Outra coisa';
console.log(a, b);*/

/* let a = [1, 2, 3];
let b = a;
console.log(a, b);
a.push(4); // adicionar um elemento 
console.log(a, b);

b.pop(); // remover um elemento
console.log(a, b); */

const a = {
    nome: 'Felipe',
    sobrenome: 'Almeida',
};
const b = a;

a.nome = 'Felipe';
console.log(a);
console.log(b);


b.nome = 'João';
console.log(a);
console.log(b);



