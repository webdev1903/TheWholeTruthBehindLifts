import { Box, Container, Flex, Heading, Text, Image, VStack, useColorMode } from '@chakra-ui/react';

const About = () => {
  const { colorMode } = useColorMode();

  return (
    <Box py={20} bg={colorMode === 'light' ? 'gray.50' : 'gray.900'}>
      <Container maxW="container.xl">
        <Flex direction={{ base: 'column', md: 'row' }} gap={10} align="center">
          <Box flex={1}>
            <Image
              src="/founder.jpg"
              alt="Founder"
              borderRadius="full"
              boxSize="300px"
              objectFit="cover"
              boxShadow="xl"
            />
          </Box>
          <Box flex={1}>
            <VStack align="start" spacing={6}>
              <Heading as="h2" size="xl" color={colorMode === 'light' ? 'blue.600' : 'blue.400'}>
                About The Whole Truth Behind Lifts
              </Heading>
              <Text fontSize="lg" color={colorMode === 'light' ? 'gray.600' : 'gray.300'}>
                Founded by a team of certified strength and conditioning specialists, we are dedicated to providing evidence-based training information and resources.
              </Text>
              <Text fontSize="lg" color={colorMode === 'light' ? 'gray.600' : 'gray.300'}>
                Our mission is to empower individuals with the knowledge and tools they need to achieve their fitness goals through scientifically-backed training methods.
              </Text>
              <Text fontSize="lg" color={colorMode === 'light' ? 'gray.600' : 'gray.300'}>
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