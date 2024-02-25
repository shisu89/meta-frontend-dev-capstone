import { Flex, Box, Text, Link, VStack } from '@chakra-ui/react';
import { NavigationItems } from './Nav';

const Footer = () => {
    return (
        <Flex bg="#EDEFEE" color="#333333" as='footer' justifyContent={"center"} flexDirection={{ base: "column", md: "row" }} alignItems={{ base: "center", md: "start" }}>
            <Box p={4} transform={{base: "translateY(+10%)", md: "translateY(+50%)"}}>
                <img src="./assets/images/Logo.svg" alt="Logo" />
            </Box>
            <VStack p={4} spacing={0} align={{ base: "center", md: "start" }}>
                <Text fontWeight={"bold"}>Navigation</Text>
                <NavigationItems></NavigationItems>
            </VStack>
            <VStack p={4} spacing={0} align={{ base: "center", md: "start" }}>
                <Text fontWeight={"bold"}>Contact</Text>
                <Text>123 Food Street, Chicago</Text>
                <Text>+1 123 456 789</Text>
                <Text>chicago@littlelemon.com</Text>
            </VStack>
            <VStack p={4} spacing={0} align={{ base: "center", md: "start" }}>
                <Text fontWeight={"bold"}>Social Media</Text>
                <Link>Facebook</Link>
                <Link>Twitter</Link>
            </VStack>
        </Flex>
    );
}

export default Footer;