// Services
const ConfigUsuariosService = require('../../services/configuracoes/ConfigUsuariosService');




class ConfigUsuariosController {

    async listarTodos(req, res) {

        const { page, pageSize } = req.query;


        try {

            const data = await ConfigUsuariosService.listarTodos(page, pageSize);


            if (data.users.length !== 0) {

                res.status(200).json(data);

            } else {

                res.status(400).json({ message: "Nenhum usuário encontrado" });
            }



        } catch (err) {

            res.status(500).json({ message: err.message });

        }

    }




    async cadastrar(req, res) {

        const { codFunc, telaInicial, custoRel, somenteVendaSuperVnd, empresas } = req.body


        try {

            const result = await ConfigUsuariosService.cadastrar(codFunc, telaInicial, custoRel, somenteVendaSuperVnd, empresas);

            // Verifica se houve erro no retorno
            if (!result.sucesso) {
                return res.status(400).json({ error: result.message });
            }

            res.status(201).json(result);

        } catch (err) {

            res.status(500).json({ message: err.message });

        }


    }

    async editar(req, res) {

        const codFunc = req.params.codFunc
        const { telaInicial, custoRel, somenteVendaSuperVnd, empresas } = req.body


            try {
    
                const result = await ConfigUsuariosService.editar(codFunc, telaInicial, custoRel, somenteVendaSuperVnd, empresas);
    
                // Verifica se houve erro no retorno
                if (!result.sucesso) {
                    return res.status(400).json({ error: result.message });
                }
    
                res.status(201).json(result);
    
            } catch (err) {
    
                res.status(500).json({ message: err.message });
    
            }
        
       




    }



    async deletar(req, res) {

        const { codFunc } = req.params


        try {

            const data = await ConfigUsuariosService.deletar(codFunc);

            if (data.sucesso) {

                res.status(200).json({ message: "Usuário deletado com sucesso" })

            } else {

                res.status(404).json({ message: data.message });

            }


        } catch (error) {

            return res.status(500).json({ error: "Erro ao tentar deletar o usuário" });

        }



    }



}



module.exports = new ConfigUsuariosController();



