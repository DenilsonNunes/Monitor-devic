const formatDateTime = (dataTime) => {

    const dataObj = new Date(dataTime);
  
    const dia = String(dataObj.getDate()).padStart(2, '0');
    const mes = String(dataObj.getMonth() + 1).padStart(2, '0'); // Mês começa em 0, por isso o +1
    const ano = dataObj.getFullYear();
  
    const horas = String(dataObj.getHours()).padStart(2, '0');
    const minutos = String(dataObj.getMinutes()).padStart(2, '0');
  
    return `${dia}/${mes}/${ano} ás ${horas}:${minutos}`;
}
  
export default formatDateTime;