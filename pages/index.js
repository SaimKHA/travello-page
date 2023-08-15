import Head from 'next/head'

import {
  Box,
  Flex,
  Heading,
  HStack,
  Image,
  Text,
  VStack,
} from '@chakra-ui/react'
import Container from '../Layout/Container'
import { Searchbar } from '../Common'
import { CategoryCard } from '../Components'

export default function Home() {
  return (
    <>
      <Head>
        <title>Trevello | Search, Discover & Explore.</title>
      </Head>

      <Box background='url("/assets/backgrounds/banner.jpg") no-repeat center / cover'>
        <Container>
          <Flex align='center' py='5em'>
            <Box bg='white' borderRadius='12px' overflow='hidden'>
              <Box bg='gradient.blueToRed' px='45px' py='10px'>
                <Text letterSpacing='0.11em' fontSize='12px'>
                  Connect with Trusted Travel Service Providers on Travello
                </Text>
              </Box>
              <VStack maxW='21rem' mx='auto' gap='2.5rem' pt='2.5rem' pb='5em'>
                <Heading
                  color='text.dark'
                  fontSize='5xl'
                  letterSpacing='0.11em'
                  lineHeight='66px'
                  fontWeight={900}
                >
                  Search, Discover & Explore.
                </Heading>
                <Searchbar />
              </VStack>
            </Box>
          </Flex>
        </Container>
      </Box>

      <Box bg='black' py='4rem'>
        <Container>
          <Box>
            <Box mb='3em'>
              <Heading
                fontSize='2xl'
                fontWeight='500'
                textAlign='center'
                textTransform='uppercase'
              >
                All Categories of tour
              </Heading>
            </Box>
            <Flex gap='1em'>
              <VStack w='full' maxW='25%' align='flex-start' gap='1em'>
                <CategoryCard
                  h='full'
                  maxH='25rem'
                  data={{
                    img: '/assets/backgrounds/tourGroup.jfif',
                    title: 'Friends Tours',
                    routes: 20,
                  }}
                />
              </VStack>
              <VStack maxW='25%' w='full' align='flex-start' gap='1em'>
                <CategoryCard
                  minH='12em'
                  data={{
                    img: '/assets/backgrounds/tourGroup.jfif',
                    title: 'Honeymoon Tours',
                    routes: 20,
                  }}
                />
                <CategoryCard
                  minH='12em'
                  data={{
                    img: '/assets/backgrounds/tourGroup.jfif',
                    title: 'Family Tours',
                    routes: 20,
                  }}
                />
              </VStack>
              <VStack maxW='25%' w='full' align='flex-start' gap='1em'>
                <CategoryCard
                  h='full'
                  maxH='25rem'
                  data={{
                    img: '/assets/backgrounds/tourGroup.jfif',
                    title: 'Corporate Tours',
                    routes: 20,
                  }}
                />
              </VStack>
              <VStack maxW='25%' w='full' align='flex-start' gap='1em'>
                <CategoryCard
                  minH='12em'
                  data={{
                    img: '/assets/backgrounds/tourGroup.jfif',
                    title: 'Group Tours',
                    routes: 20,
                  }}
                />
                <CategoryCard
                  minH='12em'
                  data={{
                    img: '/assets/backgrounds/tourGroup.jfif',
                    title: 'Students Tours',
                    routes: 20,
                  }}
                />
              </VStack>
            </Flex>
          </Box>
        </Container>
      </Box>

      <Box bg='white' py='4em'>
        <Container>
          <Box color='text.dark'>
            <Box>
              <Heading fontWeight='600' fontSize='3xl'>
                Discover top locations
              </Heading>
            </Box>
            <Flex py='2em' align='center' justify='space-between'>
              {[
                {
                  img: '/assets/backgrounds/tourGroup.jfif',
                  title: 'Swat',
                  routes: 25,
                },
                {
                  img: '/assets/backgrounds/tourGroup.jfif',
                  title: 'Chitral',
                  routes: 25,
                },
                {
                  img: '/assets/backgrounds/tourGroup.jfif',
                  title: 'Arang kel',
                  routes: 25,
                },
                {
                  img: '/assets/backgrounds/tourGroup.jfif',
                  title: 'Hunza',
                  routes: 25,
                },
              ].map(({ img, title, routes }) => (
                <HStack maxW='25%' w='full' gap='.5em'>
                  <Box borderRadius='2xl' overflow='hidden' maxW='9em'>
                    <Image alt='' src={img} />
                  </Box>

                  <Box>
                    <Text w='max-content' fontSize='md' fontWeight='600'>
                      {title}
                    </Text>
                    <Text w='max-content' fontSize='sm'>
                      {routes} routes
                    </Text>
                  </Box>
                </HStack>
              ))}
            </Flex>
            <Flex py='2em' align='center' justify='space-between'>
              {[
                {
                  img: '/assets/backgrounds/tourGroup.jfif',
                  title: 'Naran',
                  routes: 25,
                },
                {
                  img: '/assets/backgrounds/tourGroup.jfif',
                  title: 'Skardu',
                  routes: 25,
                },
                {
                  img: '/assets/backgrounds/tourGroup.jfif',
                  title: 'Ormara Beach',
                  routes: 25,
                },
                {
                  img: '/assets/backgrounds/tourGroup.jfif',
                  title: 'Murree',
                  routes: 25,
                },
              ].map(({ img, title, routes }) => (
                <HStack maxW='25%' w='full' gap='.5em'>
                  <Box borderRadius='2xl' overflow='hidden' maxW='9em'>
                    <Image alt='' src={img} />
                  </Box>

                  <Box>
                    <Text w='max-content' fontSize='md' fontWeight='600'>
                      {title}
                    </Text>
                    <Text w='max-content' fontSize='sm'>
                      {routes} routes
                    </Text>
                  </Box>
                </HStack>
              ))}
            </Flex>
          </Box>

          <Box pt='4em'>
            <Box bg='blackAlpha.800' p='3em' borderRadius='xl'>
              <Heading fontFamily="'Baloo bhai 2'">Travello</Heading>
              <Box mt='4em'>
                <Text fontSize='xl'>
                  <Text display='inline' fontWeight='600'>
                    50+
                  </Text>{' '}
                  travel routes with
                  <Text display='inline' fontWeight='600'>
                    {' '}
                    100+
                  </Text>{' '}
                  <br />
                  service providers
                </Text>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  )
}
