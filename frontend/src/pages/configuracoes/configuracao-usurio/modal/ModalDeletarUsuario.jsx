import { useState } from 'react'
import { useQuery } from '@tanstack/react-query';


import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  AlertDialogCloseButton,
  Button
} from '@chakra-ui/react'



// API INSTANCE
import api from '../../../../helpers/api-instance';




const ModalDeletarUsuario = ({ isOpen, onClose, usuario }) => {


  console.log('Deletar usuario', usuario)
    

  const handleDeletarUsuario = () => {


  }
  

  if (!usuario) {
    return null;  // Retorna null caso o dado não exista
  }


    return (
      <>
        <AlertDialog
          isOpen={isOpen}
          onClose={onClose}
        >
          <AlertDialogOverlay>
            <AlertDialogContent>
  
              <AlertDialogHeader 
                fontSize='md' 
                fontWeight='none'
                bg='primary'
                color='white'
                paddingY={2}
                borderBottomRadius='10px'
              
              >
                Confirmação
              </AlertDialogHeader>
  
              <AlertDialogCloseButton color='white'/>
  
              <AlertDialogBody>

                <p>Tem certeza que deseja excluir o usuário <strong>{usuario.IdFunc}</strong> ?</p>
                
              </AlertDialogBody>
  
              <AlertDialogFooter>
                <Button  colorScheme='green' size='sm' fontWeight='none'>
                  Sim, excluir agora!
                </Button>
                <Button colorScheme='red' size='sm' fontWeight='none' onClick={onClose} ml={3}>
                  Cancelar
                </Button>
              </AlertDialogFooter>
  
            </AlertDialogContent>
          </AlertDialogOverlay>
        </AlertDialog>
      </>
    )

}

export default ModalDeletarUsuario