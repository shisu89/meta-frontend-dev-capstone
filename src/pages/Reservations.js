import React from 'react';
import { Box, Flex } from '@chakra-ui/react';
import BookingForm from '../components/BookingForm';


const Reservations = ({ availableTimes, dispatch, onBookingSubmit }) => {
    return (
        <Box as="main" bg="#495E57" color="#EDEFEE">
            <Flex justifyContent={"center"} as="section" >
                <BookingForm availableTimes={availableTimes} dispatch={dispatch} onFormSubmit={onBookingSubmit}></BookingForm>
            </Flex>
        </Box>
    );
}

export default Reservations;