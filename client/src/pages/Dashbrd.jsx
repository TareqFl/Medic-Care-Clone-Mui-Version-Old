import { Box, Container, Paper, Stack } from '@mui/material';
import React, { useCallback, useEffect, } from 'react';

// import { connect } from 'react-redux';

import { useDispatch, useSelector } from 'react-redux';
import { fetchAllData, postData, addAppointment } from '../actions';

import createMobilePhoneNumber from 'random-mobile-numbers';
import { uniqueNamesGenerator, names } from 'unique-names-generator';

import NavBar from '../components/NavBar/NavBar';
import DataTable from '../components/DataTable'





const Dashbrd = () => {

    const dispatch = useDispatch();
    const { dataBaseApi } = useSelector(state => state);
    const { appointments, dataBase } = dataBaseApi;




    const add = useCallback(() => {
        dispatch(fetchAllData())
        const aseme = uniqueNamesGenerator({ dictionaries: [names] })
        const age = Math.floor(Math.random() * 100)
        const phoneNumber = createMobilePhoneNumber("TR")
        const date = Date()

        let value = { name: aseme, age, phone: phoneNumber, id: (aseme + age), date };
        dispatch(addAppointment(value))
        dispatch(postData(value))
    }, [dispatch])


    const minutes_15 = 1000 * 60 * 15;


    const repeat = setTimeout(() => add(), minutes_15)

    useEffect(() => {


        return () => clearTimeout(repeat)

    }, [repeat])





    return (
        <Box>
            <NavBar />
            <Container>
                <Stack display="flex" direction="column" justifyContent="center" spacing={4} marginTop={24}>


                    <Paper elevation={4}>
                        <DataTable data={(appointments[0] ? appointments : dataBase)} />
                    </Paper>

                </Stack>
            </Container>
        </Box>
    )
}



export default (Dashbrd)




