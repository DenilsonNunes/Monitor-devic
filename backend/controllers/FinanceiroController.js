const sqlQuery = require('../db/SQL/query/query');


// select
const selectContasAreceber = require('../db/SQL/Financeiro/SELECT/contasAreceber');



// Utils
const dataAtualMMDDAAAA = require('../utils/Formats/dataAtualMMDDAAAA');
const formataDataMMDDAAAA = require('../utils/Formats/formataDataMMDDAAAA');
const formataDataDDMMAAAA = require('../utils/Formats/formataDataDDMMAAAA')



class FinanceiroController {
    

    async contasAreceber(req, res) {

        let { dataInicio, dataFim } = req.query;

        // caso venha undefined, coloca dataInicio e dataFim como data de hoje
        if (dataFim === undefined && dataInicio === undefined) {
                
            dataInicio = dataAtualMMDDAAAA;
            dataFim = dataAtualMMDDAAAA;

        }

        // Filtrando quais chaves desejo
        let filtros = ['DtLctoCtRec','NrLctoCtRec','NrDocCtRec','NomeFantCli','ValCtRec','NrParcDocCtRec','DtVctoCtRec','TotParcDocCtRec','CodEspDocCtRec']

        try {
            
            const data = await sqlQuery(selectContasAreceber(dataInicio, dataFim), filtros);

            const newData = data.map((item)=>{
                return {
                    ...item,
                    DtLctoCtRec: formataDataDDMMAAAA(item.DtLctoCtRec),
                    DtVctoCtRec: formataDataDDMMAAAA(item.DtVctoCtRec),
                }
            })

         

            res.status(200).json(newData);

        } catch(err) {
            console.log('Erro interno: ', err);
            res.status(500).json({ message: err.message });
        }
    
    }


    async produtosDoContasAreceber(req, res) {

        try {

        } catch(err) {

        }

    }

    async contasApagar() {

    }

}




module.exports = new FinanceiroController();
