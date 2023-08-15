import * as React from 'react'
import Head from 'next/head'

import theme from '../styles/theme'

import '@fontsource/baloo-bhai-2'
import '@fontsource/baloo-bhai-2/800.css'

import '@fontsource/poppins'
import '@fontsource/poppins/500.css'
import '@fontsource/poppins/600.css'
import '@fontsource/poppins/500.css'
import '@fontsource/poppins/900.css'

import '../styles/app.css'

import { Box, ChakraProvider } from '@chakra-ui/react'
import Header from '../Layout/Header'
import Footer from '../Layout/Footer'
import Cardlist from '../Components/cards-travello/cardlist'
import CategoryButton from '../Components/cards-travello/Categorybutton'
import {default as travello} from '../store/trevello.json' 
const App = ({ Component, pageProps }) => {
  return (
    <ChakraProvider theme={theme}>
      <Head>
        <meta name='description' content='Travello pakistan web UI' />
        <link rel='icon' href='/favicon/favicon.ico' />
      </Head>

      <Box>
        <Header />

        <CategoryButton  /> 

        <Cardlist items={travello} heading={'Friends Tour Routes'} />
        <Cardlist items={travello} heading={'Friends Tour Routes'} />
        <Cardlist items={travello} heading={'Group Tour Routes'} />
        <Cardlist items={travello} heading={'Students Tour Routes'} />
        <Cardlist items={travello} heading={'Honeymoon Tour Routes'} />
        <Cardlist items={travello} heading={'Corporate Tour Routes'} />

        {/* <Component {...pageProps} /> */}

        <Footer />       
      </Box>
    </ChakraProvider>
  )
}

export default App
