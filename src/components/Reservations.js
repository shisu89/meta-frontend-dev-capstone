import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Box, Flex, Heading, Button, FormControl, FormLabel, Input, Select } from '@chakra-ui/react';


const BookingForm = () => {
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

    const handleSubmit = (values) => {
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
                            <Heading fontWeight={"regular"}>Looking to join us? Book a table!</Heading>
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
                                {Array.from({ length: 11 }, (_, index) => {
                                    const hour = 17 + Math.floor(index / 2);
                                    const minute = index % 2 === 0 ? '00' : '30';
                                    const time = `${hour}:${minute}`;
                                    return <option key={time} value={time}>{time}</option>;
                                })}

                            </Field>
                            <ErrorMessage name="time" component="div" style={{ color: 'red' }} />
                        </FormControl>
                        <FormControl m={2} isRequired={true}>
                            <FormLabel>Number of guests</FormLabel>
                            <Field as={Input} type="number" min="1" max="10" name="guests" bg="#EDEFEE" color="#333333" placeholder={'How many persons?'}></Field>
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
                        {/* <Box>
                            <label htmlFor="time">Time</label>
                            <Field as="select" id="time" name="time" >
                                <option value={formData.time} onChange={handleChange}>Select a time</option>
                                {Array.from({ length: 11 }, (_, index) => {
                                    const hour = 17 + Math.floor(index / 2);
                                    const minute = index % 2 === 0 ? '00' : '30';
                                    const time = `${hour}:${minute}`;
                                    return <option key={time} value={time}>{time}</option>;
                                })}
                            </Field>

                            <label htmlFor="occasion">Occasion</label>
                            <Field as="select" id="occasion" name="occasion" value={formData.occasion} onChange={handleChange}>
                                <option value="">Select an occasion</option>
                                <option value="birthday">Birthday</option>
                                <option value="anniversary">Anniversary</option>
                            </Field>*/}
                        <Button m={4} type="submit" bg='#F4CE14' isLoading={formik.isSubmitting}>Make your Reservation</Button>
                    </Form>
                </Box >
            )}
        </Formik >
    );
};

const Reservations = () => {
    return (
        <>
            <Box as="main" bg="#495E57" color="#EDEFEE">
                <Flex justifyContent={"center"} as="section" >
                    <BookingForm></BookingForm>
                </Flex>
            </Box>
        </>
    );
}

export default Reservations;