import React from 'react';
import { Box, Heading, Text, Button } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

const BookingConfirmation = () => {
    return (
        <Box as="main" bg="#495E57" color="#EDEFEE" textAlign={"center"} p={8}>
            <Heading fontWeight={"regular"}>Booking Confirmed!</Heading>
            <Text>Your reservation is confirmed, we are looking forward to seeing you!</Text>
            <Button mt={8} as={RouterLink} to="/" bg="#F4CE14">Return to the home page</Button>
        </Box>
    );
}

export default BookingConfirmation;