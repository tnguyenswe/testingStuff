import React from 'react';
import Box from '@mui/material/Box';
import MenuIcon from '@mui/icons-material/Menu';
import AccessAlarmsIcon from '@mui/icons-material/AccessAlarms';
import { Link } from "react-router-dom";
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';

const SidebarItems = (props) => {
    return (<Link to={props.route} style={{
        display: "flex",
        alignItems: "center",
        height: "40px",
        padding: "0px 12px",
        overflowX: "hidden",
        color: "rgb(255, 255, 255)",
        fontWeight: "bold",
        whiteSpace: "nowrap",
        border: "1px solid transparent",
        borderRadius: "8px",
        textDecoration: 'none',
        transition: "background-color 0.15s cubic-bezier(0.215, 0.61, 0.355, 1) 0s",
    }}>
        {props.children}
    </Link>);
}

const BoxSidebar = () => {
    return (
        <Box sx={{
            width: "100%",
            maxWidth: "280px",
            height: "100vh",
            position: "sticky",
            top: "0",
            backgroundColor: "rgb(0, 97, 213)",
        }}>
            <Box sx={{
                display: "flex",
                justifyContent: 'start',
                alignItems: 'center',
                ml: '20px',
                pt: '20px'
            }}>
                <MenuIcon style={{ color: 'white' }} />
                <Link to="/" style={{ textDecoration: 'none' }}><h2 style={{ marginLeft: '12px', color: 'white', fontSize: '30px' }}>SLA Tracker</h2></Link>
            </Box>
            <Box sx={{
                display: 'grid',
                gridTemplateColumns: '1fr',
                alignItems: 'center',
                justifyItems: 'start',
                ml: '8px'
            }}>
                <SidebarItems route="/tracker">
                    <AccessAlarmsIcon style={{ paddingRight: '10px' }} />
                    <h3>Tracker</h3>
                </SidebarItems>

                <SidebarItems route="/downloads">
                    <ArrowCircleDownIcon style={{ paddingRight: '10px' }} />
                    <h3>Downloads</h3>
                </SidebarItems>

            </Box>
        </Box>
    )
}

export default BoxSidebar;