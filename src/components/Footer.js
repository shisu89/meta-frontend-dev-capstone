import { Box, Text, Link, VStack, HStack } from '@chakra-ui/react';
import { ReactComponent as LogoSvg } from '../assets/images/Logo.svg';
import { NavigationItems } from './Nav';

const Footer = () => {
    return (
        <Box bg="#EDEFEE" color="#333333" as='footer'>
            <VStack>
                <HStack spacing={8}>
                    <LogoSvg></LogoSvg>
                    <VStack spacing={0} align="start">
                        <Text fontWeight={"bold"}>Navigation</Text>
                        <NavigationItems></NavigationItems>
                    </VStack>
                    <VStack spacing={0} align={"start"}>
                        <Text fontWeight={"bold"}>Contact</Text>
                        <Text>Address</Text>
                        <Text>Phone</Text>
                        <Text>Email</Text>
                    </VStack>
                    <VStack spacing={0} align={"start"}>
                        <Text fontWeight={"bold"}>Social Media</Text>
                    </VStack>
                </HStack>
                {/* <Text>&copy; 2024 Little Lemon</Text> */}
            </VStack>
        </Box>
    );
}

export default Footer;