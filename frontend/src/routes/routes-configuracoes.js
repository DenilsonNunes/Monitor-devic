
import HomeConfigEnvioEmail from '../pages/configuracoes/configuracao-envio-email/HomeConfigEnvioEmail';
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
      component: HomeConfigEnvioEmail,
      private: true,
      title: 'Home'
    },

]