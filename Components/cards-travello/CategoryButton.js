import React from "react";
import { Box, Button, Flex } from "@chakra-ui/react";
import { Select } from "@chakra-ui/react";
import Container from "../../Layout/Container";
import Searchbar from "../../Common/Searchbar/index";
import { SimpleGrid } from "@chakra-ui/react";

const CategoryButton = () => {
  return (
    <Container>
      <Box padding={"10px 0px 80px 0px"}>
        <Flex
          flexDirection={['column' , 'column' , 'column' , 'row' ,'row']}
          gap={['13px','13px','10px','8px','8px']}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Box width={['100%' , '100%' , '25%' , '25%' , '25%']}>
            <Searchbar />
          </Box>
          <Select
            fontSize={"12px"}
            border={"1px solid #C7C7C7 !important"}
            color={"#222222"}
            borderRadius={"30px"}
            width={['100%' , '100%' , '25%' , '10%' , '10%']}
            placeholder="Category"
          >
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </Select>
          <Select
            fontSize={"12px"}
            border={"1px solid #C7C7C7 !important"}
            color={"#222222"}
            borderRadius={"30px"}
            width={['100%' , '100%' , '25%' , '10%' , '10%']}
            placeholder="Price"
          >
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </Select>
          <SimpleGrid columns={[3, 3, 3, 5, 7]} spacingX={"5px"}>
            {[
              "Anywhere",
              "KPK",
              "Gilgit Baltistan",
              "Azad Kashmir",
              "Punjab",
              "Balochistan",
              "Sindh",
            ].map((v) => {
              return (
                <Button
                  variant={"unstyled"}
                  _hover={{ transform: "scale(1.1)", borderColor: "#000" }}
                  fontWeight={"200px"}
                  fontSize={"12px"}
                  border={"1px solid #C7C7C7"}
                  color={"#222222"}
                  padding={"8px"}
                  borderRadius={"30px"}
                  margin={['7px' , '7px' ,'7px' ,'0px' ,'0px']}

                >
                  {v}
                </Button>
              );
            })}
          </SimpleGrid>
        </Flex>
      </Box>
    </Container>
  );
};

export default CategoryButton;
