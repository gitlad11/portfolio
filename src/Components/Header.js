import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { createStyles, makeStyles } from '@material-ui/styles'
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import {FaFileCode, FaEnvelope, FaPhoneSquareAlt, FaGithub, FaLanguage} from "react-icons/fa";
import '../App.css';
import Grid from "@material-ui/core/Grid";
import Divider from '@mui/material/Divider';
import "animate.css";
import chatdesn from '../Images/chatdesn.png';
import FlutterApp1 from '../Images/FlutterApp1.png';
import FlutterApp2 from '../Images/FlutterApp2.png';
import FlutterApp3 from '../Images/FlutterApp3.png';
import FlutterApp4 from '../Images/FlutterApp4.png';
import FlutterApp5 from '../Images/Flutter5.png';
import likechat from '../Images/likechatapp.png';



function Header(props) {
  const lang = props.lang;
  const setLang = props.setLang;
	const [showContact , setShowContact] = React.useState(false);
  const [showLang, setShowLang] = React.useState(false);
  const [showWorks, setShowWorks] = React.useState(false);
  const images = [
    chatdesn

  ]
	const Btnstyles = {
		borderBottom: "2px solid white", marginRight : "10px", transition: "all 0.5s ease",
		"&:hover" : {
			borderColor: "#fc2626"
		}
	}
	const onContact = () => {
		if(showContact){
			setShowContact(false)
		} else { setShowContact(true) }
    setShowLang(false);
	}
  const onLang = () => {
    if(showLang){
      setShowLang(false)
    } else { setShowLang(true) }
    setShowContact(false)
  }
  const onWorks = () => {
    setShowWorks(!showWorks)
  }
  
	return (
		<Box sx={{ flexGrow: 1 }}>
      <AppBar style={{ backgroundColor : "#171313" , position : "sticky", zIndex : "3", top : "0px" }} position="static">
        <Toolbar>
          <Typography style={{ color : "#eb0202" }} variant="h5" component="div">
            Dev.
          </Typography>
          <Typography variant="h6" component="div">
            elover()
          </Typography>
         <Typography variant="h5" sx ={{ flexGrow: 1 }}>
         	
         </Typography>
         <div className="navBtn" style={Btnstyles} ><Button onClick= {onLang} color="inherit" endIcon={<FaLanguage/>}>{lang.lang}</Button></div>
         <div className="navBtn" style={Btnstyles} ><Button color="inherit" onClick={onWorks} endIcon={<FaFileCode/>}>{lang.works}</Button></div>

          <div className="navBtn" style={Btnstyles} ><Button onClick= {onContact}  color="inherit" endIcon={<FaEnvelope/>}>{lang.contact}</Button></div>
        </Toolbar>
        {showContact ? <div className="animate__bounceIn" style={{ position : "absolute",
         right : "35px",
          top : "70px",
           height : "140px",
         maxWidth : "300px",
         borderRadius : "5px",
         textAlign : "left" ,
         padding : "6px",
         backgroundColor : "#fff"}}>
         <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
         	<Grid item xs={12} >
         		 <Typography style={{ color : "#171616", marginTop : "10px" }} variant="h6" component="div">
            		Nikolai Efimenko
          		</Typography>
         	</Grid>

         	<Grid item xs={12} >
         		<Typography style={{ color : "#5e5e5e", marginTop : "10px" }} variant="p" component="div">
            		<FaEnvelope/> email: <span style={{ fontSize : "14px", color : "#333" }}>efimovi420@gmail.com</span>  
          		</Typography>
       			<Divider/>
         	</Grid>

         	<Grid item xs={12} >
         		<Typography style={{ color : "#5e5e5e", marginTop : "10px" }} variant="p" component="div">
            		<FaPhoneSquareAlt/> number: <span style={{ fontSize : "14px", color : "#333" }}>+77058671152</span>  
          		</Typography>
          		<Divider/>
         	</Grid>
         
         	<Grid item xs={12} >
         		<Typography style={{ color : "#5e5e5e", marginTop : "10px" }} variant="p" component="div">
            		<FaGithub/> github: <span style={{ fontSize : "14px", color : "#333" }}><a href="https://github.com/gitlad11" >https://github.com/gitlad11</a></span>  
          		</Typography>
         	</Grid>
        
         </Grid>
         </div> : <div></div>}
         {showLang ? 
          <div className="animate__bounceIn" style={{ position : "absolute",
         right : "165px",
          top : "70px",
           height : "120px",
         maxWidth : "120px",
         borderRadius : "5px",
         textAlign : "left" ,
         padding : "6px",
         justifyContent : "center",
         alignItems : "center",
         backgroundColor : "#fff"}}>
          <Box><Button onClick={ () => setLang(0)} color="secondary" className="navBtn">Русский</Button></Box>
          <Divider/>
          <Box><Button onClick={() => setLang(1)} color="secondary" className="navBtn">English</Button></Box>
          <Divider/>
          <Box><Button onClick={ () => setLang(2)} color="secondary" className="navBtn">Français</Button></Box>

         </div>
          : <div></div>}
          {showWorks ? <div className="animate__bounceIn" style={{ position : "absolute",
         right : "165px",
          top : "70px",
          overflowY: "scroll",
           height : "500px",
         width : "720px",
         boxShadow: "0 0 13px rgba(0,0,0,0.9)",
         borderRadius : "5px",
         padding : "12px",
         backgroundColor : "#363333"}}>
          <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={12} >
            <img src={likechat} style={{ height : "500px", width : "760px"}} />
            </Grid>
          <Grid item >
             <img src={chatdesn} style={{ height : "500px", width : "760px" }} />
          </Grid>
          <Grid item xs={6}>
            <img src={FlutterApp1} style={{  height : "460px",  }} />
          </Grid>
          <Grid item xs={6}>
              <img src={FlutterApp2} style={{ height : "460px",  }} />
          </Grid>
          <Grid item xs={6}>
                <img src={FlutterApp3} style={{  height : "460px",  }} />
          </Grid>
             <Grid item xs={6}>
                <img src={FlutterApp4} style={{  height : "460px",  }} />
          </Grid>
          <Grid item xs={6}>
              <img src={FlutterApp5} style={{  height : "460px",  }} />
          </Grid>
           </Grid> 
          </div> : <div/>}
        
        
      </AppBar>
    </Box>
	);
}
export default Header