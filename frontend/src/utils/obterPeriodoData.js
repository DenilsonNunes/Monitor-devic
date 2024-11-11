
const obterPeriodo = (tipo) => {

    const hoje = new Date();
    let dataInicio, dataFim, descrPeriodo, tipoPeriodo;
    

    switch (tipo) {
      
      case 'hoje':
          dataInicio = hoje;
          dataFim = hoje;
      break;

      case 'ontem':
        dataInicio = new Date(hoje.getFullYear(), hoje.getMonth(), hoje.getDate() - 1); 
        dataFim = dataInicio; // dataFim também é ontem
        descrPeriodo = 'Ontem';
        tipoPeriodo = 'ontem';
      break;

      case 'ultimos7dias':
        dataInicio = new Date(hoje.getFullYear(), hoje.getMonth(), hoje.getDate() - 7); 
        dataFim = new Date(hoje.getFullYear(), hoje.getMonth(), hoje.getDate() - 1); 
        descrPeriodo = 'Últimos 7 dias';
        tipoPeriodo = 'ultimos7dias';
      break;
    
      case 'esteMesAteHoje':
          dataInicio = new Date(hoje.getFullYear(), hoje.getMonth(), 1);
          dataFim = new Date(hoje.getFullYear(), hoje.getMonth(), hoje.getDate()); 
          descrPeriodo = 'Este mês até hoje'
          tipoPeriodo = 'esteMesAteHoje';

      break;

      case 'ultimoMes':
          dataInicio = new Date(hoje.getFullYear(), hoje.getMonth() - 1, 1);
          dataFim = new Date(hoje.getFullYear(), hoje.getMonth(), 0); // Último dia do mês anterior
          descrPeriodo = 'Último mês'
          tipoPeriodo = 'ultimoMes';
      break;

      case 'anoPassado':
        dataInicio = new Date(hoje.getFullYear() - 1, 0, 1); // 1 de janeiro do ano passado
        dataFim = new Date(hoje.getFullYear() - 1, 11, 31);   // 31 de dezembro do ano passado
        break;

          
      default:
        throw new Error("Tipo de período não reconhecido");
    }


    return {
      descrPeriodo: descrPeriodo,
      tipoPeriodo: tipoPeriodo,
      dataInicio: dataInicio.toISOString().split('T')[0], // Formata como YYYY-MM-DD
      dataFim: dataFim.toISOString().split('T')[0], // Formata como YYYY-MM-DD
    };

  };
  
export default obterPeriodo;