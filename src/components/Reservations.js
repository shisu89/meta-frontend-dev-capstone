import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { VStack, Box, HStack, Flex, Heading, Button } from '@chakra-ui/react';


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
        // Handle form submission
        console.log(values);
    };

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
        >
            <Form>
                <VStack>
                    <Heading>Please fill up the booking form</Heading>
                    <HStack>
                        <label htmlFor="date">Date</label>
                        <Field type="date" id="date" name="date" />
                        <ErrorMessage name="date" component="div" style={{ color: 'red' }} />
                    </HStack>


                    <HStack>
                        <label htmlFor="time">Time</label>
                        <Field as="select" id="time" name="time" >
                            <option value="">Select a time</option>
                            {Array.from({ length: 11 }, (_, index) => {
                                const hour = 17 + Math.floor(index / 2);
                                const minute = index % 2 === 0 ? '00' : '30';
                                const time = `${hour}:${minute}`;
                                return <option key={time} value={time}>{time}</option>;
                            })}
                        </Field>
                        <ErrorMessage name="time" component="div" style={{ color: 'red' }} />
                    </HStack>

                    <HStack>
                        <label htmlFor="guests">Number of guests</label>
                        <Field type="number" id="guests" name="guests" />
                        <ErrorMessage name="guests" component="div" style={{ color: 'red' }} />
                    </HStack>

                    <HStack>
                        <label htmlFor="occasion">Occasion</label>
                        <Field as="select" id="occasion" name="occasion">
                            <option value="">Select an occasion</option>
                            <option value="birthday">Birthday</option>
                            <option value="anniversary">Anniversary</option>
                        </Field>
                        <ErrorMessage name="occasion" component="div" style={{ color: 'red' }} />
                    </HStack>
                    <Button type="submit" bg='#F4CE14'>Submit</Button>
                </VStack>
            </Form>
        </Formik>
    );
};

const Reservations = () => {
    return (
        <>
            <BookingForm></BookingForm>
        </>
    );
}

export default Reservations;