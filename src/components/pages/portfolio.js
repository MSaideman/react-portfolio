
import React from 'react';
import Project from './project'
import Box from '@mui/material/Box';

export default function Portfolio() {
    return (
        <Box sx={{bgcolor: '#5c677d', color: '#001233', paddingBottom:'100px', paddingLeft:'10px'}}>
            <h2>Portfolio</h2>
            <Project />
        </Box>

    );
}