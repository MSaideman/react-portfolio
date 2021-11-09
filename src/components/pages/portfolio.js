
import React from 'react';
import Project from './project'
import Box from '@mui/material/Box';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Portfolio() {
    return (
        <Box sx={{bgcolor: 'white', color: '#2b2d42', paddingBottom:'100px', paddingLeft:'10px', fontFamily:"geneva"}}>
            <h2 className="text-center border-bottom pb-3">Portfolio</h2>
            <Project />
        </Box>

    );
}