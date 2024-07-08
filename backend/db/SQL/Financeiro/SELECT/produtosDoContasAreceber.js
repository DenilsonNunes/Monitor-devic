
class SelectProdutosDocumentoVnd {


    static RequisicaoVnd (codEmpr, DtLctoCtRec, NrLctoCtRec) {

        const select = `      

            Select 'NSU'=NSURqVnd From TbCtRecRqVnd
            Where
            CodEmpr ='${codEmpr}' and
            DtLctoCtRec ='${DtLctoCtRec}' and -- Formato data MM/DD/AAAA
            NrLctoCtRec = '${NrLctoCtRec}'
        
        `;

        return select;
    }


    static CupomFiscalVnd (codEmpr, DtLctoCtRec, NrLctoCtRec) {

        const select = `
        
            Select 'NSU'=NSUCFVnd From TbCtRecCFVnd
            Where
            CodEmpr = '${codEmpr}' and
            DtLctoCtRec = ${DtLctoCtRec}' and
            NrLctoCtRec = '${NrLctoCtRec}'
        
        `;

        return select;
    }

    static NotaFiscalVnd (codEmpr, DtLctoCtRec, NrLctoCtRec) {

        const select = `
        
  
        
        `;
        
        return select;
    }



}





module.exports =  { SelectProdutosDocumentoVnd };