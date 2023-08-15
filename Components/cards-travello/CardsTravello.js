import { Box, Flex, Heading, Image,Text } from '@chakra-ui/react';
import React from 'react'


const CardsTravello = ({img,category,title,price,serviceBtn}) => {
  return (
    <>
            <Box width={'100%'}>
                <Box width={{md:'235px'}}>
                    <Image src={img} height={'220px'} borderRadius={'10px'} boxSizing='full' />
                </Box>
                <Box>
                    <Text fontSize={'10px'} fontWeight={'bold'} color={'grey'} my={'7px'}>{category}</Text>
                    <Heading fontSize={'16px'}>{title}</Heading>
                    <Text fontSize={'13px'} my={'5px'}>{price}</Text>
                    <Text fontSize={'12px'} color={'#008489'} fontWeight={'bold'} >{serviceBtn}</Text>
                </Box>
            </Box>
    </>
  )
}

export default CardsTravello;