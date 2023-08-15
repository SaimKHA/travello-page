import { Box, Flex, Heading, Image } from '@chakra-ui/react'
import React from 'react'

const Logo = () => {
  return (
    <Box>
      <Flex color='text.dark' align='center' gap='.5em'>
        <Box h='35px'>
          <Image alt='Logo' src='/assets/logo.png' h='full' />
        </Box>
        <Heading fontWeight={800} size='lg' fontFamily="'Baloo Bhai 2'">
          Travello
        </Heading>
      </Flex>
    </Box>
  )
}

export default Logo
