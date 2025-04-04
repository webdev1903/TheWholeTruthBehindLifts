import { Box, Container, Heading, Text, Button, Flex, Image, useColorMode } from '@chakra-ui/react';

const Hero = () => {
  const { colorMode } = useColorMode();

  return (
    <Box bg={colorMode === 'light' ? 'gray.50' : 'gray.900'} py={20}>
      <Container maxW="container.xl">
        <Flex direction={{ base: 'column', md: 'row' }} align="center" gap={10}>
          <Box flex={1}>
            <Heading as="h1" size="2xl" mb={6} color={colorMode === 'light' ? 'blue.600' : 'blue.400'}>
              Make The World Stronger
            </Heading>
            <Text fontSize="xl" mb={8} color={colorMode === 'light' ? 'gray.600' : 'gray.300'}>
              Unlock your true potential with evidence-based strength training and movement science.
            </Text>
            <Button size="lg" colorScheme="blue" mr={4}>
              Get Started
            </Button>
            <Button size="lg" variant="outline">
              Learn More
            </Button>
          </Box>
          <Box flex={1}>
            <Image
              src="/hero-image.jpg"
              alt="Strength Training"
              borderRadius="lg"
              boxShadow="xl"
            />
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default Hero; 