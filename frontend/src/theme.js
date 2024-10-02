// theme.js
import { extendTheme } from '@chakra-ui/react';


const theme = extendTheme({

  styles: {
    global: {
      body: {
        bg: '#EFF0F3'
      }
    }
  },



  fonts: {
    heading: `'Roboto', sans-serif`,  // Usar Roboto para títulos
    body: `'Roboto', sans-serif`,     // Usar Roboto para o corpo do texto
    Text: `'Roboto', sans-serif`, //
  },

  colors: {
    primary: '#0284c7',
  },



});

export default theme;
