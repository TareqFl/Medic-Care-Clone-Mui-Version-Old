import React from 'react';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CssBaseline } from '@mui/material';

import Dashbrd from './pages/Dashbrd';
import Home from './pages/Home/Home';

const App = () => {
    return (
        <BrowserRouter>
            <CssBaseline />
            <Routes>
                <Route index path='/' element={<Home />} />
                <Route path='/dashboard' element={<Dashbrd />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App