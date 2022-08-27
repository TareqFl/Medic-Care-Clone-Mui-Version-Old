import { Box, Paper, Stack, Typography } from '@mui/material'
import React from 'react'

const IphoneBubble = ({ icon, vertical, cardTitle }) => {

    const description = (description, fontSize, align) => (<>
        <Typography paragraph color="gray" sx={{ fontWeight: "100", fontSize: fontSize, textAlign: align }}>
            {description}
        </Typography>
    </>)

    return (
        <Box className="SECOND ROW" sx={{ display: { xs: "block", sm: "none" } }}>
            <Stack display="flex" direction="row" justifyContent="space-evenly" spacing={2}>

                {/* middle Icon*/}
                <Box flex={1}>
                    <Stack display="flex" direction="column" justifyContent="center" alignItems="center" sx={{ width: "100%", height: "100%", paddingTop: "45px" }}>

                        <Paper sx={{ borderRadius: "50%", alignItems: "center", padding: "16px" }} elevation={4}>
                            {icon}
                        </Paper>

                        {vertical}
                    </Stack>
                </Box>


                {/* Right Side Card */}
                <Box flex={2} >
                    {description("2021-07-31 Saturday", null, "start")}
                    <Paper elevation={8} sx={{ borderRadius: "4px" }}>
                        <Stack display="flex" direction="column" spacing={1}>
                            <Box bgcolor={"black"} sx={{ borderRadius: "4px 4px 0 0", padding: "8px" }}>
                                <div className='speech-bubble2'>
                                    <Typography variant='h5' sx={{ color: "white", fontWeight: "bold", textAlign: "start" }}>{cardTitle}</Typography>
                                </div>
                            </Box>

                            <Box padding={1}>
                                {description("Donec facilisis urna dui, a dignissim mauris pretium a. Quisque quis libero fermentum, tempus felis eu, consequat nibh.", "1.3rem")}
                            </Box>

                        </Stack>
                    </Paper>
                </Box>
            </Stack>
        </Box>
    )
}

export default IphoneBubble