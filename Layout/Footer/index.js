import React from 'react'

import { Box, Flex, HStack, Link, Text, VStack } from '@chakra-ui/react'

import { AiFillFacebook, AiFillYoutube } from 'react-icons/ai'
import { ImLinkedin2, ImInstagram } from 'react-icons/im'

import Container from '../Container'

const Footer = () => {
  return (
    <Box bg='gray' color='text.dark'>
      <Container>
        <Flex w='full' justify='space-between' align='center' py='2em'>
          <VStack align='flex-start'>
            <Text fontWeight='500' fontSize='md'>
              For business queries, contact{' '}
              <Link
                href='email:support@travello.com'
                textDecoration='underline'
              >
                support@travello.com
              </Link>
            </Text>
            <Text fontWeight={300}>Copyrights 2022 | All Rights Reserved.</Text>
          </VStack>
          <HStack gap='.5em' align='center'>
            <Link href='#'>
              <AiFillYoutube size='1.75em' />
            </Link>
            <Link href='#'>
              <ImLinkedin2 size='1.4em' />
            </Link>
            <Link href='#'>
              <ImInstagram size='1.15em' />
            </Link>
            <Link href='#'>
              <AiFillFacebook size='1.65em' />
            </Link>
          </HStack>
        </Flex>
      </Container>
    </Box>
  )
}

export default Footer
