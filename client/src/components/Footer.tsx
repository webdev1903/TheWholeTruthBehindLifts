import { Box, Container, Grid, Text, Link, Flex, useColorMode } from '@chakra-ui/react';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  const { colorMode } = useColorMode();

  return (
    <Box as="footer" bg={colorMode === 'light' ? 'gray.900' : 'gray.800'} color="white" py={10}>
      <Container maxW="container.xl">
        <Grid templateColumns={{ base: '1fr', md: 'repeat(4, 1fr)' }} gap={8}>
          <Box>
            <Text fontSize="xl" fontWeight="bold" mb={4}>
              The Whole Truth Behind Lifts
            </Text>
            <Text color="gray.400">
              Empowering individuals through evidence-based strength training and movement science.
            </Text>
          </Box>
          
          <Box>
            <Text fontWeight="bold" mb={4}>Quick Links</Text>
            <Flex direction="column" gap={2}>
              <Link href="/about" color="gray.400" _hover={{ color: 'white' }}>About Us</Link>
              <Link href="/courses" color="gray.400" _hover={{ color: 'white' }}>Courses</Link>
              <Link href="/resources" color="gray.400" _hover={{ color: 'white' }}>Resources</Link>
              <Link href="/programs" color="gray.400" _hover={{ color: 'white' }}>Programs</Link>
            </Flex>
          </Box>
          
          <Box>
            <Text fontWeight="bold" mb={4}>Resources</Text>
            <Flex direction="column" gap={2}>
              <Link href="/blog" color="gray.400" _hover={{ color: 'white' }}>Blog</Link>
              <Link href="/research" color="gray.400" _hover={{ color: 'white' }}>Research</Link>
              <Link href="/faq" color="gray.400" _hover={{ color: 'white' }}>FAQ</Link>
              <Link href="/contact" color="gray.400" _hover={{ color: 'white' }}>Contact</Link>
            </Flex>
          </Box>
          
          <Box>
            <Text fontWeight="bold" mb={4}>Connect With Us</Text>
            <Flex gap={4}>
              <Link href="#" color="gray.400" _hover={{ color: 'white' }}><FaFacebook size={24} /></Link>
              <Link href="#" color="gray.400" _hover={{ color: 'white' }}><FaTwitter size={24} /></Link>
              <Link href="#" color="gray.400" _hover={{ color: 'white' }}><FaInstagram size={24} /></Link>
              <Link href="#" color="gray.400" _hover={{ color: 'white' }}><FaYoutube size={24} /></Link>
            </Flex>
          </Box>
        </Grid>
        
        <Box mt={10} pt={6} borderTop="1px" borderColor="gray.700">
          <Text textAlign="center" color="gray.400">
            © {new Date().getFullYear()} The Whole Truth Behind Lifts. All rights reserved.
          </Text>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer; 