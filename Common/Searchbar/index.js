import React, { useState } from 'react'
import {
  Box,
  FormControl,
  FormLabel,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from '@chakra-ui/react'

import { AiOutlineSearch } from 'react-icons/ai'

const Searchbar = ({ inputProps, ...rest }) => {
  const [isPlaceholder, setIsPlaceholder] = useState(true)

  const [inputValue, setInputValue] = useState('')

  const togglePlaceholder = () => setIsPlaceholder((prevState) => !prevState)

  return (
    <InputGroup
      border='1px solid'
      borderColor='border.light'
      borderRadius='full'
      overflow='hidden'
      onBlur={togglePlaceholder}
      onFocus={togglePlaceholder}
      {...rest}
    >
      <FormControl pos='relative'>
        {isPlaceholder && (
          <FormLabel
            color='text.dark'
            fontWeight={400}
            pos='absolute'
            py='.5rem'
            px='1rem'
            left='0'
            top='0'
            m='0'
          >
            where do you <span style={{ fontWeight: 600 }}>want to go?</span>
          </FormLabel>
        )}
        <Input
          border='none'
          color='text.dark'
          value={isPlaceholder ? '' : inputValue || ''}
          onChange={({ target: { value } }) => setInputValue(value)}
          {...inputProps}
        />
      </FormControl>
      <InputRightElement
        children={
          <IconButton
            p='0'
            m='0'
            minW='2em'
            boxSize='2em'
            variant='brand'
            borderRadius='full'
            icon={<AiOutlineSearch />}
          />
        }
      />
    </InputGroup>
  )
}

export default Searchbar
