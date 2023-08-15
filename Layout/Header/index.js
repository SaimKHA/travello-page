import React from 'react'

import { Box, Flex } from '@chakra-ui/react'
import Logo from './Logo'
import Container from '../Container'

const Header = () => {
  return (
    <Box bg='white' py='12.5px'>
      <Container>
        <Flex>
          <Logo />
        </Flex>
      </Container>
    </Box>
  )
}

export default Header
