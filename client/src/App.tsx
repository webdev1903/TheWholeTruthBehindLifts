import { Box } from '@chakra-ui/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import About from './components/About';
import Footer from './components/Footer';

function App() {
  return (
    <Box minH="100vh" bg="white">
      <Navbar />
      <Hero />
      <Features />
      <About />
      <Footer />
    </Box>
  );
}

export default App; 