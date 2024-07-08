
const formataDataDDMMAAAA = require('../utils/Formats/formataDataDDMMAAAA');


const mensagem = (titulo) => {

    const msg = `
        
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
                Olá, ${titulo.NomeFantCli}
                <br>
                Você tem um titulo em aberto no valor de R$${titulo.ValCtRec}
            </td>
            </tr>
            <tr>
            <td style="height: 35px"></td>
            </tr>
            <tr>
            <td colspan="2" style="border: solid 1px #ddd; padding: 10px 20px">
                <p style="font-size: 14px; margin: 0 0 6px 0">
                <span style="font-weight: bold; display: inline-block; min-width: 146px">Documento</span>
                ${titulo.CodEspDocCtRec} : ${titulo.NrDocCtRec}
                </p>

                <p style="font-size: 14px; margin: 0 0 6px 0">
                <span style="font-weight: bold; display: inline-block; min-width: 146px">Parcela</span>
                ${titulo.NrParcDocCtRec} / ${titulo.TotParcDocCtRec}
                </p>

                <p style="font-size: 14px; margin: 0 0 6px 0">
                <span style="font-weight: bold; display: inline-block; min-width: 146px">Data Lançamento</span>
                ${formataDataDDMMAAAA(titulo.DtLctoCtRec)}
                </p>

                <p style="font-size: 14px; margin: 0 0 6px 0">
                <span style="font-weight: bold; display: inline-block; min-width: 146px">Data Vencimento</span>
                ${formataDataDDMMAAAA(titulo.DtVctoCtRec)}
                </p>
                <p style="font-size: 14px; margin: 0 0 6px 0">
                <span style="font-weight: bold; display: inline-block; min-width: 146px">Link Boleto</span>
                ${titulo.linkBoleto}
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
        `

    return msg;

    }


module.exports = mensagem;