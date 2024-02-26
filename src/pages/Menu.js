import { Box, Heading } from '@chakra-ui/react';
import UnderConstruction from '../components/UnderConstruction';

const Menu = () => {
  return (
    <Box as="main" bg="#495E57" p={4}>
      <Heading color="#EDEFEE">Menu</Heading>
      <UnderConstruction />
    </Box>
  );
}

export default Menu;