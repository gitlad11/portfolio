import React, { useRef } from 'react';
import '../App.css';
import "animate.css";
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from "@material-ui/core/Grid";
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import {FaChevronRight, FaRobot} from "react-icons/fa";
import {DiDatabase} from "react-icons/di";
import {GiWallet} from "react-icons/gi";
import Modal from '@mui/material/Modal';
import emailjs from 'emailjs-com';
import{ init } from 'emailjs-com';
import TextField from '@mui/material/TextField';
import { FormControl } from '@mui/material';

function Present(props){
	const form = useRef();
	const lang = props.lang;
	const [errorForm , setError] = React.useState(false);
	const [contact , setContact] = React.useState(false);
	const [open, setOpen] = React.useState(false);
  		const handleOpen = () => setOpen(true);
  		const handleClose = () => setOpen(false);

	const textStyles ={
		color : "#fff",
		marginBottom : "20px",
		transition: "all 0.5s ease",
		"&:hover" : {
			color : "#e03838"
		}
	}
	const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
init("user_V7XVivk7Dkwe0wt0J8e27");

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs.sendForm("service_1vtii3i","template_eepd978", form.current).then((result) => {
          console.log(result.text);

      }, (error) => {
          console.log(error.text);

      });

	}
	return (
	<div>
		<Container className="animate__bounceIn" style={{ marginTop : "120px", textAlign : "left" }} fluid >

		<Modal
        keepMounted
        open={open}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box sx={style}>
        	<Typography style={{ marginBottom : "10px" }} id="keep-mounted-modal-title" variant="h5" component="h5">
            {lang.send_gmail}
          </Typography>
          <Typography style={{ marginBottom : "10px" }} id="keep-mounted-modal-title" variant="p" component="div">
            efimovi420@gmail.com
          </Typography>
          <Divider/>
          <FormControl ref={form} onSubmit={sendEmail}>
          <TextField  name="user_email"  style={{ width : "80%" , marginBottom : "15px"}} label={lang.gmail_from} variant="standard" />
          <TextField name="message" style={{ width : "80%", marginBottom : "30px" }} label={lang.gmail_message } variant="standard" />

          <Button type="submit" color="secondary" variant="contained" endIcon={<FaChevronRight/>}>
      				{lang.invite_button}
    		</Button>
    		</FormControl>
        </Box>
      </Modal>

	<Grid container justify="center">
	<Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
		<Grid item xs={12}>
    		<Typography  style={textStyles} variant="h2"  >
			Hello, i am Nickolai!
		</Typography>
  				</Grid>
  			<Grid item xs={8}>
    		<Typography style={{ color : "#e03838", background : "rgba(0, 0, 0, 0.6)", marginBottom : "10px" }} variant="h3"  >
			<span style={{ background : "#266fff", color : "#fff" }} >The</span>  &#60;developer&#47;&#62;
		</Typography>
  				</Grid>	
  			<Divider style={{ height : "30px" }}/>
  			<Grid item xs={12}>
    		<Typography style={textStyles} variant="p" >
			{lang.greetings}
			</Typography>

  				</Grid>
  				<Divider style={{ height : "60px" }}/>
  				<Grid item xs={2}>
    			<Button onClick={handleOpen} color="secondary" variant="contained" endIcon={<FaChevronRight/>}>
      				{lang.invite_button}
    			</Button>
  				</Grid>
  				<Grid item xs={2}>
    			
  				</Grid>
  				<Grid item xs={8}></Grid>
  		
		</Grid>
	</Grid>	
      </Container>
      <Container style={{ marginTop : "60px"  }}>
      	<Grid style={{ color : "#fff", textAlign : "center"}} container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      		<Grid  item xs={4}>
      			<DiDatabase style={{ fontSize : "40px" }}/>
      			<Typography variant="h5" >{lang.database}</Typography>
      		</Grid>
      		<Grid  item xs={4}>
      			<GiWallet style={{ fontSize : "40px" }}/>
      			<Typography variant="h5">{lang.payment}</Typography>
      		</Grid>
      		<Grid item xs={4}>
      			<FaRobot style={{ fontSize : "40px" }}/>
      			<Typography variant="h5">{lang.auto}</Typography>
      		</Grid>
      	</Grid>
      </Container>
	</div>
     );
}
export default Present;