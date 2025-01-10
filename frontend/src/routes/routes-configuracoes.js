
import ConfigEnvioEmail from '../pages/configuracoes/configuracao-envio-email/ConfigEnvioEmail';
import HomeParametros from '../pages/configuracoes/configuracao-parametros/HomeParametros';
import HomeConfigUsuario from '../pages/configuracoes/configuracao-usuario/HomeConfigUsuario';



export const routesConfiguracoes = [

    {
      path: '/configuracoes/usuarios',
      component: HomeConfigUsuario,
      private: true,
      title: 'Home'
    },
    {
      path: '/configuracoes/parametros',
      component: HomeParametros,
      private: true,
      title: 'Home'
    },
    {
      path: '/configuracoes/envio-de-emails',
      component: ConfigEnvioEmail,
      private: true,
      title: 'Home'
    },

]