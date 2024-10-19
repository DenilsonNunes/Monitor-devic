import { useState } from 'react'

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Text,
  VStack,
  Stack,
  FormLabel,
  Select,
  HStack,
  Button,
  Input,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Radio,
  RadioGroup,
  Fade,
  Box
} from '@chakra-ui/react'


import DualList from '../../../../components/DualListBox/DualList';




const ModalFiltroRelatorio = ({ isOpen, onClose }) => {

  const [value, setValue] = useState('1')

  const [selectedValue, setSelectedValue] = useState('');
  const [isFadeIn, setIsFadeIn] = useState(false);


  const handleSelectChange = (event) => {

    const selecionado = event.target.value;
    console.log('Valor selecionado:', event.target.value);


    setSelectedValue(selecionado);

    // Ativa o efeito de fade-in sempre que o valor mudar
    setIsFadeIn(true);

  }


  const renderSwitchContent = (selecionado) => {


    switch (selecionado) {

      case 'Intervalo':
        return (
          <HStack marginTop={1}>

            <VStack spacing={0} alignItems='start'>
              <FormLabel margin={0} fontSize='14px' color='#4a5568'>De:</FormLabel>
              <Input type='date' size='sm' />
            </VStack>
            <VStack spacing={0} alignItems='start'>
              <FormLabel margin={0} fontSize='14px' color='#4a5568'>Até:</FormLabel>
              <Input type='date' size='sm' />
            </VStack>

          </HStack>
        )

      case 'MaiorOuIgual':

        return (
          <Input marginTop={6} maxW='150px' type='date' size='sm' />
        )


      case 'Hoje':

        return (
          <Input marginTop={6} maxW='150px' type='date' size='sm' />
        )


      case 'Ult7dias':

        return (
          <HStack marginTop={1}>

            <VStack spacing={0} alignItems='start'>
              <FormLabel margin={0} fontSize='14px' color='#4a5568'>De:</FormLabel>
              <Input type='date' size='sm' />
            </VStack>
            <VStack spacing={0} alignItems='start'>
              <FormLabel margin={0} fontSize='14px' color='#4a5568'>Até:</FormLabel>
              <Input type='date' size='sm' />
            </VStack>

          </HStack>
        )

      case 'EsteMesAteHoje':

        return (
          <HStack marginTop={1}>

            <VStack spacing={0} alignItems='start'>
              <FormLabel margin={0} fontSize='14px' color='#4a5568'>De:</FormLabel>
              <Input type='date' size='sm' />
            </VStack>
            <VStack spacing={0} alignItems='start'>
              <FormLabel margin={0} fontSize='14px' color='#4a5568'>Até:</FormLabel>
              <Input type='date' size='sm' />
            </VStack>

          </HStack>
        )
      case 'UltimoMes':

        return (
          <HStack marginTop={1}>

            <VStack spacing={0} alignItems='start'>
              <FormLabel margin={0} fontSize='14px' color='#4a5568'>De:</FormLabel>
              <Input type='date' size='sm' />
            </VStack>
            <VStack spacing={0} alignItems='start'>
              <FormLabel margin={0} fontSize='14px' color='#4a5568'>Até:</FormLabel>
              <Input type='date' size='sm' />
            </VStack>

          </HStack>
        )

      case 'AnoPassado':

        return (
          <HStack marginTop={1}>

            <VStack spacing={0} alignItems='start'>
              <FormLabel margin={0} fontSize='14px' color='#4a5568'>De:</FormLabel>
              <Input type='date' size='sm' />
            </VStack>
            <VStack spacing={0} alignItems='start'>
              <FormLabel margin={0} fontSize='14px' color='#4a5568'>Até:</FormLabel>
              <Input type='date' size='sm' />
            </VStack>

          </HStack>
        )
    }

  }

  return (
    <>
      <Modal onClose={onClose} isOpen={isOpen} isCentered size=''>
        <ModalOverlay />
        <ModalContent width='60%'>
          <ModalHeader
            bg='primary'
            color='white'
            paddingY={2}
            borderBottomRadius='10px'
          >Filtros
          </ModalHeader>

          <ModalCloseButton color='white' />

          <ModalBody marginTop={5}>

            <VStack>

              <Stack direction='row' width='100%' spacing={0} justifyContent='start' gap={2} >

                <Stack direction='column' spacing={0}>

                  <FormLabel margin={0} fontWeight='bold' color='#4a5568'>Top</FormLabel>

                  <NumberInput defaultValue={15} min={1} max={30} size='sm' maxW={24}>
                    <NumberInputField />
                    <NumberInputStepper>
                      <NumberIncrementStepper />
                      <NumberDecrementStepper />
                    </NumberInputStepper>
                  </NumberInput>

                </Stack>


                <Stack direction='column' spacing={0} >

                  <FormLabel margin={0} fontWeight='bold' color='#4a5568'>Empresa</FormLabel>

                  <Select size='sm'>
                    <option value='1-CONTAS CAIXAS'>Todas</option>
                    <option value='2-CONTAS BANCÁRIAS'>2-CONTAS BANCÁRIAS</option>
                    <option value='3-APLICAÇÕES FINANCEIRAS'>3-APLICAÇÕES FINANCEIRAS</option>
                  </Select>
                </Stack>



                <Stack direction='column' spacing={0}>

                  <FormLabel margin={0} fontWeight='bold' color='#4a5568'>Período de venda</FormLabel>

                  <Select size='sm' onChange={handleSelectChange}>
                    <option value='MaiorOuIgual'>Maior ou igual a</option>
                    <option value='Intervalo'>Intevalo</option>
                    <option value='Hoje'>Hoje</option>
                    <option value='Ult7dias'>Últimos 7 dias</option>
                    <option value='EsteMesAteHoje'>Este mês até hoje</option>
                    <option value='UltimoMes'>Último mês</option>
                    <option value='AnoPassado'>Ano passado</option>
                  </Select>

                </Stack>

                <Stack spacing={0}>
                  <Fade in={true}>
                    <Box
                      rounded='md'
                      minW='300px'
                    >
                      {renderSwitchContent(selectedValue)}

                    </Box>
                  </Fade>
                </Stack>

              </Stack>

              <Stack direction='row' width='100%' spacing={0} marginTop={5} justifyContent='start' gap={2}>

                <Stack direction='column' spacing={0}>

                  <FormLabel fontWeight='bold' color='#4a5568' margin={0}>Vendedor</FormLabel>

                  <Select placeholder='--Todos--' size='sm'>
                    <option value='1-CONTAS CAIXAS'>1-CONTAS CAIXAS</option>
                    <option value='2-CONTAS BANCÁRIAS'>2-CONTAS BANCÁRIAS</option>
                    <option value='3-APLICAÇÕES FINANCEIRAS'>3-APLICAÇÕES FINANCEIRAS</option>
                  </Select>

                </Stack>

                <Stack direction='column' spacing={0}>

                  <FormLabel fontWeight='bold' color='#4a5568' margin={0}>Função do vendedor</FormLabel>

                  <Select placeholder='--Todos--' size='sm'>
                    <option value='1-CONTAS CAIXAS'>1-CONTAS CAIXAS</option>
                    <option value='2-CONTAS BANCÁRIAS'>2-CONTAS BANCÁRIAS</option>
                    <option value='3-APLICAÇÕES FINANCEIRAS'>3-APLICAÇÕES FINANCEIRAS</option>
                  </Select>
                </Stack>


                <Stack direction='column' spacing={0} >

                  <FormLabel fontWeight='bold' color='#4a5568' margin={0}>Unidade</FormLabel>

                  <Select placeholder='--Selecione--' size='sm'>
                    <option value='1-CONTAS CAIXAS'>1-CONTAS CAIXAS</option>
                    <option value='2-CONTAS BANCÁRIAS'>2-CONTAS BANCÁRIAS</option>
                    <option value='3-APLICAÇÕES FINANCEIRAS'>3-APLICAÇÕES FINANCEIRAS</option>
                  </Select>

                  
                  <DualList/>

                </Stack>

              </Stack>

              <Stack direction='row' width='100%' spacing={0} marginTop={5} justifyContent='start'>

                <Stack direction='column' spacing={0}>

                  <FormLabel margin={0} fontWeight='bold' color='#4a5568'>Calcular por</FormLabel>
                  <RadioGroup onChange={setValue} value={value}>
                    <Stack direction='column'>
                      <Radio value='1' size='sm'>Quantidade</Radio>
                      <Radio value='2' size='sm'>Valor</Radio>
                    </Stack>
                  </RadioGroup>

                </Stack>

              </Stack>


              <HStack>

                <Button
                  size='sm'
                  bg='primary'
                  color='white'
                  _hover={{ bg: '#0369a1' }}
                  borderRadius={0}
                >
                  Buscar
                </Button>

                <Button
                  size='sm'
                  bg='gray.400'
                  color='white'
                  _hover={{ bg: 'gray.500' }}
                  borderRadius={0}
                >
                  Limpar
                </Button>

              </HStack>


            </VStack>


          </ModalBody>

        </ModalContent>
      </Modal>
    </>
  )
}

export default ModalFiltroRelatorio