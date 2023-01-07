const elemento = [
    {tag: 'p', texto: 'Qualquer texto que você quiser.'},
    {tag: 'div', texto: 'Frase 2'},
    {tag: 'footer', texto:'Frase 3'},
    {tag: 'section', texto:'Frase '},
];
 
const container = document.querySelector('.conteiner');
const div = document.createElement('div');

 for (let i = 0; i < elemento.length; i++) {
    let {tag, texto } = elemento[i];
    let tagCriada = document.createElement(tag);
    let textoCriado = document.createTextNode(texto);
    
    tagCriada.appendChild(textoCriado);
    div.appendChild(tagCriada);
}
container.appendChild(div);