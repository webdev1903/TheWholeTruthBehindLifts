import { Box, Flex, Button, Container, useColorMode, Link as ChakraLink } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box as="nav" py={4} bg={colorMode === 'light' ? 'white' : 'gray.800'} boxShadow="sm">
      <Container maxW="container.xl">
        <Flex justify="space-between" align="center">
          <Box fontSize="2xl" fontWeight="bold" color={colorMode === 'light' ? 'blue.600' : 'blue.400'}>
            The Whole Truth Behind Lifts
          </Box>
          
          <Flex gap={6} align="center">
            <ChakraLink as={Link} to="/about" color={colorMode === 'light' ? 'gray.700' : 'gray.200'}>
              About Us
            </ChakraLink>
            <ChakraLink as={Link} to="/courses" color={colorMode === 'light' ? 'gray.700' : 'gray.200'}>
              Courses
            </ChakraLink>
            <ChakraLink as={Link} to="/resources" color={colorMode === 'light' ? 'gray.700' : 'gray.200'}>
              Resources
            </ChakraLink>
            <ChakraLink as={Link} to="/programs" color={colorMode === 'light' ? 'gray.700' : 'gray.200'}>
              Programs
            </ChakraLink>
            <Button colorScheme="blue" variant="solid">
              Log In
            </Button>
            <Button onClick={toggleColorMode} variant="ghost">
              {colorMode === 'light' ? '🌙' : '☀️'}
            </Button>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};

export default Navbar; 