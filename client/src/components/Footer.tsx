import { Box, Container, Flex, Text, Link, VStack, HStack, Icon, useColorMode } from '@chakra-ui/react';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  const { colorMode } = useColorMode();

  return (
    <Box
      as="footer"
      py={{ base: 6, md: 10 }}
      bg={colorMode === 'light' ? 'gray.100' : 'gray.800'}
      color={colorMode === 'light' ? 'gray.700' : 'gray.300'}
    >
      <Container maxW="container.xl">
        <Flex
          direction={{ base: 'column', md: 'row' }}
          justify="space-between"
          align={{ base: 'center', md: 'flex-start' }}
          gap={{ base: 6, md: 0 }}
        >
          <VStack align={{ base: 'center', md: 'start' }} spacing={4}>
            <Text fontSize={{ base: 'lg', md: 'xl' }} fontWeight="bold">
              The Whole Truth Behind Lifts
            </Text>
            <Text fontSize={{ base: 'sm', md: 'md' }} maxW={{ base: '300px', md: '400px' }} textAlign={{ base: 'center', md: 'left' }}>
              Empowering individuals with evidence-based strength training knowledge.
            </Text>
          </VStack>

          <VStack align={{ base: 'center', md: 'start' }} spacing={4}>
            <Text fontSize={{ base: 'md', md: 'lg' }} fontWeight="bold">
              Quick Links
            </Text>
            <VStack align={{ base: 'center', md: 'start' }} spacing={2}>
              <Link href="/about" fontSize={{ base: 'sm', md: 'md' }}>
                About Us
              </Link>
              <Link href="/features" fontSize={{ base: 'sm', md: 'md' }}>
                Features
              </Link>
              <Link href="/contact" fontSize={{ base: 'sm', md: 'md' }}>
                Contact
              </Link>
            </VStack>
          </VStack>

          <VStack align={{ base: 'center', md: 'start' }} spacing={4}>
            <Text fontSize={{ base: 'md', md: 'lg' }} fontWeight="bold">
              Connect With Us
            </Text>
            <HStack spacing={4}>
              <Link href="https://facebook.com" isExternal>
                <Icon as={FaFacebook} boxSize={{ base: 5, md: 6 }} />
              </Link>
              <Link href="https://twitter.com" isExternal>
                <Icon as={FaTwitter} boxSize={{ base: 5, md: 6 }} />
              </Link>
              <Link href="https://instagram.com" isExternal>
                <Icon as={FaInstagram} boxSize={{ base: 5, md: 6 }} />
              </Link>
              <Link href="https://youtube.com" isExternal>
                <Icon as={FaYoutube} boxSize={{ base: 5, md: 6 }} />
              </Link>
            </HStack>
          </VStack>
        </Flex>

        <Box
          mt={{ base: 6, md: 10 }}
          pt={{ base: 4, md: 6 }}
          borderTop="1px"
          borderColor={colorMode === 'light' ? 'gray.200' : 'gray.700'}
        >
          <Text fontSize={{ base: 'xs', md: 'sm' }} textAlign="center">
            © {new Date().getFullYear()} The Whole Truth Behind Lifts. All rights reserved.
          </Text>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer; 