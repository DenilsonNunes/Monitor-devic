// theme.js
import { extendTheme } from '@chakra-ui/react';

import  { tableTheme } from './theme/tableTheme'


const theme = extendTheme({

  styles: {

    global: {
      body: {
        bg: '#EFF0F3'
      },
    }
  },

  components: {
    Table: tableTheme
  },

  fonts: {
    heading: `'Roboto', sans-serif`,  // Usar Roboto para títulos
    body: `'Roboto', sans-serif`,     // Usar Roboto para o corpo do texto
    Text: `'Roboto', sans-serif`, //
  },

  colors: {
    primary: '#1e40af',
  },



});

export default theme;
