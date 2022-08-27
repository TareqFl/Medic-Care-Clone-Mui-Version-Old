import React from 'react'
import { Facebook, Instagram, Twitter, YouTube } from '@mui/icons-material'
import { Box, Container, Divider, Link, Stack, Typography } from '@mui/material'
const IphoneFooter = () => {
    return (
        <Box sx={{ backgroundColor: "#f9f9f9", padding: "16px", display: { xs: "block", sm: "none" } }}>
            <Container >
                <Stack display="flex" direction="row" spacing={4}>
                    <Box flex={2}>
                        <Stack display="flex" direction="column" spacing={2}>
                            <Typography fontWeight={500} fontSize="1.2rem">Opening Hours</Typography>

                            <Typography variant='h6' fontWeight={100} color="gray" fontSize="0.9rem">Sunday : Closed</Typography>
                            <Divider />

                            <Stack display="flex" direction="row" justifyContent="space-between">
                                <Typography variant='h6' fontWeight={100} color="gray" fontSize="0.9rem">Monday, Tuesday - Firday</Typography>

                                <Typography variant='h6' fontWeight={500} color="gray" fontSize="0.6rem">8:00 AM - 3:30 PM</Typography>
                            </Stack>


                            <Divider />

                            <Stack display="flex" direction="row" justifyContent="space-between" spacing={2}>
                                <Typography variant='h6' fontWeight={100} color="gray" fontSize="0.9rem">Saturday</Typography>

                                <Typography variant='h6' fontWeight={500} color="gray" fontSize="0.5rem">10:30 AM - 5:30 PM</Typography>
                            </Stack>
                        </Stack>
                    </Box>

                    <Box flex={1}>
                        <Stack display="flex" direction="column" spacing={2}>
                            <Typography fontWeight={500} fontSize="1.2rem">Our Clinic</Typography>
                            <Typography fontWeight={100} color="gray" justifySelf="start" fontSize="0.9rem">Hello Company</Typography>
                            <Typography fontWeight={100} color="gray" justifySelf="start" fontSize="0.6rem">123 Digital Art Street, San Diego, CA 92123</Typography>

                        </Stack>
                    </Box>


                    <Box flex={1}>
                        <Stack display="flex" direction="column" spacing={2}>

                            <Typography fontWeight={500} fontSize="1.2rem">Socials</Typography>

                            <Stack display="flex" direction="row" spacing={1}>
                                <Link ><YouTube fontSize="small" sx={{ color: "gray" }} /></Link>
                                <Facebook fontSize="small" sx={{ color: "gray" }} />
                                <Instagram fontSize="small" sx={{ color: "gray" }} />
                                <Twitter fontSize="small" sx={{ color: "gray" }} />
                            </Stack>


                            <Typography fontWeight={100} color="gray" justifySelf="start" fontSize="0.9rem">Design: TemplateMo</Typography>


                        </Stack>
                    </Box>
                </Stack>
            </Container>
        </Box>
    )
}

export default IphoneFooter