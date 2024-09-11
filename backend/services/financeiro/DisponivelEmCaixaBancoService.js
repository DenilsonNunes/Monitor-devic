const FinanceiroRepository = require('../../repositories/financeiro/DisponivelEmCaixaBancoRepository');


class DisponivelEmCaixaBancoService {


    static disponivelEmCaixaEbanco = async () => {



        const {totalPorEmpresa, totalTodasEmpresas, teste} = await FinanceiroRepository.disponivelEmCaixaEbanco();

       

        console.log('teste', teste);



        // Função para combinar os dados
        const combinarDados = (totalTodasEmpresas, totalPorEmpresa) => {
            
            return totalTodasEmpresas.map(empresa => {

            // Filtra os tipos de conta para cada empresa
            const contas = totalPorEmpresa.filter(item => item.UndEmpresa === empresa.UndEmpresa);
            
                // Retorna um novo objeto combinando as informações
                return {
                    UndEmpresa: empresa.UndEmpresa,
                    SaldoTotal: empresa.SaldoDisp,
                    Contas: 
                        contas.map(conta => ({
                            TipoCt: conta.TipoCt,
                            SaldoDisp: conta.SaldoDisp
                        }))
                };
            });
        };

        console.log('aqui', combinarDados(totalTodasEmpresas, totalPorEmpresa));


        return combinarDados(totalTodasEmpresas, totalPorEmpresa);

        
    }



}




module.exports = DisponivelEmCaixaBancoService;