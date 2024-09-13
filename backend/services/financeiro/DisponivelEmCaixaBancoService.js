const DisponivelEmCaixaBancoRepository = require('../../repositories/financeiro/DisponivelEmCaixaBancoRepository');


class DisponivelEmCaixaBancoService {


    static consultarSaldoCaixaEbanco = async () => {


        const {totalPorEmpresa, totalTodasEmpresas} = await DisponivelEmCaixaBancoRepository.disponivelEmCaixaEbancoTodasEmpresas();


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

        return combinarDados(totalPorEmpresa,totalTodasEmpresas);

        
    }

    static consultarSaldoCaixas = async () => {


  
        return;

        
    }

    static consultarSaldoContasBancarias = async () => {


  
        return;

        
    }


    static consultarSaldoAplicacoesFinanceira = async () => {


  
        return;

        
    }



}




module.exports = DisponivelEmCaixaBancoService;