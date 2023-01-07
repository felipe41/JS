/*const data = new Date('2023-01-01 01:19:00.100');
console.log('Dia', data.getDate());
console.log('Mês', data.getMonth() + 1);
console.log('Ano', data.getFullYear());
console.log('Hora', data.getHours());
console.log('Min', data.getMilliseconds());
console.log('Seg', data.getSeconds());
console.log('ms', data.getMilliseconds());
console.log('Dia semana', data.getDay());
console.log(data.toDateString()); */

const h1 = document.querySelector('.container h1');
const data = new Date();
h1.innerHTML = toStringData();