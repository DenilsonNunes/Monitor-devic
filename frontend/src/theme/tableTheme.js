import { tableAnatomy } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers } from '@chakra-ui/react'

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(tableAnatomy.keys)


// Variantes personalizadas
const customVariant = definePartsStyle({
  table: {
    borderColor: 'gray.300',
    bg: 'white',
  },
  th: {
    bg: 'gray.300',
    textAlign: 'center',
    fontSize: '36px !important',
    border: '1px solid #cbd5e1 !important',
  },
  td: {
    padding: '8px 8px 8px 8px !important',
    border: '1px solid #cbd5e1 !important',
    fontSize: '14px',
    fontWeight: '500',
  },
  tr: {
    _hover: {
      bg: 'gray.100',
      cursor: 'pointer',
    },
  },
});





// Configuração do tema de tabela
export const tableTheme = defineMultiStyleConfig({
  variants: {
    custom: customVariant,
  },
});