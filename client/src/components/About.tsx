import { Box, Container, Flex, Heading, Text, Image, VStack, useColorMode } from '@chakra-ui/react';

const About = () => {
  const { colorMode } = useColorMode();

  return (
    <Box py={{ base: 10, md: 20 }} bg={colorMode === 'light' ? 'gray.50' : 'gray.900'}>
      <Container maxW="container.xl">
        <Flex
          direction={{ base: 'column', md: 'row' }}
          gap={{ base: 6, md: 10 }}
          align="center"
        >
          <Box flex={1} display="flex" justifyContent="center">
            <Image
              src="/founder.jpg"
              alt="Founder"
              borderRadius="full"
              boxSize={{ base: '200px', md: '300px' }}
              objectFit="cover"
              boxShadow="xl"
            />
          </Box>
          <Box flex={1}>
            <VStack align={{ base: 'center', md: 'start' }} spacing={6}>
              <Heading
                as="h2"
                size={{ base: 'lg', md: 'xl' }}
                color={colorMode === 'light' ? 'blue.600' : 'blue.400'}
                textAlign={{ base: 'center', md: 'left' }}
              >
                About The Whole Truth Behind Lifts
              </Heading>
              <Text
                fontSize={{ base: 'md', md: 'lg' }}
                color={colorMode === 'light' ? 'gray.600' : 'gray.300'}
                textAlign={{ base: 'center', md: 'left' }}
              >
                Founded by a team of certified strength and conditioning specialists, we are dedicated to providing evidence-based training information and resources.
              </Text>
              <Text
                fontSize={{ base: 'md', md: 'lg' }}
                color={colorMode === 'light' ? 'gray.600' : 'gray.300'}
                textAlign={{ base: 'center', md: 'left' }}
              >
                Our mission is to empower individuals with the knowledge and tools they need to achieve their fitness goals through scientifically-backed training methods.
              </Text>
              <Text
                fontSize={{ base: 'md', md: 'lg' }}
                color={colorMode === 'light' ? 'gray.600' : 'gray.300'}
                textAlign={{ base: 'center', md: 'left' }}
              >
                With years of experience in the field, our team combines academic knowledge with practical expertise to deliver high-quality education and training programs.
              </Text>
            </VStack>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default About; 