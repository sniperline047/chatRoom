import React from 'react';
import logo from './logo.png';
import slogo from './startup-Logo.png';
import {ChatContext} from './Store';
import Tilt from 'react-tilt'
//material ui 
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
  root: {
  	margin: '50px',
    padding: theme.spacing(3, 2),
    paddingBottom: '5px',
  },
  flex: {
  	display: 'flex',
  	alignItems: 'center',
  },
  message: {
  	backgroundColor: 'rgba(90,180,181,0.5)',
  },
  sideWindow: {
  	width: '30%',
  	height: '300px',
  },
  chatWindow: {
  	margin: '2px',
  	width: '70%',
  	height: '300px',
  	padding: "10px",
  	border: '3px solid grey',
  },
  chatBox: {
  	width: "85%",
  },
  button: {
  	width: "15%",
  },
  footer: {	
  	height: '10%',
  	position: 'relative',
	paddingTop: '2px',
	bottom: '0',
	left: '0',
	width: '100%',
	backgroundColor: 'black',
	color: 'white',
	textAlign: 'center',
  },
  header: {
  	height: '10%',
  	display: 'flex',
	position: 'relative',	
	top: '0',
	width: '100%',
	backgroundColor: '#3f49b5',
	color: 'white',
	textAlign: 'center',
  },
}));

const handleClick = () => {
	console.log("Clicked!");
}

export default function Dashboard() {
	const classes = useStyles();
	//ChatContext Store
	const [allChats] = React.useContext(ChatContext);
	const dept = Object.keys(allChats);
	//react hook state
	const [activeDept, changeDept] = React.useState(dept[0]);
	const [chatMessage, handleChange] = React.useState("");

	return(
		<div style={{backgroundColor: "rgba(255,183,0,0.5)"}}>
	        <header className={classes.header}>
	            <div className="w-50 p4 tl f3">
	            	<p className="">💬 myGovApp</p>
	            </div>
	            <div className="w-50 tr f3"><p>Startup-Punjab</p></div>
	        </header>
			<div className="overflow-auto h-80">
	        	<Paper className={classes.root}>
		        	<div>
		        		<Tilt className="Tilt br3 shadow-4" options={{ max : 70 }} style={{ height: 150, width: 250 }} >
				        	<div className="Tilt-inner">
				            	<img style={{paddingTop: '5px'}} alt='logo' src={slogo}/>
				            	<p>A new Initiative!</p>
				        	</div>
			        	</Tilt>
		        	</div>
		        	<img src={logo} alt="logo1" height="150" width="150" />
			        <Typography variant="h2" component="h3" >
			        	<div className="blue pb3" >
			          		myGovApp Chatroom
			          	</div>
			        </Typography>
			        <Typography variant="h6" component="p">
			          	Chat with different Departments in your personalised Chatroom.
			        </Typography>
			        <Typography variant="h6" component="p" className="ba p1 bg-light-green b--light-green f4">
			        	{(activeDept).toUpperCase()}	
			        </Typography>
			        <div className={classes.flex}>
			        	<div className={classes.sideWindow}>
			        		<List>
					        	<Typography variant="h6" component="p">
			          				Departments
			        			</Typography>
			        			{
			        				dept.map(dept => {
			        					return (        					
									        <ListItem onClick={(event) => changeDept(event.target.innerText)} key={dept} button>
									           <ListItemText primary={dept} className="ba br4 bw2 b--light-green tc" />
									        </ListItem>
								        );
			        				})
			        			}
			        		</List> 
			        	</div>
			        	<div className={classes.chatWindow}>
			        			{
			        				allChats[activeDept].map((chat, i) => {
			        					return (        					
									        <div className="self-center tl pb3" key={i} >
								        	    <Chip
											        avatar={<Avatar>{(chat.from[0]).toUpperCase()}</Avatar>}
											        label={chat.from}
											        onClick={handleClick}
											    />
												<TextField
											        value={chat.msg}
											        className={classes.message}
											        InputProps={{
											          readOnly: true,
											        }}
											        variant="outlined"
											    />
									        </div>
								        );
			        				})
			        			}
			        	</div>
			        </div>
			        <div className={classes.flex}>
			        	<TextField
					        className={classes.chatBox}
					        placeholder="Write a message..."
					        value={chatMessage}
					        onChange={(event) => handleChange(event.target.value)}
					        variant="filled"
					        margin="normal"			        
					    />
			        	<Button 
			        		variant="contained" 
		        			color="primary" 
		        			className={classes.button}
		        			onClick={handleClick}
		        		>
						    Send
						</Button>
			        </div>
		        </Paper>
	        </div>
	        <div className={classes.footer}>
	            <p>© 2019 Made By sniperline047</p>
	            <a href="http://github.com/sniperline047"><p className="white pointer">🔗 GitHub Repo</p></a>
	        </div>
		</div>
	);
}
