import React, { useState } from 'react'
import { AppBar, Box, Button, Link, Stack, Typography, Container } from '@mui/material'

import { HamburgerCollapse } from 'react-animated-burgers'


import { display, maxWidth } from '@mui/system'

import CustomDrawer from './CustomDrawer';
const NavBar = () => {

    const [active, setActive] = useState(false)

    const centerText = () => (<>

        <Stack display="flex" directio="column" justifyContent="center" alignItems="center" spacing={-1}>
            <Link href={window.location.pathname === "/" ? "/dashboard" : "/"} sx={{ textDecoration: "none" }}>
                <Typography variant="h6" sx={{
                    fontWeight: "bold", fontSize: "1.5rem", fontFamily: "sans-serif", textAlign: "center", color: "#247cff", padding: 0, margin: 0
                }}>
                    Medic Care
                </Typography>
            </Link>

            <Link href="/" sx={{ textDecoration: "none" }}>
                <Typography paragraph sx={{
                    color: "gray", textAlign: "center", fontWeight: "bold", fontFamily: "sans-serif", fontSize: "0.75rem", padding: 0, margin: 0
                }}>
                    Health Specialist
                </Typography>
            </Link>
        </Stack>

    </>)

    const navBarHeading = (text) => {
        const stylez = {
            color: "gray", fontSize: "1rem",
            fontFamily: "roboto", fontWeight: "500",
            textTransform: "none", ":hover": { color: "black", backgroundColor: "white" }
        }
        return (<>
            <Button variant='Text' sx={{ ...stylez }}>
                {text}
            </Button>
        </>)
    }

    return (
        <AppBar position='fixed' sx={{ backgroundColor: "white", padding: "24px 0 24px 0", flexGrow: 1 }} elevation={5}>

            <Container sx={{ maxWidth: display.xs ? "sm" : "lg" }}>
                <Stack display="flex" direction="row" justifyContent="space-between">
                    <Link href='#home' sx={{ textDecoration: "none", display: { xs: "none", md: "block" } }}>{navBarHeading("Home")}</Link>
                    <Link href='#about' sx={{ textDecoration: "none", display: { xs: "none", md: "block" } }}>{navBarHeading("About")}</Link>
                    <Link href='#timeline' sx={{ textDecoration: "none", display: { xs: "none", md: "block" } }}>{navBarHeading("Timeline")}</Link>
                    <Box sx={{ display: { xs: "none", md: "block" } }}>
                        {centerText()}
                    </Box>
                    <Link href='#testimonials' sx={{ textDecoration: "none", display: { xs: "none", md: "block" } }}>{navBarHeading("Testimonials")}</Link>
                    <Link href='#bookings' sx={{ textDecoration: "none", display: { xs: "none", md: "block" } }}>{navBarHeading("Bookings")}</Link>
                    <Link href='#contact' sx={{ textDecoration: "none", display: { xs: "none", md: "block" } }}>{navBarHeading("Contact")}</Link>

                    <Box sx={{ display: { xs: "block", md: "none" } }}>
                    </Box>
                    <Box sx={{ display: { xs: "block", md: "none" } }}>
                        {centerText()}
                    </Box>
                    <Box sx={{ display: { xs: "block", md: "none" } }}>
                        <CustomDrawer />
                    </Box>
                </Stack>
            </Container>

        </AppBar>
    )
}

export default NavBar