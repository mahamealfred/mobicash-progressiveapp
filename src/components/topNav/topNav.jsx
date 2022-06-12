
import { Link } from "react-router-dom";
import './topbar.css'
import React, { useState } from "react";
import {
  AppBar,
  Button,
  ButtonGroup,
  Tab,
  Tabs,
  Box,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import LogoutIcon from '@mui/icons-material/Logout';
import PersonIcon from '@mui/icons-material/Person';
import NotificationsIcon from '@mui/icons-material/Notifications';
import EmailIcon from '@mui/icons-material/Email';
import {useHistory} from "react-router-dom";

const TopNav = () => {
  const [value, setValue] = useState();
  const history=useHistory();
  const theme = useTheme();
  console.log(theme);
  const isMatch = useMediaQuery(theme.breakpoints.up("lg"));
  const showText = useMediaQuery(theme.breakpoints.up('sm'));
 const handleLogout=()=>{
  history.push('/',{push:true})
 }
  console.log(isMatch);

  return (
    <React.Fragment>
      <AppBar sx={{position:"sticky",top:"0",Zindex:"999", background: "#ffff" }} maxWidth="xl">
      
        <Toolbar>
              <Typography sx={{ fontSize: "2rem", paddingLeft: "5%", backgroundColor:'#ffff',color:'#3D426B' }}>
              <img src="../../Assets/images/logo.png" alt="" className="topAvatar" />
              </Typography> 
              {isMatch &&
      <>
              <Typography sx={{ fontSize: "1rem", paddingLeft: "59%", backgroundColor:'#ffff',color:'#3D426B' }}>
              <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '& > *': {
          m: 1,
        },
      }}
    >
      <ButtonGroup variant="text" aria-label="text button group" >
      <Button className="buttonGroup"><EmailIcon/></Button>
        <Button className="buttonGroup"><NotificationsIcon/></Button>
        <Button className="buttonGroup"><PersonIcon/>MobicoreAdmin</Button>
        <Button onClick={handleLogout} className="buttonGroup"><LogoutIcon/>Logout</Button>
      </ButtonGroup>
    </Box>
    <Typography sx={{ fontSize: "0.5rem", paddingLeft: "58%", backgroundColor:'#ffff',color:'#3D426B' }}>
    
      </Typography>
             </Typography> 
            
      </>
}
      </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

export default TopNav;