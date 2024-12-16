import { 
  HStack, 
  Text, 
  Select,
  IconButton
} from "@chakra-ui/react"

import { ChevronRightIcon, ChevronLeftIcon, ArrowLeftIcon, ArrowRightIcon } from '@chakra-ui/icons'






const Pagination = ({pages, currentPage}) => {

  console.log('PAge e currentpage', pages, currentPage)

  return (

    <>

      <HStack>

        <Text fontSize='14px' whiteSpace="nowrap">Exibir</Text>
        <Select
          size='sm'
        >
          <option value='10'>10</option>
          <option value='20'>20</option>
          <option value='50'>50</option>
        </Select>

      </HStack>



      <HStack>

        <span>Página {currentPage} de {pages}</span>


        <IconButton icon={<ArrowLeftIcon />} />

        <IconButton icon={<ChevronLeftIcon />} />
        <IconButton icon={<ChevronRightIcon />} />

        <IconButton icon={<ArrowRightIcon />} />


      </HStack>



    </>


  )


}





export default Pagination