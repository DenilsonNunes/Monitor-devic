
import ConfigEnvioEmail from '../pages/configuracoes/configuracao-envio-email/ConfigEnvioEmail';
import HomeConfigUsuario from '../pages/configuracoes/configuracao-usuario/HomeConfigUsuario';
import ConfigMonitor from '../pages/configuracoes/configuracoes-monitor/ConfigMonitor';




export const routesConfiguracoes = [

    {
      path: '/configuracoes/usuarios',
      component: HomeConfigUsuario,
      private: true,
      title: 'Home'
    },
    {
      path: '/configuracoes/monitor',
      component: ConfigMonitor,
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