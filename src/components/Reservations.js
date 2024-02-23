import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { VStack, Box, HStack, Flex, Heading, Button } from '@chakra-ui/react';


const BookingForm = () => {
    const [formData, setFormData] = React.useState({
        date: '',
        time: '',
        guests: '',
        occasion: '',
    });

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

    const handleChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    };

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
        >
            <Form>
                <VStack>
                    <Heading fontWeight={"regular"}>Please fill up the booking form</Heading>
                    <HStack>
                        <label htmlFor="date">Date</label>
                        <Field
                            type="date"
                            id="date"
                            name="date"
                            value={formData.date}
                            onChange={handleChange}
                        />
                        <ErrorMessage name="date" component="div" style={{ color: 'red' }} />
                    </HStack>
                    <HStack>
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
                        <ErrorMessage name="time" component="div" style={{ color: 'red' }} />
                    </HStack>

                    <HStack>
                        <label htmlFor="guests">Number of guests</label>
                        <Field type="number" id="guests" name="guests" min="1" max="10" value={formData.guests} onChange={handleChange} />
                        <ErrorMessage name="guests" component="div" style={{ color: 'red' }} />
                    </HStack>

                    <HStack>
                        <label htmlFor="occasion">Occasion</label>
                        <Field as="select" id="occasion" name="occasion" value={formData.occasion} onChange={handleChange}>
                            <option value="">Select an occasion</option>
                            <option value="birthday">Birthday</option>
                            <option value="anniversary">Anniversary</option>
                        </Field>
                        <ErrorMessage name="occasion" component="div" style={{ color: 'red' }} />
                    </HStack>
                    <Button type="submit" bg='#F4CE14'>Make your Reservation</Button>
                </VStack>
            </Form>
        </Formik>
    );
};

const Reservations = () => {
    return (
        <>
            <Box as="main" bg="#FBDABB" color="#333333">
                <Flex justifyContent={"center"} as="section" >
                    <BookingForm></BookingForm>
                </Flex>
            </Box>
        </>
    );
}

export default Reservations;