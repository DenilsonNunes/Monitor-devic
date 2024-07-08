


const filtraChaveObj = (arrayObj, chaves) => {


    const novoArrayObj = arrayObj.map(objeto => {

        let chavesDesejadas = chaves;

        const novoObjeto = {};

        for (const chave of chavesDesejadas) {
          if (objeto[chave] !== undefined) {
            novoObjeto[chave] = objeto[chave];
          }
        }

        return novoObjeto;
    });

    return novoArrayObj;
      
}

module.exports = filtraChaveObj;




