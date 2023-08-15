import { Box, Flex, Heading, SimpleGrid } from "@chakra-ui/react";
import Container from "../../Layout/Container";
import React from "react";
import CardsTravello from "./CardsTravello";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <Box
      onClick={onClick}
      position={"absolute"}
      top={"-39px"}
      right={"14px"}
      border={"1px solid #D6D6D6"}
      borderRadius={"full"}
      padding={"5px"}
    >
      <AiOutlineArrowRight />
    </Box>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <Box
      onClick={onClick}
      position={"absolute"}
      top={"-39px"}
      right={"50px"}
      border={"1px solid #D6D6D6"}
      borderRadius={"full"}
      padding={"5px"}
    >
      <AiOutlineArrowLeft />
    </Box>
  );
}

const cardlist = ({ items, heading }) => {
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Container>
      <Flex alignItems={"center"} justifyContent={"space-between"}>
        <Heading
          fontSize={"19px"}
          color={"#222222"}
          fontWeight={"500"}
          paddingBottom={"20px"}
        >
          {heading}
        </Heading>
        <Heading
          fontSize={"12px"}
          fontWeight="300"
          textDecoration="underline"
          marginRight="86px"
          marginTop="-6px"
        >
          Show(10)
        </Heading>
      </Flex>
      <Box padding="0px 0px 80px 0px">
        {/* <SimpleGrid columns={[1,2,3,4,5]}> */}
        {/* <Flex justifyContent={'space-between'} gap={'10px'}> */}
        <Slider {...settings}>
          {items.map((item, i) => {
            return (
              <CardsTravello
                img={item.img}
                key={item.id}
                category={item.category}
                title={item.title}
                price={item.price}
                serviceBtn={item.serviceBtn}
              />
            );
          })}
          {/* </SimpleGrid> */}
        </Slider>

        {/* </Flex> */}
      </Box>
    </Container>
  );
};

export default cardlist;
