import React from 'react';
import '../App.css';
import "animate.css";
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from "@material-ui/core/Grid";
import {FaLaptopCode, FaJs, FaNodeJs, FaPython} from "react-icons/fa";
import {SiFlutter} from "react-icons/si";
import ChatReact from '../Images/chatReact.png';
import likechat from '../Images/likechatapp.png';
import chatExpress from '../Images/chatExpress.png';
import chatdesn from '../Images/chatdesn.png';
import chatlike from '../Images/chatlikeapp.png';
import FlutterApp1 from '../Images/FlutterApp1.png';
import FlutterApp2 from '../Images/FlutterApp2.png';
import FlutterApp3 from '../Images/FlutterApp3.png';
import FlutterApp4 from '../Images/FlutterApp4.png';
import FlutterApp5 from '../Images/Flutter5.png';
import Python from '../Images/python.png';
import PyApp from '../Images/pythtytenhjder.png';
import Divider from '@mui/material/Divider';
import FlutterCode from '../Images/2021-10-06_10-59-36.png';


function Content(props){
	const lang = props.lang;
	const GridStyle = {
		 marginTop : "60px", borderTop : "1px solid grey",  padding : "7px" 
	}
	const images = [
		ChatReact, likechat, chatlike, chatExpress, FlutterApp1, FlutterApp2, FlutterApp3, FlutterApp4, FlutterApp5, Python, PyApp
	]

	return <Container maxWidth='xl' style={{ backgroundColor : "#fff", height : "1000px", width : "100%", marginTop : "30px", padding : "10px" }}>
		<Typography variant="h4" >{lang.technologies}</Typography>
		<span style={{marginTop : "15px", fontSize : "24px", marginBottom : "15px" }}><FaLaptopCode /></span>
		<Divider/>
		<Grid style={{ marginTop : "35px" }} container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
			<Grid item xs={6}>
				<FaJs style={{ fontSize : "36px" }}/>
				<div style={{ textAlign : "left", margin : "10px"  }}>
				<Typography variant="h5" >
				 JavaScript:
				</Typography>
				</div>
				<div style={{ maxHeight : "350px"}} >
					<img src={ChatReact} style={{ maxHeight : 'inherit',boxShadow: "0 0 13px rgba(0,0,0,0.9)"  }} />
				</div>
			</Grid>
			<Grid item xs={6}>
				<Grid container>
					<Grid item xs={9}>
						<img src={likechat} style={{ maxHeight : "260px", boxShadow: "0 0 13px rgba(0,0,0,0.9)" }} />
					</Grid>
					<Grid item xs={3}></Grid>
					<Grid item xs={3}></Grid>
					<Grid item xs={9}>
						<img src={chatlike} style={{ maxHeight : "260px", boxShadow: "0 0 13px rgba(0,0,0,0.9)" }} />
					</Grid>
				</Grid>
			</Grid>
			<Divider/>
			<Grid style={GridStyle} item xs={6}>
				<FaNodeJs style={{ fontSize : "36px" }}/>
				<div style={{ textAlign : "left", margin : "10px"  }}>
				<Typography variant="h5" >
				 Node.js: 
				</Typography>
				</div>
				<div style={{ maxHeight : "350px"}} >
					<img src={chatExpress} style={{ maxHeight : 'inherit',boxShadow: "0 0 13px rgba(0,0,0,0.9)"  }} />
				</div>
			</Grid>
			<Grid item xs={6} style={GridStyle} >
				<Grid container>

					<Grid item xs={12}>
						<img src={chatdesn} style={{ maxHeight : "350px", boxShadow: "0 0 13px rgba(0,0,0,0.9)" }} />
					</Grid>
				</Grid>
			</Grid>

			<Grid style={GridStyle} item xs={6}>
				<SiFlutter style={{ fontSize : "36px" }}/>
				<div style={{ textAlign : "left", margin : "10px"  }}>
				<Typography variant="h5" >
				 Flutter:
				</Typography>
				</div>
				<div style={{ maxHeight : "350px"}} >
					<img src={FlutterCode} style={{ maxHeight : 'inherit',boxShadow: "0 0 13px rgba(0,0,0,0.9)"  }} />
				</div>
			</Grid>
			<Grid style={GridStyle} item xs={6}>
				<Grid container>
					<Grid item xs={4}>
						<img src={FlutterApp1} style={{ maxHeight : "320px", boxShadow: "0 0 13px rgba(0,0,0,0.9)" }} />
					</Grid>

					<Grid item xs={4}>
						<img src={FlutterApp2} style={{ maxHeight : "320px", boxShadow: "0 0 13px rgba(0,0,0,0.9)" }} />
					</Grid>

					<Grid item xs={4}>
						<img src={FlutterApp3} style={{ maxHeight : "320px", boxShadow: "0 0 13px rgba(0,0,0,0.9)" }} />
					</Grid>

					<Grid item xs={6}>
						<img src={FlutterApp4} style={{ maxHeight : "320px", boxShadow: "0 0 13px rgba(0,0,0,0.9)" }} />
					</Grid>

					<Grid item xs={6}>
						<img src={FlutterApp5} style={{ maxHeight : "320px", boxShadow: "0 0 13px rgba(0,0,0,0.9)" }} />
					</Grid>

				</Grid>
			</Grid>
			<Grid style={GridStyle} item xs={6}>
				<FaPython style={{ fontSize : "36px" }}/>
				<div style={{ textAlign : "left", margin : "10px"  }}>
				<Typography variant="h5" >
				 Python : 
				</Typography>
				</div>
				<div style={{ maxHeight : "350px"}} >
					<img src={Python} style={{ maxHeight : 'inherit',boxShadow: "0 0 13px rgba(0,0,0,0.9)"  }} />
				</div>
			</Grid>
			<Grid item xs={6} style={GridStyle} >
				<Grid container>

					<Grid item xs={12}>
						<img src={PyApp} style={{ maxHeight : "350px", boxShadow: "0 0 13px rgba(0,0,0,0.9)" }} />
					</Grid>
				</Grid>
			</Grid>

		</Grid>
		<div>Flaticon from <a href="https://www.flaticon.com/authors/md-tanvirul-haque" title="Md Tanvirul Haque">Md Tanvirul Haque</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
	</Container>
}

export default Content;