const data = [
    {
        "codcliente": 40855,
        "nome": "                   GOMIDE & CIA LTDA                                                                                                                                     ",
        "cidade": "ARCOS                                   ",
        "estado": "MG"
    },
    {
        "codcliente": 41037,
        "nome": "TRANSPORTADORA DELAZZERI LTDA                                                                                                                         ",
        "cidade": "CAMPOS DE JULIO                         ",
        "estado": "MT"
    }
]




const removeEspaco = (arrayObj) => {
      // Retorna um novo array onde os espaços finais das strings são removidos
  return arrayObj.map(obj => {
    // Cria um novo objeto para evitar modificar o objeto original
    const newObj = {};
    // Percorre as chaves do objeto
    Object.keys(obj).forEach(key => {
      // Verifica se o valor da chave é uma string
      if (typeof obj[key] === 'string') {
        // Remove os espaços finais da string e atribui ao novo objeto
        newObj[key] = obj[key].trim();
      } else {
        // Se não for uma string, atribui ao novo objeto sem modificação
        newObj[key] = obj[key];
      }
    });
    return newObj;
  });
}


console.log(removeEspaco(data))

