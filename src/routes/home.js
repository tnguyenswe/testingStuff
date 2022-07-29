import React from 'react';
import Box from '@mui/material/Box';

const HomeCard = (props) => {
    return (<Box {...props} sx={{ padding: '12px', flexDirection: 'column', borderRadius: '12px', display: 'flex', backgroundColor: '#D3D3D3', width: '100%', maxWidth: '360px', height: '200px' }}>{props.children}</Box>);
}

const Home = () => {
    return (
        <Box sx={{ display: 'flex', width: '100%', alignItems: 'center', flexDirection: 'column' }}>
            <h1 style={{ color: 'black' }}>Home Page!</h1>
            <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gridGap: '10px', width: '100%', alignItems: 'center', justifyItems: 'center' }}>
                <HomeCard>
                    <h2>Report Data</h2>
                    <h3>Body of the text, lorem ipsuom dolor whatever</h3>
                </HomeCard>
                <HomeCard>
                    <h2>Report Data</h2>
                    <h3>Body of the text, lorem ipsuom dolor whatever</h3>
                </HomeCard>
                <HomeCard>
                    <h2>Report Data</h2>
                    <h3>Body of the text, lorem ipsuom dolor whatever</h3>
                </HomeCard>
                <HomeCard>
                    <h2>Report Data</h2>
                    <h3>Body of the text, lorem ipsuom dolor whatever</h3>
                </HomeCard>
            </Box>
        </Box>
    );
}

export default Home;