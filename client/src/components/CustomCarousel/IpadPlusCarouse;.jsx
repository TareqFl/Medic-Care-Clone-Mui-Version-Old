import React, { useState } from 'react'

import Slider from "react-slick";
import "./ipadPlus.scss"

import IphoneTestimonial from '../Testimonials/IphoneTestimonial'
import CustomCard from '../Testimonials/CustomCard'

import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

import { Star, StarHalf, StarOutline } from '@mui/icons-material'

import m1 from '../../Assets/m1.jpeg'
import w1 from '../../Assets/w1.jpeg'
import w2 from '../../Assets/w2.jpeg'
import w3 from '../../Assets/w3.jpeg'
import { Box } from '@mui/material';




const ipadMini = [
    <CustomCard star1={
        <Star sx={{ color: "white" }} fontSize="sm" />}
        star2={<Star sx={{ color: "white" }} fontSize="sm" />}
        star3={<Star sx={{ color: "white" }} fontSize="sm" />}
        star4={<StarHalf sx={{ color: "white" }} fontSize="sm" />}
        star5={<StarOutline sx={{ color: "white" }} fontSize="sm" />}
        src={w3} alt={w3} name={"Laura Zone"} desc2={"New Patient"} />,

    <CustomCard star1={
        < Star sx={{ color: "white" }} fontSize="sm" />}
        star2={< Star sx={{ color: "white" }} fontSize="sm" />}
        star3={< Star sx={{ color: "white" }} fontSize="sm" />}
        star4={< StarHalf sx={{ color: "white" }} fontSize="sm" />}
        star5={< StarOutline sx={{ color: "white" }} fontSize="sm" />}
        src={w2} alt={w2} name={"Rosey"} desc2={"Recovered"} />,

    <CustomCard star1={
        < Star sx={{ color: "white" }} fontSize="sm" />}
        star2={< Star sx={{ color: "white" }} fontSize="sm" />}
        star3={< Star sx={{ color: "white" }} fontSize="sm" />}
        star4={< StarHalf sx={{ color: "white" }} fontSize="sm" />}
        star5={< StarOutline sx={{ color: "white" }} fontSize="sm" />}
        src={w1} alt={w1} name={"Marie"} desc2={"Patient"} />,

    <CustomCard star1={
        <Star sx={{ color: "white" }} fontSize="sm" />}
        star2={< Star sx={{ color: "white" }} fontSize="sm" />}
        star3={< Star sx={{ color: "white" }} fontSize="sm" />}
        star4={< StarHalf sx={{ color: "white" }} fontSize="sm" />}
        star5={< StarOutline sx={{ color: "white" }} fontSize="sm" />}
        src={m1} alt={m1} name={"Ben"} desc2={"Recovered"} />

];


const IpadPlusCustomCarousel = () => {


    const NextArrow = ({ onClick }) => {
        return (
            <div className="arrow next" onClick={onClick}>
                <FaArrowRight />
            </div>
        );
    };

    const PrevArrow = ({ onClick }) => {
        return (
            <div className="arrow prev" onClick={onClick}>
                <FaArrowLeft />
            </div>
        );
    };


    const [imageIndex, setImageIndex] = useState(0);

    const settings = {

        autoplay: true,
        infinite: true,
        lazyLoad: true,
        speed: 300,
        slidesToShow: 3,
        centerMode: true,
        centerPadding: 0,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        beforeChange: (current, next) => setImageIndex(next),
    }


    return (<>
        <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <div className='ipadPlus'>
                <Slider {...settings}>
                    {ipadMini.map((card, idx) => (
                        <div key={idx} className={idx === imageIndex ? "slide activeSlide" : "slide"}>
                            {card}
                        </div>
                    ))}

                </Slider>
            </div>
        </Box>

    </>)

}




export default IpadPlusCustomCarousel; 