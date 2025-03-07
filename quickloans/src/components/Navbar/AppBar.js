import * as React from 'react';
import { AppBar, ListItem } from '@mui/material';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { mainNavbarItems } from './consts/NavbarListItems';
import { navbarStyles } from './styles';
import { useParams, useNavigate } from 'react-router-dom';

const TopAppBar = () => {
    const navigate = useNavigate();
    return (
        <Box sx={navbarStyles.box}>
            <AppBar 
                position="fixed" 
                elevation={0} 
                sx={navbarStyles.appbar}>
                <Toolbar variant ="regular">
                    <Box sx={{display: {xs: 'none', md:'flex'}}}>
                        {mainNavbarItems.map((item, index) => (
                            <ListItem 
                            button
                            key={item.id} 
                            onClick={() => navigate(item.route)} //route to different items on the drawer
                            >
                                <ListItemIcon sx={navbarStyles.icons}>
                                    {item.icon}
                                    </ListItemIcon>
                                <ListItemText sx={navbarStyles.text} primary={item.label} />
                            </ListItem>
                        ))}
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default TopAppBar