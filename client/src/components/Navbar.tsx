import { Box, Flex, Button, useColorMode, IconButton, useDisclosure, VStack, Text } from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box
      as="nav"
      position="fixed"
      w="100%"
      zIndex={1000}
      bg={colorMode === 'light' ? 'white' : 'gray.800'}
      boxShadow="sm"
    >
      <Flex
        maxW="container.xl"
        mx="auto"
        px={{ base: 4, md: 6 }}
        py={4}
        justify="space-between"
        align="center"
      >
        <Link to="/">
          <Text
            fontSize={{ base: 'xl', md: '2xl' }}
            fontWeight="bold"
            color={colorMode === 'light' ? 'blue.600' : 'blue.400'}
          >
            The Whole Truth Behind Lifts
          </Text>
        </Link>

        {/* Desktop Navigation */}
        <Flex
          display={{ base: 'none', md: 'flex' }}
          gap={6}
          align="center"
        >
          <Link to="/about">
            <Button variant="ghost">About</Button>
          </Link>
          <Link to="/features">
            <Button variant="ghost">Features</Button>
          </Link>
          <Link to="/contact">
            <Button variant="ghost">Contact</Button>
          </Link>
          <Button onClick={toggleColorMode}>
            {colorMode === 'light' ? 'Dark Mode' : 'Light Mode'}
          </Button>
        </Flex>

        {/* Mobile Navigation Button */}
        <IconButton
          display={{ base: 'flex', md: 'none' }}
          onClick={isOpen ? onClose : onOpen}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          variant="ghost"
          aria-label="Toggle Navigation"
        />
      </Flex>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <Box
          display={{ base: 'block', md: 'none' }}
          bg={colorMode === 'light' ? 'white' : 'gray.800'}
          px={4}
          py={2}
        >
          <VStack align="stretch" spacing={4}>
            <Link to="/about">
              <Button variant="ghost" w="full" justifyContent="flex-start">
                About
              </Button>
            </Link>
            <Link to="/features">
              <Button variant="ghost" w="full" justifyContent="flex-start">
                Features
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="ghost" w="full" justifyContent="flex-start">
                Contact
              </Button>
            </Link>
            <Button onClick={toggleColorMode} w="full" justifyContent="flex-start">
              {colorMode === 'light' ? 'Dark Mode' : 'Light Mode'}
            </Button>
          </VStack>
        </Box>
      )}
    </Box>
  );
};

export default Navbar; 