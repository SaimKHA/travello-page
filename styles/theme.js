import { extendTheme } from '@chakra-ui/react'

const colors = {
  primary: {
    light: '#FF6838',
    dark: '#FF4438',
  },
  secondary: '#222222',
  cream: '#C7C7C7',
  light: '#C7C7C7',
  gray: '#EDEDED',
  gradient: {
    primary: 'background: linear-gradient(180deg, #FF6838 0%, #FF4438 100%)',
    blueToRed: 'linear-gradient(267.68deg, #FE4343 0%, #2D6983 100%)',
    secondary: '#222222',
  },
  text: {
    dark: '#222222',
  },
  border: {
    light: '#A5A5A5',
  },
}

const Button = {
  variants: {
    brand: {
      transition: '0.3s ease',
      bg: 'primary.light',
      boxShadow: '0 0 2px 2px #efdfde',
      '&:hover': {
        bg: 'primary.dark',
      },
    },
  },
}

const fonts = {
  heading: "'Poppins', sans-serif",
  body: "'Poppins', sans-serif",
}

const config = {
  initialColorMode: 'light',
  useSystemColorMode: false,
}

const theme = extendTheme({
  components: { Button },
  fonts,
  colors,
  config,
})

export default theme
