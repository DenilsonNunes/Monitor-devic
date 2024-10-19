import React from 'react'
import ReactDOM from 'react-dom/client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { ChakraProvider } from '@chakra-ui/react'  // Biblioteca Chakra UI
import './index.css'

import theme from './theme.js'
import { AuthProvider }  from './hooks/auth'

import AppRoutes from './routes/index.jsx'




const queryClient = new QueryClient();


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <ChakraProvider theme={theme}>

      <QueryClientProvider client={queryClient}>
        
        <AuthProvider>
          <AppRoutes/>  
        </AuthProvider>

      </QueryClientProvider>
      
    </ChakraProvider>
  </React.StrictMode>
)
