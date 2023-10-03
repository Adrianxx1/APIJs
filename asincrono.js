const teams = ["Liverpool", "Dortmund", "Chelsea"];

setTimeout(() => console.log('Tarea asincrona'), 2000);

console.log('Sigue ejecutando');
console.log(teams);

function getTeams(){
    return teams;
}

console.log(getTeams());
console.log('Final de codigo');

console.log(asincGeTeams());
console.log('Termina el llamado de función');
