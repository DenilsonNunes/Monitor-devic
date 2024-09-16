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

    static consultaSaldoGeralContas = async () => {

        const data = await DisponivelEmCaixaBancoRepository.consultaSaldoGeralContas();


        // Função para agrupar os dados por empresa e tipo de conta
        const agruparPorEmpresa = (dados) => {
          // Primeiro, agrupa por empresa
          const empresasAgrupadas = dados.reduce((acc, item) => {
            const { empresa, TipoCt, DescrCxBco, SaldoCxBco, CodCxBco, SaldoDinhChqDisp } = item;
        
            // Verifica se a empresa já existe no agrupamento
            const empresaExistente = acc.find(e => e.UndEmpresa === empresa);
        
            if (!empresaExistente) {
              // Se a empresa não existe, adiciona com o saldo total e suas contas
              acc.push({
                UndEmpresa: empresa,
                SaldoTotal: item.SaldoCxBco,
                Contas: [
                  {
                    TipoCt: TipoCt,
                    ContasDetalhadas: [
                        {
                            CodCxBco: CodCxBco,
                            Conta: DescrCxBco.trim(),
                            SaldoDisp: SaldoCxBco
                        }
                    ]
                  }
                ]
              });

            } else {
              // Se a empresa existe, verifica se o TipoCt já está nas contas
              const tipoExistente = empresaExistente.Contas.find(conta => conta.TipoCt === TipoCt);
        
              if (!tipoExistente) {
                // Se o TipoCt não existe, adiciona um novo tipo com a conta detalhada
                empresaExistente.Contas.push({
                  TipoCt: TipoCt,
                  ContasDetalhadas: [
                    {
                        CodCxBco: CodCxBco,
                        Conta:  DescrCxBco.trim(),
                        SaldoDisp: SaldoCxBco
                    }
                  ]
                });
              } else {
                // Se o TipoCt já existe, adiciona a conta detalhada ao tipo
                tipoExistente.ContasDetalhadas.push({
                    CodCxBco: CodCxBco,
                    Conta: DescrCxBco.trim(),
                    SaldoDisp: SaldoCxBco
                });
              }
        
              // Atualiza o saldo total da empresa
              empresaExistente.SaldoTotal += SaldoCxBco;

            }
        
            return acc;
          }, []);
        
          return empresasAgrupadas;
        };
        
       
        
  
        return agruparPorEmpresa(data);

        
    }

    static consultarSaldoContasBancarias = async () => {

        
  
        return;

        
    }


    static consultarSaldoAplicacoesFinanceira = async () => {


  
        return;

        
    }

    static consultaSaldoDetalhadoConta = async (CodCxBco) => {

        const data = await DisponivelEmCaixaBancoRepository.consultaSaldoDetalhadoConta(CodCxBco);

        return data;
    }
    
    static consultaSaldoGeralContasFiltro = async (empresa, tipoConta) => {

        if(empresa === undefined) {
          empresa = '1, 2, 3'
        }

        empresa = empresa[0]

        const data = await DisponivelEmCaixaBancoRepository.consultaSaldoGeralContasFiltro(empresa, tipoConta);

        return data;
    }



}




module.exports = DisponivelEmCaixaBancoService;