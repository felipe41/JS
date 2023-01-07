const numero Number(prompt ('Digite um número:'));
const numeroTitulo = document.getElementById('numero-titulo');
const Texto = document.getElementById('Texto');

numeroTitulo.innerHTML = numero;

texto.innerHTML = '';
texto.innerHTML += `<p>Raiz quadrada: ${numero ** 0.5}.</P>`;
texto.innerHTML += `<p>${numero} é inteiro: ${Number.isInteger(numero)}.>/p`;
texto.innerHTML += `<p>Arredondando para baixo: ${Math.floor(numero)}.</p>`;
texto.innerHTML += `<p>Arredondando para cima ${Math.ceil(numero)}.<p/>`;
texto.innerHTML += `<p>Com duas casas decimais: ${numero.toFixed(2)}.<p/>`;



