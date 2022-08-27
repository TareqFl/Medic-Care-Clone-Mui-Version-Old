import { Avatar, Paper, Stack, Typography } from '@mui/material'
import React from 'react'

const CustomCard = ({ star1, star2, star3, star4, star5, src, alt, name, desc2 }) => {
    return (
        <>
            <Paper sx={{ backgroundColor: "black", margin: "auto", padding: "32px", display: { xs: "none", sm: "block" } }}>
                <Stack display="flex" direction="column" justifyContent="start" spacing={2}>

                    <Stack display="flex" direction="row" justifyContent="start">
                        {star1}
                        {star2}
                        {star3}
                        {star4}
                        {star5}
                    </Stack>

                    <Typography variant="h5" fontWeight="bold" color="primary" textAlign="start">Great Services</Typography>
                    <Typography paragraph textAlign="start" color="white">
                        Donec facilisis urna dui, a dignissim mauris pretium a. Quisque quis libero fermentum, tempus felis eu, consequat nibh.
                    </Typography>

                    <Stack display="flex" direction="row" justifyContent="start" alignItems="center" spacing={1}>
                        <Avatar src={src} alt={alt} sx={{ width: "64px", height: "64px" }} />
                        <Typography variant="h6" fontWeight="bold" color="primary" >{name}</Typography>
                        <Typography fontWeight="100" color="gray">{desc2}</Typography>
                    </Stack>
                </Stack>
            </Paper>
        </>
    )
}

export default CustomCard