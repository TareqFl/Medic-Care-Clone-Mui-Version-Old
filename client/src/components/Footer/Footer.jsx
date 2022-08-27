import React from 'react'
import { Box, Container, Divider, Link, Stack, Typography } from '@mui/material';
import { Facebook, Instagram, Twitter, YouTube } from "@mui/icons-material"

import HdFooter from './HdFooter';
import IphoneFooter from './IphoneFooter';
import IpadMini from './IpadMini';

const Footer = () => {
    return (<>
        <HdFooter />
        <IpadMini />
        <IphoneFooter />
    </>

    )
}

export default Footer