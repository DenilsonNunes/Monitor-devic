import { tableAnatomy } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers } from '@chakra-ui/react'

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(tableAnatomy.keys)

const baseStyle = definePartsStyle({

  table: {
    borderColor: 'gray.300',
    bg:'white'
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
  },
  tr: {
    _hover: {
      bg: 'gray.100',
      cursor: 'pointer',
    },
  },
})

export const tableTheme = defineMultiStyleConfig({ baseStyle })
