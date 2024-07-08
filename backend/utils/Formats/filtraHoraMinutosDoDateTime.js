
const filtraHoraMinutosDoDateTime = (dateTime) => {

    const date = new Date(dateTime);

    // Extrair horas e minutos
    const hours = date.getUTCHours().toString().padStart(2, '0');
    const minutes = date.getUTCMinutes().toString().padStart(2, '0');

    const horasFiltradas = `${hours}:${minutes}`;


    return horasFiltradas;

} 


module.exports = filtraHoraMinutosDoDateTime;
