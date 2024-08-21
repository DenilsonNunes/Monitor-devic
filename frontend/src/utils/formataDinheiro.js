const formataDinheiro = (valor) => {

    const newValor = valor.toLocaleString('pt-br', 
        {minimumFractionDigits: 2},
        {maximumFractionDigits: 2}
    );

    return newValor;
}

export default formataDinheiro;