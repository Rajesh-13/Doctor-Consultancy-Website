import React, { useContext,useState } from 'react';
// import React, { useState } from 'react'
import EndCall from './end-call.svg'
import Fab from '@material-ui/core/Fab';
import { Grid, Typography, Paper, makeStyles ,Button} from '@material-ui/core';
import { PhoneDisabled } from '@material-ui/icons';

import { SocketContext } from '../Context';
// import './styles.css';

const useStyles = makeStyles((theme) => ({
  video: {
    // width: '100vw',
    // height: '30vh',
    // [theme.breakpoints.down('xs')]: {
    //   width: '300px',
    // },
  },
  gridContainer: {
    // justifyContent: 'center',
    // [theme.breakpoints.down('xs')]: {
    //   flexDirection: 'column',
    // },
  },
  paper: {
    // padding: '10px',
    // border: '2px solid black',
    // margin: '10px',
  },
}));

const VideoPlayer = () => {
  const { name, callAccepted, myVideo, userVideo,leaveCall, callEnded, stream, call } = useContext(SocketContext);
  const classes = useStyles();
  const [video, setVideo] = useState('fas fa-video')
    const [audio, setAudio] = useState('fas fa-microphone')
    const [flagV, setFlagV] = useState(1)
    const [flagA, setFlagA] = useState(1)

    function toogleClickV() {
        console.log('changed')
        if (flagV == 1) {
            setVideo('fas fa-video-slash')
            setFlagV(0)
        }
        else {
            setVideo('fas fa-video')
            setFlagV(1)
        }
    }
    function toogleClickA() {
        console.log('changedA')
        if (flagA == 1) {
            setAudio('fas fa-microphone-slash')
            setFlagA(0)
        }
        else {
            setAudio('fas fa-microphone')
            setFlagA(1)
        }
    }


    function hangupnone() {
        document.getElementById("hangup")
            .style.display = "none"
    }

  return (
    
      <div id="video-call-div">
                    <video className='remote' id="remote-video" ref={userVideo} autoPlay></video>
                    <video className='local' muted id="local-video" ref={myVideo} autoPlay></video>
                    <Button variant="contained" id='hangup' color="secondary" startIcon={<PhoneDisabled fontSize="large" id='disable'/>} fullWidth onClick={() => { leaveCall(); hangupnone(); }} className={classes.margin}>
                  
                </Button>
                    
      </div>
      
    
  );
};

export default VideoPlayer;
