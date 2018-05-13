import React, {Component} from 'react';
import albumData from './../data/albums';
import PlayerBar from './PlayerBar';
import { Grid, Image, Table, Rating } from "semantic-ui-react";

class Album extends Component {
  constructor(props) {
    super(props);
    // Find album info from URL
    const album = albumData.find( album => {
      return album.slug === this.props.match.params.slug;
    })
    // Set state of album component
    this.state = {
      album: album,
      currentSong: album.songs[0],
      currentTime: 0,
      duration: album.songs[0].duration,
      volume: 0.8,
      isPlaying: false
    };
    // Create audio element and set to play first song
    this.audioElement = document.createElement('audio');
    this.audioElement.src = album.songs[0].audioSrc;
  }

  // Audio playback methods
  
  setSong(song) {
    this.audioElement.src = song.audioSrc;
    this.setState({ currentSong: song });
  }

  componentDidMount() {
    this.eventListeners = {
      timeupdate: e => {
        this.setState({ currentTime: this.audioElement.currentTime })
      },
      durationchange: e => {
        this.setState({ duration: this.audioElement.duration })
      }
    }
    this.audioElement.addEventListener('timeupdate', this.eventListeners.timeupdate);
    this.audioElement.addEventListener('durationchange', this.eventListeners.durationchange);
  }

  componentWillUnmount() {
    this.audioElement.src = null;
    this.audioElement.removeEventListener('timeupdate', this.eventListeners.timeupdate);
    this.audioElement.removeEventListener('durationChange', this.eventListeners.durationchange)
  }
  
  // Play and pause function.
  play() {
    this.audioElement.play();
    this.setState({ isPlaying: true });
  }

  pause() {
    this.audioElement.pause()
    this.setState({ isPlaying: false });
  }
  // Play and pause button
  handleSongClick(song) {
    const isSameSong = this.state.currentSong === song;
    if (this.state.isPlaying && isSameSong) {
      this.pause();
    } else {
      if (!isSameSong) { this.setSong(song); }
      this.play();
    }
  }
  // Previous track back button
  handlePreviousClick() {
    const currentIndex = this.state.album.songs.findIndex(song => this.state.currentSong === song);
    const newIndex = Math.max(0, currentIndex - 1);
    const newSong = this.state.album.songs[newIndex];
    this.setSong(newSong);
    this.play();
  }
  // Skip track ahead button
  handleNextClick() {
    const currentIndex = this.state.album.songs.findIndex(song => this.state.currentSong === song);
    const newIndex = Math.max(0, currentIndex + 1);
    const newSong = this.state.album.songs[newIndex];
    this.setSong(newSong);
    this.play();
  }
  // Time change function
  handleTimeChange(e) {
    const newTime = this.audioElement.duration * e.target.value;
    this.audioElement.currentTime = newTime;
    this.setState({ currentTime: newTime });
  }
  // Volume change function
  handleVolumeChange(e) {
    this.audioElement.volume = e.target.value;
    this.setState({ volume: e.target.value })
  }
  // Format time function
  formatTime(time) {
    if (isNaN(time) || time === 0) {return ` -:- `};
    const roundedSeconds = Math.floor(time)
    const minutes = Math.floor(roundedSeconds / 60);
    const seconds = roundedSeconds % 60;
    let string = minutes + ':';
    if (seconds < 10) { 
      string += '0';
    }
    string += seconds;
    return string;
  }

  // Check song playing for play/pause/track number display
  songState(song) {
    return this.state.isPlaying && song === this.state.currentSong && this.state.currentTime !== this.state.duration;
  }

  
  // Render album, tracks, and player bar
  render() {
    return (
        // Render Album Art
        <Grid text-align='center' container centered className='grid-area album'>
          <Grid.Row className='album-main-info'>
          <Grid.Column mobile={14} tablet={7} computer={7}>
            <section className='album-info'>
              <Image id='album-info' src={ this.state.album.albumCover } alt={ this.state.album.title } size='large' fluid centered/>
            </section>
          </Grid.Column>
        {/* Render song table */}
          <Grid.Column mobile={14} tablet={7} computer={7}>
          <div className='album-details'>
              <h1 id='album-title'>{ this.state.album.title }</h1>
              <h2 className='artist'>{ this.state.album.artist }</h2>
              <Rating defaultRating={ this.state.album.rating } maxRating={5} disabled className='rating'/>
            </div>
          <Table basic='very' id='song-list' singleLine compact unstackable>
            <colgroup>
              <col id='song-number-column' />
              <col id='song-title-column' />
              <col id='song-duration-column' /> 
            </colgroup>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell width={2} textAlign='center'>Track</Table.HeaderCell>
                <Table.HeaderCell width={10}>Title</Table.HeaderCell>
                <Table.HeaderCell width={2} textAlign='right'>Length</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
          {/* Song information mapping */}
            <Table.Body>
              {
                this.state.album.songs.map( (song, index) => 
                  <Table.Row className='song' key={index} onClick={ () => this.handleSongClick(song) }>
                    <Table.Cell className='song-actions' textAlign='center'>
                      <button className='song-button'>
                        <span className='song-number'>{
                            (this.songState(song)) 
                            || (!this.state.isPlaying 
                            && song === this.state.currentSong 
                            && this.state.currentTIme > 0) 
                            ? (!this.state.isPlaying ? <span className='ion-play'></span> : '') 
                            : index + 1 
                          }
                        </span>
                        <span className={(this.songState(song)) ? '' : 'ion-play'}></span>
                        <span className={(this.songState(song)) ? 'ion-pause' : ''}></span>
                      </button>
                    </Table.Cell>
                    <Table.Cell className='song-title'>{ song.title }</Table.Cell>
                    <Table.Cell textAlign='right' className='song-duration'>{ this.formatTime(song.duration) }</Table.Cell>
                  </Table.Row>
                )
              }
              
            </Table.Body>
          </Table>
          <div id='release-info'>{ this.state.album.releaseInfo } - {this.state.album.releaseDate }</div>
          </Grid.Column>
        {/* Render player bar */}
          </Grid.Row>
          <Grid.Row mobile={16} tablet={14} computer={14}>
            <PlayerBar 
              isPlaying={ this.state.isPlaying } 
              currentSong={ this.state.currentSong }
              volume={ this.state.volume }
              album={ this.state.album }
              currentTime={ this.audioElement.currentTime }
              duration={ this.audioElement.duration }
              handleSongClick={ () => this.handleSongClick(this.state.currentSong) }
              handlePreviousClick={ () => this.handlePreviousClick() }
              handleNextClick= { () => this.handleNextClick() }
              handleTimeChange={ (e) => this.handleTimeChange(e) }
              handleVolumeChange={ (e) => this.handleVolumeChange(e) }
              formatTime={ (e) => this.formatTime(e) }
            />
          </Grid.Row>
        </Grid> 
    )
  }
}

export default Album;