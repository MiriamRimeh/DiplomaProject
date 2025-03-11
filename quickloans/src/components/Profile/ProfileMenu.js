import React, { useState } from "react";
import { AppBar, Toolbar, Typography, Box, Drawer, List, ListItem, ListItemText, Divider } from "@mui/material";
import TopAppBar from "../Navbar/AppBar";

const drawerWidth = 240;
const appBarHeight = 64; // Set a height in appbar styles file and import it here

const ProfilePage = () => {
  const [selectedMenu, setSelectedMenu] = useState("requests");

  const menuItems = [
    { id: "requests", label: "Заявки за кредит" },
    { id: "activeLoans", label: "Активни кредити" },
    { id: "closedLoans", label: "Приключени кредити" },
    { id: "personalInfo", label: "Лична информация" }
  ];

  return (
    <Box sx={{ display: "flex" }}>
      <TopAppBar position="fixed"/>

      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            marginTop: `${appBarHeight}px`, // Start below AppBar
            height: `calc(100% - ${appBarHeight}px)`, // Shorter Drawer
            boxSizing: "border-box"
          }
        }}
      >
        <List>
          {menuItems.map((item) => (
            <ListItem button key={item.id} onClick={() => setSelectedMenu(item.id)}>
              <ListItemText primary={item.label} />
            </ListItem>
          ))}
        </List>
      </Drawer>

      {/* Main Content */}
      <Box component="main" sx={{ flexGrow: 1, p: 3, marginTop: `${appBarHeight}px` }}>
        <Typography variant="h6">Съдържание: {selectedMenu}</Typography>
      </Box>
    </Box>
  );
};

export default ProfilePage;
