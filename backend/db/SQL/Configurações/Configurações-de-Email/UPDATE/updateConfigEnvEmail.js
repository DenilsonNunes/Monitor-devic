

class UpdateConfigEnvEmail {

    //Static server para nao precisar instaciar a classe
    static titulosAvencer(data){

        const update = `
        update tmConfigEmail
        set
            MailAssuntoTitAVenc = '${data.MailAssuntoTitAVenc}',
            MailMsgTitAVenc = '${data.MailMsgTitAVenc}',            
            EnvEmailAutAVenc ='${data.EnvEmailAutAVenc}',             --(Enviar email automatico ? "N" = não, "D" = diario, "H" = horas);
            HsIntEmailAutAVenc = '${data.HsIntEmailAutAVenc}',        --(Horas intervalo envio email)
            HsIniEmailAutAVenc = '${data.HsIniEmailAutAVenc}',        --(Horas inicia o envio de email)
            DiasAVencEmailAutAVenc = '${data.DiasAVencEmailAutAVenc}' --(Dias antes do vencimento para enviar o email)

        where idConfigEmail = 1
        `;

        return update;
    }

    static cobranca(){

  
    }



}

module.exports = { UpdateConfigEnvEmail }








