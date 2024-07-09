


class SelectConfigEnvEmail {


    static configTitulosAvencer(){

        const configEmail = `
            select
                idConfigEmail, 
                SMTPServerTitAVenc, 
                SMTPUsuarioTitAVenc, 
                SMTPSenhaTitAVenc, 
                PortaTitAVenc, 
                TpConexaoTitAVenc, 
                MailAssuntoTitAVenc, 
                MailMsgTitAVenc, 
                EnvEmailAutAVenc,           --(Enviar email automatico ? "N" = não, "D" = diario, "H" = horas);
                HsIntEmailAutAVenc,         --(Horas intervalo envio email)
                HsIniEmailAutAVenc,         --(Horas inicia o envio de email)
                DiasAVencEmailAutAVenc      --(Dias antes do vencimento para enviar o email)
            from tmConfigEmail
        `;

        return configEmail;
    }

    static configCobranca(){

        const configEmail = `
            select
                idConfigEmail, 
                SMTPServerTitAVenc, 
                SMTPUsuarioTitAVenc, 
                SMTPSenhaTitAVenc, 
                PortaTitAVenc, 
                TpConexaoTitAVenc, 
                MailAssuntoTitAVenc, 
                MailMsgTitAVenc, 
                EnvEmailAutAVenc,           --(Enviar email automatico ? "N" = não, "D" = diario, "H" = horas);
                HsIntEmailAutAVenc,         --(Horas intervalo envio email)
                HsIniEmailAutAVenc,         --(Horas inicia o envio de email)
                DiasAVencEmailAutAVenc      --(Dias antes do vencimento para enviar o email)
            from tmConfigEmail
        `;

        return configEmail;
    }



}



module.exports = { SelectConfigEnvEmail };


