
const formataDataDDMMAAAA = require('../utils/Formats/formataDataDDMMAAAA');


const mensagem = () => {

    const msg = `

        <p>Prezado(a) <strong>#NomeFantCli#</strong>,</p><p><br></p><p>Gostaríamos de lembrar que os seguintes títulos estão próximos de seu vencimento:</p><p><br></p><p>#Documentos#</p><p><br></p>
        
        <table style="max-width: 670px; margin: 50px auto 10px; background-color: #fff; padding: 50px; -webkit-border-radius: 3px; -moz-border-radius: 3px; border-radius: 3px; -webkit-box-shadow: 0 1px 3px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.24); -moz-box-shadow: 0 1px 3px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.24); box-shadow: 0 1px 3px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.24); border-top: solid 10px #2e3f87">
        <thead>
            <tr>
            <th style="text-align: left"><img style="max-width: 150px" ></th>
            <th style="text-align: right; font-weight: 400"></th>
            </tr>
        </thead>
        <tbody>
            <tr>
            <td style="height: 35px"></td>
            </tr>
            <tr>
            <td colspan="2">
                Olá, Cliente Teste
                <br>
                Você tem um titulo em aberto no valor de R$ 10,00
            </td>
            </tr>
            <tr>
            <td style="height: 35px"></td>
            </tr>
            <tr>
            <td colspan="2" style="border: solid 1px #ddd; padding: 10px 20px">
                <p style="font-size: 14px; margin: 0 0 6px 0">
                <span style="font-weight: bold; display: inline-block; min-width: 146px">Documento</span>
                NFE : 12345
                </p>

                <p style="font-size: 14px; margin: 0 0 6px 0">
                <span style="font-weight: bold; display: inline-block; min-width: 146px">Parcela</span>
                1 / 10
                </p>

                <p style="font-size: 14px; margin: 0 0 6px 0">
                <span style="font-weight: bold; display: inline-block; min-width: 146px">Data Lançamento</span>
                01/01/2010
                </p>

                <p style="font-size: 14px; margin: 0 0 6px 0">
                <span style="font-weight: bold; display: inline-block; min-width: 146px">Data Vencimento</span>
                01/01/2010
                </p>
                <p style="font-size: 14px; margin: 0 0 6px 0">
                <span style="font-weight: bold; display: inline-block; min-width: 146px">Link Boleto</span>
                <a href="https://homologacao.plugboleto.com.br/api/v1/boletos/impressao/ZSEEYP490">Visualizar Boleto</a>
                </p>
            </td>
            </tr>
            <tr>
            <td style="height: 35px"></td>
            </tr>
        </tbody>
        <!-- tfooter ignored -->
            <tbody><tr>
            <td colspan="2" style="text-align: center; font-size: 14px; padding: 50px 15px 0 15px">
            </td>
            </tr>
        </tbody>
        </table>



        <p>Para evitar quaisquer encargos adicionais ou complicações, solicitamos que efetue o pagamento até a data mencionada. Caso já tenha realizado o pagamento, por favor, desconsidere esta mensagem.</p><p>Em caso de dúvidas ou necessidade de mais informações, nossa equipe está à disposição para ajudar.</p><p><br></p><p>Agradecemos a sua atenção e colaboração.</p><p><br></p><p>Atenciosamente,</p><p><strong>Depto. Financeiro</strong></p><p><strong>EMPRESA TESTE LTDA.</strong></p>
        `

    return msg;

    }


module.exports = mensagem;