const getDataAtualDDMMAAAA = () => {
    const data = new Date()

    const dia = String(data.getDate()).padStart(2, '0');
    const mes = String(data.getMonth() + 1).padStart(2, '0');
    const ano = data.getFullYear();
    const dataAtual = `${dia}-${mes}-${ano}`;
    return dataAtual;
}


module.exports = getDataAtualDDMMAAAA;