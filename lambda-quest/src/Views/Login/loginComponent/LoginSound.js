import React, { Component } from 'react'
import loginsound from '../../../assets/introaudio.mp3'
import Sound from 'react-sound'

export default class LoginSound extends Component {
  render() {
    return (
      <Sound
      url={loginsound}
      autoLoad={true}
      playStatus={Sound.status.PLAYING}
      onLoading={this.handleSongLoading}
      onPlaying={this.handleSongPlaying}
      onFinishedPlaying={this.handleSongFinishedPlaying}
      volume={30}
      />
    )
  }
}
