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




const ModalDeletarUsuario = ({ isOpen, onClose }) => {

  

  const handleDeletarUsuario = () => {


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
              Tem certeza que deseja excluir o usuário?
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
7
export default ModalDeletarUsuario