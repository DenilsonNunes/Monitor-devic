import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'  // Biblioteca Chakra UI
import theme from './theme.js'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import  AppRoutes  from './routes/index.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>

      <AppRoutes/>
      
    </ChakraProvider>
  </React.StrictMode>,
)
