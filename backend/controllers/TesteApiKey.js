


class TesteApiKey  {

    async ApiKey(req, res) {

            const secretBlue = 'Rodrigo123'

            const secret = req.headers['x-api-key'];
            
            console.log('secret aqui', secret)

            if(secret === secretBlue) {
                return res.status(200).json({message: 'Autorizado'});
            } else {
                
                res.status(400).json({message: 'Você não esta autorizado'});

            }

    
    }
    
}


module.exports = new TesteApiKey();