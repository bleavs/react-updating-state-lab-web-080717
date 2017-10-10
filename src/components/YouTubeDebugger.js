// Code YouTubeDebugger Component Here

import React from 'react';

export default class YouTubeDebugger extends React.Component{
  constructor(){
    super();

    this.state = {

  errors: [],
  user: null,
  settings: {
    bitrate: 8,
    video: {
      resolution: '1080p'
        }
      }
    }

  }

  changeBits = () => {
    this.setState({
      settings:{
        ...this.state.settings,
        bitrate: 12
      },
    })
}

  changeRes = () => {
    this.setState({
      settings:{
        ...this.state.settings,
        video:{
            resolution: '720p'
          }
        },
    })
  }


  render(){
    return (<div>
      <button className="bitrate" onClick={this.changeBits}>Bits</button>
      <button className="resolution" onClick={this.changeRes}>Res</button>
      </div>
    )

  }
}
