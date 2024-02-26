import { Heading, Box } from '@chakra-ui/react';
import UnderConstruction from '../components/UnderConstruction';

const About = () => {
    return (
        <Box as="main" bg="#495E57" p={4}>
            <Heading color="#EDEFEE">About</Heading>
            <UnderConstruction />
        </Box>
    );
}
export default About;