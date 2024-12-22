import { useSearchParams } from "react-router-dom";

import { 
  HStack, 
  Text, 
  Select,
  IconButton
} from "@chakra-ui/react"

import { ChevronRightIcon, ChevronLeftIcon, ArrowLeftIcon, ArrowRightIcon } from '@chakra-ui/icons'
import { useState } from "react";




const Pagination = ({pages, currentPage}) => {

  const [searchParams, setSearchParams] = useSearchParams();


  // Inicializa o estado de perPage com o valor dos parâmetros da URL ou um valor padrão
  const [perPage, setPerPage] = useState(searchParams.get("pageSize") || "10");


  const firstPage = () => {
    setSearchParams(params => {
      params.set('page','1')

      return params;
    })
  }


  const nextPage = () => {
    
    if (currentPage + 1 > pages) {
      return 
    }

    setSearchParams(params => {
      params.set('page', String(currentPage + 1))
      return params;
    })

  }


  const previousPage = () => {
    if (currentPage - 1 < 0) {
      return 
    }

    setSearchParams(params => {
      params.set('page', String(currentPage - 1))

      return params;
    })

  }



  const lastPage = () => {
    setSearchParams(params => {
      params.set('page', String(pages))

      return params;
    })
  }

  const handlePerPage = (e) => {

    setPerPage(e.target.value)

    setSearchParams(params => {
      params.set('pageSize', String(e.target.value))

      return params;
    })

    setSearchParams(params => {
      params.set('page','1')

      return params;
    })


  }


  return (

    <>

      <HStack>

        <Text fontSize='14px' whiteSpace="nowrap">Exibir</Text>
        <Select
          bg='white'
          size='sm'
          onChange={handlePerPage}
          value={perPage}
        >
          <option value='10'>10</option>
          <option value='20'>20</option>
          <option value='50'>50</option>
        </Select>

      </HStack>


      <HStack>

        <span>Página {currentPage} de {pages}</span>


        <IconButton 
          bg='gray.300'
          onClick={firstPage}
          icon={<ArrowLeftIcon boxSize={2}/>} 
        />

        <IconButton 
          bg='gray.300'
          isDisabled={currentPage - 1 <= 0}
          onClick={previousPage}
          icon={<ChevronLeftIcon />} 
        />
        <IconButton
          bg='gray.300'
          isDisabled={currentPage + 1 > pages}
          onClick={nextPage}
          icon={<ChevronRightIcon />} 
        />

        <IconButton
          bg='gray.300'
          onClick={lastPage}
          icon={<ArrowRightIcon boxSize={2}/>} 
        />


      </HStack>



    </>


  )


}





export default Pagination