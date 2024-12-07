import { useState, useEffect } from 'react'
import { useQuery, useMutation } from '@tanstack/react-query';


import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  AlertDialogCloseButton,
  Button,
  Text,
  VStack
} from '@chakra-ui/react'

import { CheckCircleIcon, WarningTwoIcon } from '@chakra-ui/icons'

// API INSTANCE
import api from '../../../../helpers/api-instance';
import Loader from '../../../../components/Loading/Loader';




const ModalDeletarUsuario = ({ isOpen, onClose, usuario }) => {

  if (!usuario) {
    return null;  // Retorna null caso o dado não exista
  }


  const handleDeletarUsuario = (codFunc) => {

    mutate(codFunc);

  }



  const { mutate, isPending, isSuccess, isError, reset } = useMutation({

    mutationFn: async (codFunc) => {

      await new Promise((resolve) => setTimeout(resolve, 2000));

      const response = await api.delete(`/configuracoes/usuarios/${codFunc}`)
      return response.data

    },
    onSuccess: (data) => {

      console.log('Deu sucesso', data)

    },
    onError: () => {

      console.log('Deu erro')

    }


  })


  const handleCloseModal = () => {
    reset(); // Reseta o estado da mutação
    onClose();
  }




  return (
    <>
      <AlertDialog
        isOpen={isOpen}
        onClose={handleCloseModal}
        closeOnOverlayClick={false}
      >
        <AlertDialogOverlay>

          <AlertDialogContent>

            <AlertDialogHeader
              fontSize='md'
              fontWeight='none'
              bg='primary'
              color='white'
              borderBottomRadius='10px'
              paddingY={3}
            >
              
              Confirmação

            </AlertDialogHeader>

            <AlertDialogCloseButton color='white' />

            {!isPending && !isSuccess && !isError &&


              <AlertDialogBody >

                <p>Tem certeza que deseja excluir o usuário <strong>{usuario.IdFunc}</strong> ?</p>

                <AlertDialogFooter padding={0} marginTop={20}>

                  <>
                    <Button
                      colorScheme='green'
                      size='sm'
                      fontWeight='none'
                      disabled={isPending}
                      onClick={() => handleDeletarUsuario(usuario.CodFunc)}
                    >
                      Sim, excluir agora!
                    </Button>

                    <Button
                      colorScheme='red'
                      size='sm'
                      fontWeight='none'
                      onClick={onClose}
                      ml={3}
                      disabled={isPending}
                    >
                      Cancelar
                    </Button>
                  </>
                </AlertDialogFooter>

              </AlertDialogBody>

            }



            {isPending &&

              <AlertDialogBody>

                <Loader />

              </AlertDialogBody>

            }


            {isSuccess &&

              <AlertDialogBody >

                <VStack>
                  <CheckCircleIcon boxSize={28} color="green.500" />
                  <Text color='green'>Usuário deletado com sucesso !!!</Text>
                </VStack>

              </AlertDialogBody>

            }

            {isError &&

              <AlertDialogBody bg=''>

                <VStack>
                  <WarningTwoIcon boxSize={28} color="red.500" />
                  <Text color='red' fontSize='lg' >Erro ao deletar usuário !!!</Text>
                </VStack>

              </AlertDialogBody>

            }

          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  )

}

export default ModalDeletarUsuario