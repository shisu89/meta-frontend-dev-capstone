import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Box, Flex, Heading, Button, FormControl, FormLabel, Input, Select } from '@chakra-ui/react';
import { bookingSlots } from './constants'


const BookingForm = ({ onFormSubmit }) => {

    const initialValues = {
        date: '',
        time: '',
        guests: '',
        occasion: '',
    };

    const validationSchema = Yup.object({
        date: Yup.date().required('Date is required'),
        time: Yup.string().required('Time is required'),
        guests: Yup.number().required('Number of guests is required'),
        occasion: Yup.string().required('Occasion is required'),
    });

    const handleSubmit = (values, { setSubmitting }) => {
        onFormSubmit(values);
        setSubmitting(false);
        console.log(values);
    };

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
        >
            {formik => (
                <Box justifyContent={"center"} textAlign={"center"} m={4}>
                    <Form>
                        <Box>
                            <Heading fontWeight={"regular"}>Craving Delicious Food? Book Now!</Heading>
                        </Box>

                        <FormControl m={2} isRequired={true}>
                            <FormLabel>Date</FormLabel>
                            <Field as={Input} type="date" name="date" bg="#EDEFEE" color="#333333"></Field>
                            <ErrorMessage name="date" component="div" style={{ color: 'red' }} />
                        </FormControl>
                        <FormControl m={2} isRequired={true}>
                            <FormLabel>Time</FormLabel>
                            <Field as={Select} type="time" name="time" bg="#EDEFEE" color="#333333">
                                <option value="">Select a time</option>
                                {bookingSlots.map((slot, index) => {
                                    return <option key={index} value={slot}>{slot}</option>;
                                })}
                            </Field>
                            <ErrorMessage name="time" component="div" style={{ color: 'red' }} />
                        </FormControl>
                        <FormControl m={2} isRequired={true}>
                            <FormLabel>Number of guests</FormLabel>
                            {/* <Field as={Input} type="number" min="1" max="10" name="guests" bg="#EDEFEE" color="#333333" placeholder={'How many persons?'}></Field> */}
                            <Field as={Select} type="number" name="guests" bg="#EDEFEE" color="#333333">
                                <option value="">Select number of guests</option>
                                {Array.from({ length: 10 }, (_, index) => {
                                    return <option key={index + 1} value={index + 1}>{index + 1}</option>;
                                })}
                            </Field>
                            <ErrorMessage name="guests" component="div" style={{ color: 'red' }} />
                        </FormControl>
                        <FormControl m={2} isRequired={false}>
                            <FormLabel>Occasion</FormLabel>
                            <Field as={Select} type="text" name="occasion" bg="#EDEFEE" color="#333333">
                                <option value="">Select an occasion</option>
                                <option value="birthday">Birthday</option>
                                <option value="anniversary">Anniversary</option>
                            </Field>
                        </FormControl>
                        <Button m={4} type="submit" bg='#F4CE14' isLoading={formik.isSubmitting}>Make your Reservation</Button>
                    </Form>
                </Box >
            )}
        </Formik >
    );
};

const Reservations = ({ onBookingSubmit }) => {
    return (
        <>
            <Box as="main" bg="#495E57" color="#EDEFEE">
                <Flex justifyContent={"center"} as="section" >
                    <BookingForm onFormSubmit={onBookingSubmit}></BookingForm>
                </Flex>
            </Box>
        </>
    );
}
export { BookingForm} ;
export default Reservations;