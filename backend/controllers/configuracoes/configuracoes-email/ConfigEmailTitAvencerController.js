// Services
const ConfigEmailTitAvencerService = require('../../../services/configuracoes/configuracoes-email/configEmailTitAvencerService');




class ConfigEmailTitAvencerController {

    async getConfig(req, res) {

  

        try {

            const data = await ConfigEmailTitAvencerService.listarTodos(page, pageSize);

            res.status(200).json(data);


        } catch (err) {

            res.status(500).json({ message: err.message });

        }

    }

    async editar(req, res) {

        const userCodFunc = (req.userCodFunc)

        console.log('Qual o usuario', userCodFunc)

        const filtrosRel = req.query;


        try {

            const { data, dataFiltroRel } = await TopVendasProdutosService.consultaTopVendasProdutosGeral(userCodFunc, filtrosRel);

            res.status(200).json({ data, dataFiltroRel });

        } catch (err) {

            res.status(500).json({ message: err.message });

        }


    }

    async testConnection(req, res) {

        const { codFunc } = req.params


        try {

            const data = await UsuariosService.deletar(codFunc);

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



module.exports = new ConfigEmailTitAvencerController();



