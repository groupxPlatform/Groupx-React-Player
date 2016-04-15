import React from 'react';
import Video from 'react-html5video';

class Player extends React.Component{
  componetWillMount(){
      const screenHeight = screen.height;
      console.log(screenHeight);
  }
  render(){
    return(
    <Video controls autoPlay muted fullscreen height="100%" width="100%">
        <source src="/videos/Introduction.mp4" type="video/mp4"/>
    </Video>
    );
  }
}

export default Player;
