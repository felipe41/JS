/*const array = [1,2,3];
array.push(4);
array[0] = 'Luiz';
console.log(array);*/

// OBS: conchetes "ARRAY", chaves {} "OBJETOS".

/*const pessoal = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 25
};
console.log(pessoal.nome);
console.log(pessoal.sobrenome);
console.log(pessoal.idade); */

/*function criaPessoa (nome, sobrenome,idade){
    return {
        nome: nome,
        sobrenome: sobrenome,
        idade: idade
    };
}

const pessoal = criaPessoa('Felipe', 'Almeida', 28);
const pessoa2 = criaPessoa('Laís', 'Detoni de Almeida', 32);
const pessoa3 = criaPessoa('Maria', 'jabara', 26);

console.log(pessoal.nome, pessoa2.nome, pessoa3.nome);*/

//             OU

/*function criaPessoa (nome, sobrenome,idade){
    return { nome, sobrenome, idade};
}
const pessoal = criaPessoa('Felipe', 'Almeida', 25);
const pessoa2 = criaPessoa('Laís', 'Detoni de Almeida',26);
const pessoa3 = criaPessoa('Ana Beatriz', 'Nogueira',28);

console.log(pessoal.nome, pessoal.sobrenome, pessoal.idade);
console.log(pessoa2.nome, pessoa2.sobrenome, pessoa2.idade);
console.log(pessoa3.nome, pessoa3.sobrenome, pessoa3.idade); */

const pessoa1 = {
    nome:'Felipe',
    sobrenome: 'Almeida',
    idade: 28,
     
    fala() {
        console.log(`${this.nome} ${this.sobrenome} está falando oii ..`);
    },
};

pessoal.fala();

