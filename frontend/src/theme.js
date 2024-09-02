// theme.js
import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  fonts: {
    heading: `'Roboto', sans-serif`,  // Usar Roboto para títulos
    body: `'Roboto', sans-serif`,     // Usar Roboto para o corpo do texto
    Text: `'Roboto', sans-serif`, //
  },
});

export default theme;
