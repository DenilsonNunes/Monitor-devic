const dataAtualMaisAcrescimo = (acrescimo) =>{

    const dataAtual = new Date()
    const novaData = new Date(dataAtual)

    novaData.setDate(dataAtual.getDate() + acrescimo)

    const dia = String(novaData.getDate()).padStart(2, '0');
    const mes = String(novaData.getMonth() + 1).padStart(2, '0');
    const ano = novaData.getFullYear();


    const dataDesejada = `${mes}-${dia}-${ano}`;


    return dataDesejada;
}



module.exports = dataAtualMaisAcrescimo;