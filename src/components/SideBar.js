import React from "react";
import { Drawer, List, ListItem, ListItemText } from "@mui/material";
const Sidebar = ()=>{
    return(
        <Drawer variant="permanent" anchor="left">
            <List>
                <ListItem button component="a" href="/login">
                    <ListItemText primary="Login" />
                </ListItem>
                <ListItem button component="a" href="/register">
                    <ListItemText primary="Registrar" />
                </ListItem>
            </List>
        </Drawer>
    )
}
export default Sidebar;