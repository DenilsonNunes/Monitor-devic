
const query = (dataInicio, dataFim) => {

    
    const select = `
      
        Select TbCtRec.*, TbFunc.idFunc, ValQuitado = Convert(numeric(13,2),0),ValAtualiz = Convert(numeric(13,2),0),
        TbEsp.ReqVndUsa, RzsCli = Ltrim(rtrim((IsNull(TbCli.RzsCli,''))) + Ltrim(rtrim(IsNull(TbFornec.RzsFornec,'')))),
        ValConvertido = Case when
                        ValIndexadorCtRec = 0 then 0
                        else Convert(Numeric(13,2), IsNUll(ValCtRec/ValIndexadorCtRec,0)) end
        ,TbCli.NomeFantCli, TbPlanoCt.NomeCtGer,DescrSubLocalCobr, TbCli.CGCCPFCli, TbCli.Fone1Cli, TbCli.Fone2Cli, TbCli.FaxCli Fone3
        ,Dias = CONVERT(Int,ISNULL(TbCtRec.DtQuitCtRec,GETDATE()-1))-CONVERT(int,ISNULL(TbCtRec.DtProrrogCtRec,TbCtRec.DtVctoCtRec))
        ,Unico = TbCtRec.CodEmpr + Convert(char(10),TbCtRec.DtLctoCtRec,103) + TbCtRec.NrLctoCtRec
        ,ValMulta = Convert(numeric(13,2),0)
        ,ValJuros = Convert(numeric(13,2),0)
        , Parcela = NrParcDocCtRec + '/' +
                TotParcDocCtRec,
        Documento = CodEspDocCtRec + '-' +
                    CodSerieDocCtRec + '-' + 
                    NrDocCtRec,
        Documento2 = CodEspDocCtRec + '-' +
                                CodSerieDocCtRec + '-' +
                                case when 
                                    (case when NrNFProd is not null then NrNFProd else NrNFServ end) is not null then   
                                    (case when NrNFProd is not null then NrNFProd else NrNFServ end )   
                                else  
                                    NrDocCtRec 
                                end+ ' '  +
                                NrParcDocCtRec + '/' +
                                TotParcDocCtRec + ' ' +
                                IsNull(RestDocCtRec,''),
        MoedaVcto = TbMoedaVcto.NomeMoeda,
        MoedaProrrog = TbMoedaProrrog.NomeMoeda,
        MoedaIndexador = TbMoedaIndexador.NomeMoeda,
        NomePlanoVnd = vwPlanoVndCtRec.NomePlanoVnd, vwPlanoVndCtRec.CodPlanoVnd, vwPlanoVndCtRec.DtInicValPlanoVnd, 
        IdFuncQuit = TbFuncQuit.IdFunc, TbFaturas.NumBoleto, NomeFuncImprimiu = vwPlanoVndCtRec.nomefunc, NomeIndice,DescrCentroCusto
        ,CtDevLctoQuitCtRec , EMailCli
        ,Banco.NomeCtGer as Banco
        ,vwPlanoVndCtRec.NmVendedor as NmVendedor
        ,vwPlanoVndCtRec.NomeTerrit as NomeTerrit
        ,vwPlanoVndCtRec.NomeRotaTerrit as NomeRotaTerrit
        ,case when NFE.situacao = 0 then 'Rejeitada'
            when NFE.situacao = 103 then 'Recebida'
            when NFE.situacao = 2 then 'Contingência'
            when NFE.situacao = 100 then 'Autorizada'
            when NFE.situacao = 110 then 'Denegada'
            when NFE.situacao = 301 then 'Denegada'
            when NFE.situacao = 302 then 'Denegada'
            when NFE.situacao = 303 then 'Denegada'
            when NFE.situacao = 205 then 'Denegada'
            when NFE.situacao = 105 then 'Processamento'
            when ((NFE.situacao = 101) or (NFE.situacao = 151)) then 'Cancelada'
            when NFE.situacao = 204 then 'Duplicada'
            when NFE.situacao = 206 then 'Inutilizada'
            when NFE.situacao = 1 then 'XML Manual'
            when NFE.situacao = 215 then 'Falha Schema'
            when NFE.situacao = 999 then 'Erro Não Catalogado'
            when (NFE.situacao = 611) or (NFE.situacao = 612) then 'Rejeitada: Código EAN Inválido'
            when NFE.situacao > 199 then 'Rejeitada'
            else 'Não Enviada' end as DescrSituNFe, Dinheiro, Cartao, Cheque, Vale, CobrancaBancaria, Duplicata
        From TbCtRec 
        Left Outer Join TbFunc As TbFuncQuit ON 
        (TbCtRec.FuncQuitCtRec = TbFuncQuit.CodFunc) 
        Left outer join TbCli on
        TbCtRec.CtDevCtRec = TbCli.CodRedCt
        Left outer join TbFornec on
        TbCtRec.CtDevCtRec = TbFornec.CodRedCt
        join TbPlanoCt on
        TbCtRec.CtCredCtRec = TbPlanoCt.CodRedCt
        join TbFunc on
        TbCtRec.FuncCadCtRec = TbFunc.CodFunc
        Left Outer Join TbSubLocalCobr On 
        (TbCtRec.TpCobrCtRec = TbSubLocalCobr.TpCobranca and 
        TbCtRec.CodSubLocalCobr = TbSubLocalCobr.CodSubLocalCobr)
        Left Outer Join TbMoeda as TbMoedaVcto On
        (TbCtRec.CorrecVctoCtRec = TbMoedaVcto.CodMoeda)
        Left Outer Join TbMoeda as TbMoedaProrrog On
        (TbCtRec.CorrecProrrogCtRec = TbMoedaProrrog.CodMoeda)
        Left Outer Join TbMoeda as TbMoedaIndexador On
        (TbCtRec.CodIndexadorCtRec = TbMoedaIndexador.CodMoeda)
        Left Outer Join vwPlanoVndCtRec on
        (TbCtRec.CodEmpr = vwPlanoVndCtRec.Codempr and
        TbCtRec.DtLctoCtRec = vwPlanoVndCtRec.DtLctoCtRec and
        TbCtRec.NrLctoCtRec = vwPlanoVndCtRec.NrLctoCtRec)
        left outer join TbIndices as i on 
        TbCtRec.CodIndice = i.CodIndice
        Left Outer Join TbCtRecRelacFatura ON 
            (TbCtRecRelacFatura.CodEmpr = TbCtRec.CodEmpr and 
            TbCtRecRelacFatura.DtLctoCtRec = TbCtRec.DtLctoCtRec and 
            TbCtRecRelacFatura.nrlctoCtRec = TbCtRec.NrLctoCtRec) 
        Left Outer Join TbFaturas ON 
            (TbFaturas.CodEmpr = TbCtRecRelacFatura.CodEmpr and 
            TbFaturas.NumFatura = TbCtRecRelacFatura.NumFatura) 
        Left Outer Join TbEsp on TbEsp.CodEsp = TbCtRec.CodEspDocCtRec
        LEFT OUTER JOIN TbLctoQuitCtRec ON(TbLctoQuitCtRec.CodEmpr = TbCtRec.CodEmpr
                                        AND TbLctoQuitCtRec.DtLctoCtRec = TbCtRec.DtLctoCtRec
                                        AND TbLctoQuitCtRec.NrLctoCtRec = TbCtRec.NrLctoCtRec
                                        AND TbLctoQuitCtRec.TpLctoQuitCtRec = '1')
        left outer join tbnfvnd on
                        (TbCtRec.CodEspDocCtRec = TbNfVnd.CodEsp and
                        TbCtRec.CodSerieDocCtRec = TbNFVnd.CodSerie and 
                        TbCtRec.NrDocCtRec = TbNFVnd.NrNFVnd and
                                        TbCtRec.CodEmpr = TbNFVnd.CodEmpr) 
        Left Outer Join TbNrNFServ On 
                        (TbNFVnd.CodEmpr = TbNrNFServ.CodEmpr and 
                        TbNFVnd.NSUNFVnd = TbNrNFServ.NSUNFVnd) 
        Left Outer Join  TbNrNFProd On 
                        (TbNFVnd.CodEmpr = TbNrNFProd.CodEmpr and  
                        TbNFVnd.NSUNFVnd = TbNrNFProd.NSUNFVnd) 
            left outer join TbNFE NFE on (NFE.CodEmpr = TbCtRec.CodEmpr and 
                NFE.NrNotaFiscal = isNull(TbNrNFProd.NrNFProd,TbCtRec.NrDocCtRec) and  NFE.CodEsp = TbCtRec.CodEspDocCtRec and NFE.CodSerie = TbCtRec.CodSerieDocCtRec ) 
        Left Outer Join tbCentroCusto ON 
            (TbCtRec.CodCentroCusto = tbCentroCusto.CodCentroCusto) 
            left Outer Join TbParamCobrBco on (TbFaturas.CodEmpr = TbParamCobrBco.CodEmpr and
                                                TbFaturas.IdCobrBco = TbParamCobrBco.IdCobrBco)
            Left outer Join TbPlanoCt Banco on (TbParamCobrBco.CodRedCt = Banco.CodRedCt)
        Where
        (TbCtRec.SitCtRec = 'R' or TbCtRec.SitCtRec = 'T') 
        and ( 
            TbCtRec.CodEmpr = '1' --or
            --TbCtRec.CodEmpr = '2' or
            --TbCtRec.CodEmpr = '3' or
            --TbCtRec.CodEmpr = '4' or
            --TbCtRec.CodEmpr = '5'
            )
        And TbCtRec.DtQuitCtRec is Null and
        TbCtRec.DtVctoCtRec >='${dataInicio}' and
        TbCtRec.DtVctoCtRec <='${dataFim}' and
        TbCtRec.CodEspDocCtRec <> 'PED'
    `;


    return select;
}



module.exports = query;
