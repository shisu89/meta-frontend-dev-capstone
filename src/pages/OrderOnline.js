import { Box, Heading } from '@chakra-ui/react';
import UnderConstruction from '../components/UnderConstruction';

const OrderOnline = () => {
  return (
    <Box as="main" bg="#495E57" p={4}>
      <Heading color="#EDEFEE">Order Online</Heading>
      <UnderConstruction />
    </Box>
  );
}
export default OrderOnline;