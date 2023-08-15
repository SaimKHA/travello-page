import PropTypes from 'prop-types'

import React, { useState } from 'react'
import { Box, Flex, Text, VStack } from '@chakra-ui/react'

const CategoryCard = ({ data: { img, title, routes }, ...styles }) => {
  const [isActive, setIsActive] = useState(false)

  return (
    <Box
      bg={`url('${img}') no-repeat center / cover`}
      borderRadius='xl'
      w='full'
      m='0 !important'
      cursor='pointer'
      onMouseEnter={() => setIsActive(true)}
      onMouseLeave={() => setIsActive(false)}
      {...styles}
    >
      <Flex
        bg='linear-gradient(#0000, #000)'
        align='flex-end'
        w='full'
        h='full'
        p='1em'
      >
        <Box>
          <Text fontSize='xl' textDecoration={isActive ? 'underline' : 'none'}>
            {title}
          </Text>
          <Text>{routes} routes</Text>
        </Box>
      </Flex>
    </Box>
  )
}

CategoryCard.propTypes = {
  data: PropTypes.exact({
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    routes: PropTypes.number.isRequired,
  }).isRequired,
}

export default CategoryCard
