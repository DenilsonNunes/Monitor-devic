const formataData = (date) => {
    // Criar um objeto Date a partir da string da data
    const dataObj = new Date(date);
  
    // Extrair as partes da data
    const dia = dataObj.getUTCDate().toString().padStart(2, '0');
    const mes = (dataObj.getUTCMonth() + 1).toString().padStart(2, '0');
    const ano = dataObj.getUTCFullYear();
  
    // Montar a data no formato desejado (dd/mm/aaaa)
    const dataFormatada = `${dia}/${mes}/${ano}`;
  
  
    return dataFormatada;
  
  }
  
export default formataData;