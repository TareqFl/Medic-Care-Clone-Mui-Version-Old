import React from 'react'
import { Facebook, Instagram, Twitter, YouTube } from '@mui/icons-material'
import { Box, Container, Divider, Link, Stack, Typography } from '@mui/material'
const IpadMini = () => {
    return (
        <Box sx={{ backgroundColor: "#f9f9f9", padding: "32px", display: { xs: "none", sm: "block", md: "none" } }}>
            <Container maxWidth="md">
                <Stack display="flex" direction="row" spacing={4}>
                    <Box flex={2}>
                        <Stack display="flex" direction="column" spacing={2}>
                            <Typography variant="h5" fontWeight={500}>Opening Hours</Typography>

                            <Typography variant='h6' fontWeight={100} color="gray">Sunday : Closed</Typography>
                            <Divider />

                            <Stack display="flex" direction="row" justifyContent="space-between">
                                <Typography variant='h6' fontWeight={100} color="gray" >Monday, Tuesday - Firday</Typography>

                                <Typography variant='h6' fontWeight={500} color="gray" >8:00 AM - 3:30 PM</Typography>
                            </Stack>


                            <Divider />

                            <Stack display="flex" direction="row" justifyContent="space-between">
                                <Typography variant='h6' fontWeight={100} color="gray">Saturday</Typography>

                                <Typography variant='h6' fontWeight={500} color="gray">10:30 AM - 5:30 PM</Typography>
                            </Stack>
                        </Stack>
                    </Box>

                    <Box flex={1}>
                        <Stack display="flex" direction="column" spacing={2}>
                            <Typography variant="h5" fontWeight={500}>Our Clinic</Typography>
                            <Typography fontWeight={100} color="gray" justifySelf="start">Hello Company</Typography>
                            <Typography fontWeight={100} color="gray" justifySelf="start">123 Digital Art Street, San Diego, CA 92123</Typography>

                        </Stack>
                    </Box>


                    <Box flex={1}>
                        <Stack display="flex" direction="column" spacing={2}>

                            <Typography variant="h5" fontWeight={500}>Socials</Typography>

                            <Stack display="flex" direction="row" spacing={2}>
                                <Link ><YouTube fontSize="medium" sx={{ color: "gray" }} /></Link>
                                <Facebook fontSize="medium" sx={{ color: "gray" }} />
                                <Instagram fontSize="medium" sx={{ color: "gray" }} />
                                <Twitter fontSize="medium" sx={{ color: "gray" }} />
                            </Stack>


                            <Typography fontWeight={100} color="gray" justifySelf="start">Design: TemplateMo</Typography>


                        </Stack>
                    </Box>
                </Stack>
            </Container>
        </Box>
    )
}

export default IpadMini