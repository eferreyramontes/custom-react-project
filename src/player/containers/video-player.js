import React, { Component } from 'react';
import VideoPlayerLayout from '../components/video-player-layout'
import Video from '../components/video'
import Title from '../components/title'
import PlayPause from '../components/play-pause'
import Timer from '../components/timer';
import Controls from '../components/video-player-controls';
import ProgressBar from '../components/progress-bar';
import Spinner from '../components/spinner';
import Volume from '../components/volume';
import FullScreen from '../components/full-screen';

class VideoPlayer extends Component {
  state = {
    pause: true,
    duration: 0,
    currentTime: 0,
    position:0,
    loading:false,
    nonmute:true,
  }

  togglePlay = (event) => {
    this.setState({
      pause: !this.state.pause
    })
  }

  componentDidMount(){
    this.setState({
      pause: (!this.props.autoplay)
    })
  }

  handleLoadedMetadata = event => {
    this.video = event.target;
    this.setState({
      duration: this.video.duration
    })
  }

  handleTimeUpdate = event => {
    this.setState({
      currentTime: this.video.currentTime
    })
  }

  handleProgressChange = event => {
    this.video.currentTime = event.target.value
  }

  handleSeeking = event => {
    this.setState({
      loading:true
    });
  }

  handleSeeked = event => {
    this.setState({
      loading:false
    });
  }

  handleVolumeChange = event => {ß
    if(event.target.value !== undefined){
      this.video.volume = event.target.value;
    }
  }

  handleVolumeClick = event => {
    this.setState({
      nonmute: !this.state.nonmute
    });

    this.video.muted = this.state.nonmute;
  }

  handleFullScreen = event => {
    if(!document.webkitIsFullScreen){
      this.player.webkitRequestFullscreen()
    } else {
      document.webkitExitFullscreen();
    }
  }

  setRef = element => {
    this.player = element;
  }

  render() {
    return ( 
      <VideoPlayerLayout setRef={this.setRef}>
        <Title title={this.props.title}/>
        <Controls>
          <PlayPause
            pause={this.state.pause}
            handleClick={this.togglePlay}
          />  
          <Timer
            duration={this.state.duration}
            currentTime={this.state.currentTime}
          />
          <ProgressBar 
            duration={this.state.duration}
            currentTime={this.state.currentTime}
            handleProgressChange={this.handleProgressChange}
          />
          <Volume
            handleVolumeChange={this.handleVolumeChange}
            handleVolumeClick={this.handleVolumeClick}
            nonmute={this.state.nonmute}
          />
          <FullScreen 
            handleFullScreen = {this.handleFullScreen}
          />
        </Controls>
        <Spinner
          active={this.state.loading}
        />
        <Video 
          autoplay={this.props.autoplay}
          pause={ this.state.pause}
          src={this.props.src}
          handleLoadedMetadata={this.handleLoadedMetadata}
          handleTimeUpdate={this.handleTimeUpdate}
          handleSeeking={this.handleSeeking}
          handleSeeked={this.handleSeeked}
          mute={this.state.nonmute}
        />
      </VideoPlayerLayout>
    )
  }
}

export default VideoPlayer;