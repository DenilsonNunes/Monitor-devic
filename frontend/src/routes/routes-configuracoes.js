
import ConfigEnvioEmail from '../pages/configuracoes/configuracao-envio-email/ConfigEnvioEmail';
import ConfigUsuario from '../pages/configuracoes/configuracao-usuario/ConfigUsuario';
import ConfigMonitor from '../pages/configuracoes/configuracoes-monitor/ConfigMonitor';




export const routesConfiguracoes = [

    {
      path: '/configuracoes/usuarios',
      component: ConfigUsuario,
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