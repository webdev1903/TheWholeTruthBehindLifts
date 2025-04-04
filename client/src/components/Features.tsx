import { Box, Container, Grid, Heading, Text, Icon, useColorMode } from '@chakra-ui/react';
import { FaGraduationCap, FaBook, FaUsers, FaChartLine } from 'react-icons/fa';

const features = [
  {
    icon: FaGraduationCap,
    title: 'Expert-Led Courses',
    description: 'Learn from industry professionals with years of experience in strength training and movement science.'
  },
  {
    icon: FaBook,
    title: 'Comprehensive Resources',
    description: 'Access a wealth of knowledge through our extensive library of articles, videos, and research papers.'
  },
  {
    icon: FaUsers,
    title: 'Community Support',
    description: 'Join a community of like-minded individuals passionate about strength training and movement.'
  },
  {
    icon: FaChartLine,
    title: 'Progressive Programs',
    description: 'Follow scientifically-backed training programs designed to help you achieve your fitness goals.'
  }
];

const Features = () => {
  const { colorMode } = useColorMode();

  return (
    <Box py={20} bg={colorMode === 'light' ? 'white' : 'gray.800'}>
      <Container maxW="container.xl">
        <Heading textAlign="center" mb={16} color={colorMode === 'light' ? 'blue.600' : 'blue.400'}>
          What We Offer
        </Heading>
        <Grid templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(4, 1fr)' }} gap={8}>
          {features.map((feature, index) => (
            <Box
              key={index}
              p={6}
              borderRadius="lg"
              boxShadow="md"
              bg={colorMode === 'light' ? 'white' : 'gray.700'}
              _hover={{ transform: 'translateY(-5px)', transition: 'all 0.3s' }}
            >
              <Icon as={feature.icon} w={10} h={10} color="blue.500" mb={4} />
              <Heading as="h3" size="md" mb={2} color={colorMode === 'light' ? 'gray.700' : 'gray.200'}>
                {feature.title}
              </Heading>
              <Text color={colorMode === 'light' ? 'gray.600' : 'gray.300'}>{feature.description}</Text>
            </Box>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Features; 