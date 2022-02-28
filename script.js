var humano = -1;

var pregunta = prompt("¿Cuantos juegos desea realizar?");
for (i = 1; i <= pregunta; i++) {
    const respuesta = prompt("Ingrese piedra (1), papel (2) o tijeras (3)");
    const cpu = Math.floor(Math.random() * 3);

    if (respuesta === "Piedra" || respuesta === "piedra" || respuesta === "1") {
        humano = 1;
        let resultado = partida(humano, cpu);
    }

    if (respuesta === "Papel" || respuesta === "papel" || respuesta === "2") {
        humano = 2;
        let resultado = partida(humano, cpu);
    }

    if (
        respuesta === "Tijeras" ||
        respuesta === "tijeras" ||
        respuesta === "tijera" ||
        respuesta === "3"
    ) {
        humano = 3;
        let resultado = partida(humano, cpu);
    }
}

function partida(humano, cpu) {
    if (humano === cpu) {
        // empate
        return alert(`¡Es un Empate!`);
    }
    // 3 mayor que 2
    if (humano === 3 && cpu === 2) {

        return alert("Ganaste !!!  tijeras gana a papel");
    }
    // 2 mayor que 1
    if (humano === 2 && cpu === 1) {

        return alert("Ganaste !!!  papel gana a piedra");
    }
    // 1 menor que 3
    if (humano === 1 && cpu === 3) {

        return alert("Ganaste !!!  piedra gana a tijeras");
    }
    // 2 menor que 3
    if (humano === 2 && cpu === 3) {

        return alert("Perdiste !!!  tijeras gana a papel");
    }
    // 1 menor que 2
    if (humano === 1 && cpu === 2) {

        return alert("Perdiste !!!  papel gana a piedra");
    }
    // 3 mayor que 1
    if (humano === 3 && cpu === 1) {

        return alert("Perdiste !!!  piedra gana tijeras");
    }
}