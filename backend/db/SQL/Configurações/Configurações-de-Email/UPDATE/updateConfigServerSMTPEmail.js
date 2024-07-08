
class UpdateConfigServerSMTPEmail {

    //Static  server para nao precisar instaciar a classe
    static titulosAvencer(data){

        const update = `

        update tmConfigEmail
        set
            SMTPServerTitAVenc = '${data.server}', 
            SMTPUsuarioTitAVenc = '${data.email}', 
            SMTPSenhaTitAVenc = '${data.password}', 
            PortaTitAVenc = '${data.port}'

        where idConfigEmail = 1

        `;

        return update;
    }

    static cobranca(){

  
    }



}

module.exports = { UpdateConfigServerSMTPEmail };




