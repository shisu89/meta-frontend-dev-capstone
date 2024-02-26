import { Box, Heading } from '@chakra-ui/react';
import UnderConstruction from '../components/UnderConstruction';

const Login = () => {
    return (
        <Box as="main" bg="#495E57" p={4}>
            <Heading color="#EDEFEE">Login</Heading>
            <UnderConstruction />
        </Box>
    );
}

export default Login;