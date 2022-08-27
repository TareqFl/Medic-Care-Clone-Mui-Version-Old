import { Avatar, Paper, Stack, Typography } from '@mui/material'
import React from 'react'

const IphoneTestimonial = ({ star1, star2, star3, star4, star5, src, alt, name, desc2 }) => {
    return (
        <>
            <Paper sx={{ backgroundColor: "black", padding: "18px", display: { xs: "block", sm: "none" } }}>
                <Stack display="flex" direction="column" justifyContent="start" spacing={1}>

                    <Stack display="flex" direction="row" justifyContent="start">
                        {star1}
                        {star2}
                        {star3}
                        {star4}
                        {star5}
                    </Stack>

                    <Typography fontWeight="bold" color="primary" textAlign="start" fontSize="0.8rem">Great Services</Typography>
                    <Typography textAlign="start" color="white" fontSize="0.4rem">
                        Donec facilisis urna dui, a dignissim mauris pretium a. Quisque quis libero fermentum, tempus felis eu, consequat nibh.
                    </Typography>

                    <Stack display="flex" direction="row" justifyContent="start" alignItems="center" spacing={1}>
                        <Avatar src={src} alt={alt} sx={{ width: "20px", height: "20px" }} />
                        <Typography fontSize="0.7rem" fontWeight="bold" color="primary" >{name}</Typography>
                        <Typography fontSize="0.5rem" fontWeight="100" color="gray">{desc2}</Typography>
                    </Stack>
                </Stack>
            </Paper>
        </>
    )
}

export default IphoneTestimonial