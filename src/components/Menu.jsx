import { Link } from 'react-router-dom';
import { Box, Flex, Heading, Spacer } from '@chakra-ui/react';


const Menu = () => {
  return (
    <Box bg="#C4F1F9" p={4} color="#2B6CB0">
      <Flex align="center">
        <Heading as="h2" size="lg" mr={8}>
          TodoTask
        </Heading>
        <Box>
          <Link to="/" style={{ textDecoration: 'none', margin: '0 8px' }}>
            Home
          </Link>
          <Link to="/tareas" style={{ textDecoration: 'none', margin: '0 8px' }}>
            Tasks
          </Link>
          <Link to="/sobre-nosotros" style={{ textDecoration: 'none', margin: '0 8px' }}>
            About us
          </Link>
        </Box>
        <Spacer />
      </Flex>
    </Box>
  );
};

export default Menu;