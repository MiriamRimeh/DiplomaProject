import React from 'react'
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { mainNavbarItems } from './src/components/Navbar/consts/NavbarListItems';
import { navbarStyles } from './src/components/Navbar/styles';
import { useParams, useNavigate } from 'react-router-dom';


const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Drawer
        sx={navbarStyles.drawer}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <Divider />
        <List>
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
        </List>
      </Drawer>
    </div>
  )
}

export default Navbar