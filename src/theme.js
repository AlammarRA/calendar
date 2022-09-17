import { extendTheme } from '@chakra-ui/react'
import { CalendarDefaultTheme } from '@uselessdev/datepicker'

export const theme = extendTheme(CalendarDefaultTheme, {
  components: {
    Calendar: {
      parts: ['calendar'],

      baseStyle: {
        calendar: {
          borderWidth: '6px',
          borderColor: 'pink.400',
          rounded: 'none',
          shadow: 'none',
          boxShadow: '32px 16px 0 6px #3B4DCC'
        },
      },
    },

    CalendarControl: {
      parts: ['button'],

      baseStyle: {
        button: {
          h: 6,
          px: 2,
          rounded: 'none',
          fontSize: 'sm',
          color: 'white',
          bgColor: 'pink.400',

          _hover: {
            bgColor: 'pink.200',
          },

          _focus: {
            outline: 'none',
          },
        },
      },
    }
  },
})