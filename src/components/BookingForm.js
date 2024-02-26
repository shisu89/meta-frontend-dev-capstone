import React from 'react';
import { useFormik } from 'formik';
import { useEffect } from 'react';
import * as Yup from 'yup';
import { Box, Heading, Button, FormControl, FormLabel, Input, Select } from '@chakra-ui/react';


const BookingForm = ({ availableTimes, dispatch, onFormSubmit }) => {

    const formik = useFormik({
        initialValues: {
            date: '',
            time: '',
            guests: '',
            occasion: '',
        },
        validationSchema: Yup.object({
            date: Yup.date().required('Date is required'),
            time: Yup.string().required('Time is required'),
            guests: Yup.number().required('Number of guests is required'),
            occasion: Yup.string().required('Occasion is required'),
        }),
        onSubmit: (values, { setSubmitting }) => {
            onFormSubmit(values);
            setSubmitting(false);
            // console.log(values);
        },
    });

    useEffect(() => {
        if (formik.values.date) {
            dispatch({ type: 'SET_TIMES', payload: formik.values.date });
        }
    }, [formik.values.date, dispatch])

    return (
        <form onSubmit={formik.handleSubmit}>
            <Box justifyContent={"center"} textAlign={"center"} m={4}>
                <Box>
                    <Heading fontWeight={"regular"}>Craving Delicious Food? Book Now!</Heading>
                </Box>

                <FormControl m={2} isRequired={true}>
                    <FormLabel>Date</FormLabel>
                    {/* <Field as={Input} type="date" name="date" bg="#EDEFEE" color="#333333"></Field> */}
                    <Input id="date" type="date" name="date" bg="#EDEFEE" color="#333333" value={formik.values.date} onChange={formik.handleChange}
                        onBlur={formik.handleBlur}></Input>
                    {formik.touched.date && formik.errors.date ? (
                        <div style={{ color: 'red' }}>{formik.errors.date}</div>
                    ) : null}
                </FormControl>
                <FormControl m={2} isRequired={true}>
                    <FormLabel>Time</FormLabel>
                    <Select id="time" type="time" value={formik.values.time} name="time" bg="#EDEFEE" color="#333333" onChange={formik.handleChange}
                        onBlur={formik.handleBlur}>
                        <option value="">Select a time</option>
                        {availableTimes.map( availableTimes => {
                            return <option key={availableTimes} value={availableTimes}>{availableTimes}</option>;
                        })}
                    </Select>
                    {formik.touched.time && formik.errors.time ? (
                        <div style={{ color: 'red' }}>{formik.errors.time}</div>
                    ) : null}
                </FormControl>
                <FormControl m={2} isRequired={true}>
                    <FormLabel>Number of guests</FormLabel>
                    {/* <Field as={Input} type="number" min="1" max="10" name="guests" bg="#EDEFEE" color="#333333" placeholder={'How many persons?'}></Field> */}
                    <Select id='guests' value={formik.values.guests} type="number" name="guests" bg="#EDEFEE" color="#333333" onChange={formik.handleChange}
                        onBlur={formik.handleBlur}>
                        <option value="">Select number of guests</option>
                        {Array.from({ length: 10 }, (_, index) => {
                            return <option key={index + 1} value={index + 1}>{index + 1}</option>;
                        })}
                    </Select>
                    {formik.touched.guests && formik.errors.guests ? (
                        <div style={{ color: 'red' }}>{formik.errors.guests}</div>
                    ) : null}
                </FormControl>
                <FormControl m={2} isRequired={false}>
                    <FormLabel>Occasion</FormLabel>
                    <Select id="occasion" value={formik.values.occasion} type="text" name="occasion" bg="#EDEFEE" color="#333333" onChange={formik.handleChange}
                        onBlur={formik.handleBlur}>
                        <option value="">Select an occasion</option>
                        <option value="birthday">Birthday</option>
                        <option value="anniversary">Anniversary</option>
                    </Select>
                </FormControl>
                <Button m={4} type="submit" bg='#F4CE14' isLoading={formik.isSubmitting}>Make your Reservation</Button>

            </Box >
        </form >
    );
};

export default BookingForm;