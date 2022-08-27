import React from 'react'

import { Box, Button, Container, Divider, Grid, Paper, Stack, Typography } from '@mui/material';
import { Language, MenuBookOutlined, PermIdentity, PhoneIphone, Task, Verified } from '@mui/icons-material'


import Navbar from '../../components/NavBar/NavBar';
import HCarousel from '../../components/HCarousel';

import IphoneBubble from '../../components/chatBubbles/IphoneBubble';
import ChatBubbleLeft from '../../components/chatBubbles/ChatBubbleLeft';
import ChatBubbleRight from '../../components/chatBubbles/ChatBubbleRight';
import "./Home.scss"


import img4 from '../../Assets/img4.jpg';
import img5 from '../../Assets/img5.jpg';
import BookingForm from '../../components/BookingForm';
import Footer from '../../components/Footer/Footer';
import CustomCarousel from '../../components/CustomCarousel/CustomCarousel';
import IpadPlusCustomCarousel from '../../components/CustomCarousel/IpadPlusCarouse;';
import AnimatedWords from '../../components/AnimatedWords';



const Home = () => {


    const title = (title, color, position, height) => (<>
        <Typography variant={height} sx={{ fontWeight: "700", color: color, textAlign: position, display: { xs: "none", sm: "block" } }}>{title}</Typography>
        <Typography variant={"h4"} sx={{ fontWeight: "700", color: color, textAlign: position, display: { xs: "block", sm: "none" } }}>{title}</Typography>
    </>)

    const description = (description, fontSize, align) => (<>
        <Typography paragraph color="gray" sx={{ fontWeight: "100", fontSize: fontSize, textAlign: align }}>
            {description}
        </Typography>
    </>)


    return (
        <Box>
            <Navbar />
            <Container maxWidth="lg">

                {/* carousel for ipad mini and greater size */}
                <Box sx={{ display: { xs: "none", sm: "block" } }} marginBottom={4}>
                    <div className="Carousel" id="home">
                        <HCarousel />
                        <Box className="onCarousel" sx={{ display: { xs: "none", md: "block" } }}>
                            <Stack display="flex" direction="column" spacing={1}>

                                <Stack display="flex" direction="row" spacing={1}>
                                    <Typography variant='h3' sx={{ fontWeight: "700" }}>Better</Typography>
                                    <Typography variant='h3' sx={{ fontWeight: "700" }} color="primary">{<AnimatedWords />}</Typography>

                                </Stack>

                                <Typography paragraph color="gray">
                                    Medic Care is a Bootstrap 5 Template provided by TemplateMo website. Credits go to FreePik and RawPixel for images used in this template.
                                </Typography>

                                <Stack display="flex" direction="row" alignItems="center" spacing={2}>
                                    <Button variant="outlined">Learn More</Button>
                                    <Stack display="flex" direction="row" alignItems="center" justifyContent="center">
                                        <PhoneIphone color="disabled" />
                                        <p style={{ fontWeight: "bold", color: "gray" }}>010-020-0340</p>
                                    </Stack>
                                </Stack>
                            </Stack>
                        </Box>
                    </div>
                </Box>


                {/* Carousel for Iphone12 */}
                <Box sx={{ width: "100%", marginTop: "30%", display: { xs: "block", sm: "none" } }}>
                    <HCarousel />
                </Box>

                <Box sx={{ width: "100", display: { xs: "block", md: "none" } }} marginBottom={8} padding={2}>
                    <Stack display="flex" direction="column" spacing={1}>

                        <Stack display="flex" direction="row" spacing={1}>
                            <Typography variant='h3' sx={{ fontWeight: "700" }}>Better</Typography>
                            <Typography variant='h3' sx={{ fontWeight: "700" }} color="primary">{<AnimatedWords />}</Typography>
                        </Stack>

                        <Typography paragraph color="gray">
                            Medic Care is a Bootstrap 5 Template provided by TemplateMo website. Credits go to FreePik and RawPixel for images used in this template.
                        </Typography>

                        <Stack display="flex" direction="row" alignItems="center" spacing={2}>
                            <Button variant="outlined">Learn More</Button>
                            <Stack display="flex" direction="row" alignItems="center" justifyContent="center">
                                <PhoneIphone color="disabled" />
                                <p style={{ fontWeight: "bold", color: "gray" }}>010-020-0340</p>
                            </Stack>
                        </Stack>

                    </Stack>
                </Box>

                <div id="about">

                    <Grid container justifyContent="center" marginBottom={8}>

                        <Grid item xs={12} sm={6} >
                            <Stack display="flex" direction="column">

                                {title("Meet Dr. Carson", null, null, "h3")}

                                {description("Protect yourself and others by wearing masks and washing hands frequently. Outdoor is safer than indoor for gatherings or holding events. People who get sick with Coronavirus disease (COVID-19) will experience mild to moderate symptoms and recover without special treatments.")}

                                {description("You can feel free to use this CSS template for your medical profession or health care related websites. You can support us a little via PayPal if this template is good and useful for your work.")}

                            </Stack>
                        </Grid>

                        <Grid item xs={12} sm={6} padding={2}>
                            {/* display for Iphone12 */}
                            <Paper sx={{ margin: "auto", height: "100%", borderRadius: "50%", display: { xs: "block", sm: "none" }, padding: "64px 32px" }} elevation={24} >
                                <Stack display="flex" direction="column" justifyContent="center">

                                    <Stack display="flex" direction="row" justifyContent="center" alignItems="center">
                                        <Typography style={{ color: "#247cff", fontSize: "8rem", fontWeight: "bold" }}>12</Typography>
                                        <Typography style={{ color: "gray", fontWeight: "bold", textAlign: "center" }}>Years Of Experience</Typography>
                                    </Stack>
                                </Stack>
                            </Paper>
                            {/* display for Ipad mini */}
                            <Paper sx={{ margin: "auto", height: "100%", width: "90%", borderRadius: "100%", padding: "64px", display: { xs: "none", sm: "block", md: "none" } }} elevation={24}>

                                <Stack display="flex" direction="column" justifyContent="center" sx={{ height: "100%" }}>

                                    <Stack display="flex" direction="row" justifyContent="center" alignItems="center">
                                        <Typography style={{ color: "#247cff", fontSize: "8rem", fontWeight: "bold" }}>12</Typography>
                                        <Typography style={{ color: "gray", fontWeight: "bold", textAlign: "center" }}>Years Of Experience</Typography>
                                    </Stack>
                                </Stack>
                            </Paper>

                            <Paper sx={{ margin: "auto", height: "100%", width: "65%", borderRadius: "100%", padding: "64px", display: { xs: "none", md: "block" } }} elevation={24}>

                                <Stack display="flex" direction="column" justifyContent="center" sx={{ height: "100%" }}>

                                    <Stack display="flex" direction="row" justifyContent="center" alignItems="center">
                                        <Typography style={{ color: "#247cff", fontSize: "8rem", fontWeight: "bold" }}>12</Typography>
                                        <Typography style={{ color: "gray", fontWeight: "bold", fontSize: "1.5rem", textAlign: "center", }}>Years Of Experience</Typography>
                                    </Stack>
                                </Stack>
                            </Paper>
                        </Grid>
                    </Grid>
                </div>

                <Stack display="flex" direction="row" justifyContent="center" spacing={2} marginBottom={8}>
                    <Box flex={1}>
                        <img src={img4} alt={img4} style={{ maxWidth: "100%" }} />
                    </Box>

                    <Box flex={1}>
                        <img src={img5} alt={img5} style={{ maxWidth: "100%" }} />
                    </Box>
                </Stack>



                {/* TIMELINE for Ipad mini and Greater*/}
                <Stack display="flex" direction="column" spacing={4} marginTop={8} marginBottom={8}>

                    <div id="timeline">


                        {title("Our Timeline", null, "center", "h3")}


                    </div>


                    {/* first Row  */}
                    <ChatBubbleLeft icon={<Verified fontSize='large' color="primary" />} vertical={<Divider orientation='vertical' />} cardTitle={"Get the vaccine"} />

                    {/* second Row  */}
                    <ChatBubbleRight icon={<MenuBookOutlined fontSize='large' color="primary" />} vertical={<Divider orientation='vertical' />} cardTitle={"Consulting your health"} />

                    {/* third Row  */}
                    <ChatBubbleLeft icon={<Task fontSize='large' color='primary' />} vertical={<Divider orientation='vertical' />} cardTitle={"Certified Nurses"} />

                    {/* fourth Row */}
                    <ChatBubbleRight icon={<Language fontSize='large' color='primary' />} vertical={<Divider orientation='vertical' />} cardTitle={"Covid-19 Hospitals"} />

                    {/* fifth Row  */}
                    <ChatBubbleLeft icon={<PermIdentity fontSize='large' color='primary' />} vertical={<Divider orientation='vertical' sx={{ backgroundColor: "white" }} />} cardTitle={"Freelance Nursing"} />
                    {/* End of Timeline  */}



                    {/* TIMELINE for Iphone12*/}

                    {/* first Row  */}
                    <IphoneBubble icon={<Verified fontSize='large' color="primary" />} vertical={<Divider orientation='vertical' />} cardTitle={"Get the vaccine"} />

                    {/* second Row  */}
                    <IphoneBubble icon={<MenuBookOutlined fontSize='large' color="primary" />} vertical={<Divider orientation='vertical' />} cardTitle={"Consulting your health"} />

                    {/* third Row  */}
                    <IphoneBubble icon={<Task fontSize='large' color='primary' />} vertical={<Divider orientation='vertical' />} cardTitle={"Certified Nurses"} />

                    {/* fourth Row */}
                    <IphoneBubble icon={<Language fontSize='large' color='primary' />} vertical={<Divider orientation='vertical' />} cardTitle={"Covid-19 Hospitals"} />

                    {/* fifth Row  */}
                    <IphoneBubble icon={<PermIdentity fontSize='large' color='primary' />} vertical={<Divider orientation='vertical' sx={{ backgroundColor: "white" }} />} cardTitle={"Freelance Nursing"} />

                </Stack>

                <div id="testimonials">
                    <Box sx={{ width: "100%" }}>
                        {title("Our Patients", null, "center", "h3")}
                    </Box>
                </div>


                {/* Testimonials  */}
                <CustomCarousel />
                <IpadPlusCustomCarousel />

                <Box marginTop={8}>
                    {title("Book an appointment", null, "center", "h3")}
                </Box>

                <BookingForm />

            </Container>

            <div id="contact">
                <Footer />
            </div>

        </Box>
    )
}

export default Home

