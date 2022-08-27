import React from 'react'

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import img1 from '../Assets/img1.jpg';
import img2 from '../Assets/img2.jpg';
import img3 from '../Assets/img3.jpg'
import { Box } from '@mui/material';





const HCarousel = () => {
    return (
        <Box sx={{ width: "100%" }}>
            <Carousel
                autoPlay={true}
                infiniteLoop={true}
                interval={3000}
                showIndicators={false}
                showStatus={false}
                showThumbs={false}
                showArrows={false}
                swipeable={false}
            >
                <div>
                    <img src={img1} alt={img1} />
                </div>
                <div>
                    <img src={img2} alt={img2} />
                </div>
                <div>
                    <img src={img3} alt={img3} />
                </div>
            </Carousel>
        </Box>
    )
}

export default HCarousel