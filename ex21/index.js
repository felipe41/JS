/*const tresHoras = 60 * 60 * 3 * 1000;
const umDia = 60 * 60 * 24 * 1000;
const data = new Date(0 + tresHoras + umDia); ÉPOCA UNIX / TIMESTAMP UNIX
console.log(data.toDateString()); */
// const data = new Date(2019, 3); // a, m, d, h, M, s, ms

/* const data = new Date('2019-04-20 20:15:59.100');
console.log('Dia', data.getDate());
console.log('Mês', data.getMonth() + 1);
console.log('Ano', data.getFullYear());
console.log('Hora', data.getHours());
console.log('Min', data.getMilliseconds());
console.log('Seg', data.getSeconds());
console.log('ms', data.getMilliseconds());
console.log('Dia semana', data.getDay());
console.log(data.toDateString()); */

function getDiaSemanaTexto(diaSemana) {
    let getDiaSemanaTexto;
    
    switch(diaSemana){
        case 0:
        getDiaSemanaTexto = 'Domingo';
        return getDiaSemanaTexto;
    
        case 1:
            getDiaSemanaTexto = 'Segunda';
            return getDiaSemanaTexto;
            
            case 2:
            getDiaSemanaTexto = 'Terça';
            return getDiaSemanaTexto;
            
            case 3:
            getDiaSemanaTexto = 'Quarta';
            return getDiaSemanaTexto;
            
            case 4:
            getDiaSemanaTexto = 'Quinta';
            return getDiaSemanaTexto;
            
             case 5:
             getDiaSemanaTexto = 'Sexta';
            return getDiaSemanaTexto;

            case 6:
            getDiaSemanaTexto = 'Sabádo';
            return getDiaSemanaTexto;


    }

}

const data = new Date('2022-11-11 00:00:00');
const diaSemana = data.getDay();
const diaSemanaTexto = getDiaSemanaTexto(diaSemana);

console.log(diaSemana, diaSemanaTexto);