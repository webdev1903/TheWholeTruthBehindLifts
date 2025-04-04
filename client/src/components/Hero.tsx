import { Box, Container, Heading, Text, Button, Flex, Image, useColorMode, Stack } from '@chakra-ui/react';

const Hero = () => {
  const { colorMode } = useColorMode();

  return (
    <Box bg={colorMode === 'light' ? 'gray.50' : 'gray.900'} py={{ base: 10, md: 20 }}>
      <Container maxW="container.xl">
        <Flex direction={{ base: 'column', md: 'row' }} align="center" gap={10}>
          <Box flex={1} textAlign={{ base: 'center', md: 'left' }}>
            <Heading
              as="h1"
              size={{ base: 'xl', md: '2xl' }}
              mb={6}
              color={colorMode === 'light' ? 'blue.600' : 'blue.400'}
            >
              Make The World Stronger
            </Heading>
            <Text
              fontSize={{ base: 'lg', md: 'xl' }}
              mb={8}
              color={colorMode === 'light' ? 'gray.600' : 'gray.300'}
            >
              Unlock your true potential with evidence-based strength training and movement science.
            </Text>
            <Stack
              direction={{ base: 'column', sm: 'row' }}
              spacing={4}
              justify={{ base: 'center', md: 'flex-start' }}
            >
              <Button size={{ base: 'md', md: 'lg' }} colorScheme="blue">
                Get Started
              </Button>
              <Button size={{ base: 'md', md: 'lg' }} variant="outline">
                Learn More
              </Button>
            </Stack>
          </Box>
          <Box flex={1} display={{ base: 'none', md: 'block' }}>
            <Image
              src="/hero-image.jpg"
              alt="Strength Training"
              borderRadius="lg"
              boxShadow="xl"
              w="full"
              h="auto"
              objectFit="cover"
            />
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default Hero; 