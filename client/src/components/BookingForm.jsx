import { Box, Button, Container, Stack, TextareaAutosize, TextField } from '@mui/material'
import React from 'react'


const BookingForm = () => {
    return (
        <div id="bookings">
            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: "auto" },

                }}
                noValidate
                autoComplete="off"
                marginBottom={8}
            >

                <Container maxWidth="lg">
                    <Stack display="flex" direction="column" spacing={4}>

                        <Stack display="flex" direction="row" spacing={4} >
                            <Box flex={1}>
                                <TextField id="standard-basic" label="Full Name" variant="standard" fullWidth required />
                            </Box>
                            <Box flex={1}>
                                <TextField id="standard-basic" label="Email Address" variant="standard" fullWidth required type="email" />
                            </Box>
                        </Stack>


                        <Stack display="flex" direction="row" spacing={4}>
                            <Box flex={1}>
                                <TextField id="standard-basic" label="Phone" variant="standard" fullWidth required />
                            </Box>
                            <Box flex={1}>
                                <TextField id="standard-basic" label="mm/dd/yy" variant="standard" fullWidth required />
                            </Box>
                        </Stack>

                        <Box>
                            <TextareaAutosize
                                aria-label="empty textarea"
                                placeholder="Additonal Message"
                                style={{ width: "100%", minHeight: "10%" }}
                            />
                        </Box>


                        <Box sx={{ padding: "32px" }}>
                            <Stack display="flex" direction="row" justifyContent="center">
                                <Button variant="contained" sx={{ backgroundColor: "black" }} size="large">Book Now</Button>
                            </Stack>
                        </Box>
                    </Stack>


                </Container>

            </Box>
        </div>
    )
}

export default BookingForm