import { Box, Container, Heading, Text, SimpleGrid, useColorMode } from '@chakra-ui/react';
import { FaDumbbell, FaBook, FaUsers, FaChartLine } from 'react-icons/fa';

const Features = () => {
  const { colorMode } = useColorMode();

  return (
    <Box py={{ base: 10, md: 20 }} bg={colorMode === 'light' ? 'white' : 'gray.900'}>
      <Container maxW="container.xl">
        <Heading
          as="h2"
          size={{ base: '2xl', md: '3xl' }}
          textAlign="center"
          mb={{ base: 8, md: 16 }}
          color={colorMode === 'light' ? 'blue.600' : 'blue.400'}
        >
          Key Features
        </Heading>
        <SimpleGrid columns={{ base: 1, sm: 2, lg: 4 }} spacing={{ base: 6, md: 8 }}>
          <Box
            p={{ base: 4, md: 6 }}
            borderRadius="lg"
            bg={colorMode === 'light' ? 'gray.50' : 'gray.800'}
            textAlign="center"
          >
            <Box
              as={FaDumbbell}
              w={{ base: 8, md: 10 }}
              h={{ base: 8, md: 10 }}
              color={colorMode === 'light' ? 'blue.500' : 'blue.400'}
              mx="auto"
              mb={4}
            />
            <Heading as="h3" size={{ base: 'sm', md: 'md' }} mb={2}>
              Evidence-Based Training
            </Heading>
            <Text color={colorMode === 'light' ? 'gray.600' : 'gray.300'}>
              Learn training methods backed by scientific research and proven results.
            </Text>
          </Box>

          <Box
            p={{ base: 4, md: 6 }}
            borderRadius="lg"
            bg={colorMode === 'light' ? 'gray.50' : 'gray.800'}
            textAlign="center"
          >
            <Box
              as={FaBook}
              w={{ base: 8, md: 10 }}
              h={{ base: 8, md: 10 }}
              color={colorMode === 'light' ? 'blue.500' : 'blue.400'}
              mx="auto"
              mb={4}
            />
            <Heading as="h3" size={{ base: 'sm', md: 'md' }} mb={2}>
              Comprehensive Resources
            </Heading>
            <Text color={colorMode === 'light' ? 'gray.600' : 'gray.300'}>
              Access detailed guides, tutorials, and educational materials.
            </Text>
          </Box>

          <Box
            p={{ base: 4, md: 6 }}
            borderRadius="lg"
            bg={colorMode === 'light' ? 'gray.50' : 'gray.800'}
            textAlign="center"
          >
            <Box
              as={FaUsers}
              w={{ base: 8, md: 10 }}
              h={{ base: 8, md: 10 }}
              color={colorMode === 'light' ? 'blue.500' : 'blue.400'}
              mx="auto"
              mb={4}
            />
            <Heading as="h3" size={{ base: 'sm', md: 'md' }} mb={2}>
              Expert Community
            </Heading>
            <Text color={colorMode === 'light' ? 'gray.600' : 'gray.300'}>
              Connect with certified professionals and like-minded individuals.
            </Text>
          </Box>

          <Box
            p={{ base: 4, md: 6 }}
            borderRadius="lg"
            bg={colorMode === 'light' ? 'gray.50' : 'gray.800'}
            textAlign="center"
          >
            <Box
              as={FaChartLine}
              w={{ base: 8, md: 10 }}
              h={{ base: 8, md: 10 }}
              color={colorMode === 'light' ? 'blue.500' : 'blue.400'}
              mx="auto"
              mb={4}
            />
            <Heading as="h3" size={{ base: 'sm', md: 'md' }} mb={2}>
              Progress Tracking
            </Heading>
            <Text color={colorMode === 'light' ? 'gray.600' : 'gray.300'}>
              Monitor your progress and achieve your fitness goals effectively.
            </Text>
          </Box>
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default Features; 