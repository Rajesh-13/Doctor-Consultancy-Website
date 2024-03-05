import React, { useContext } from 'react';
import { Button } from '@material-ui/core';

import { SocketContext } from '../Context';

const Notifications = () => {
  const { answerCall, call, callAccepted } = useContext(SocketContext);
  
  function displaynone() {
    document.getElementById("container-box")
        .style.display = "none"
        document.getElementById("hangup")
        .style.display = "block"
        document.getElementById("local-video")
        .style.display = "block"
}

  return (
    <>
      {call.isReceivingCall && !callAccepted && (
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
          {/* <h1>{call.name} is calling:</h1> */}
          <Button variant="contained" color="primary" onClick={() => { answerCall(); displaynone(); }}>
            Answer
          </Button>
        </div>
      )}
    </>
  );
};

export default Notifications;
