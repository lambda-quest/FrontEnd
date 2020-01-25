import React, { Component } from 'react'
import gamesound from '../../../assets/gameaudio.mp3'
import Sound from 'react-sound'

export default class LoginSound extends Component {
  render() {
    return (
      <Sound
      url={gamesound}
      playStatus={Sound.status.PLAYING}
      onLoading={this.handleSongLoading}
      onPlaying={this.handleSongPlaying}
      onFinishedPlaying={this.handleSongFinishedPlaying}
      volume={35}
      />
    )
  }
}
