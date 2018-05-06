import React, {Component} from 'react';
import albumData from './../data/albums';
import PlayerBar from './PlayerBar';

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

  play() {
    this.audioElement.play();
    this.setState({ isPlaying: true });
  }

  pause() {
    this.audioElement.pause()
    this.setState({ isPlaying: false });
  }

  handleSongClick(song) {
    const isSameSong = this.state.currentSong === song;
    if (this.state.isPlaying && isSameSong) {
      this.pause();
    } else {
      if (!isSameSong) { this.setSong(song); }
      this.play();
    }
  }

  handlePreviousClick() {
    const currentIndex = this.state.album.songs.findIndex(song => this.state.currentSong === song);
    const newIndex = Math.max(0, currentIndex - 1);
    const newSong = this.state.album.songs[newIndex];
    this.setSong(newSong);
    this.play();
  }

  handleNextClick() {
    const currentIndex = this.state.album.songs.findIndex(song => this.state.currentSong === song);
    const newIndex = Math.max(0, currentIndex + 1);
    const newSong = this.state.album.songs[newIndex];
    this.setSong(newSong);
    this.play();
  }

  handleTimeChange(e) {
    const newTime = this.audioElement.duration * e.target.value;
    this.audioElement.currentTime = newTime;
    this.setState({ currentTime: newTime });
  }

  render() {
    return (
      <section className='album'>
        <section className='album-info'>
          <img id='album-info' src={ this.state.album.albumCover } alt={ this.state.album.title }/>
          <div className='album-details'>
            <h1 id='album-title'>{ this.state.album.title }</h1>
            <h2 className='artist'>{ this.state.album.artist }</h2>
            <div id='release info'>{ this.state.album.releaseInfo }</div>
          </div>
        </section>
        {/* Song table */}
        <table id='song-list'>
          <colgroup>
            <col id='song-number-column' />
            <col id='song-title-column' />
            <col id='song-duration-column' /> 
          </colgroup>
          <thead>
            <tr>
              <th>Song</th>
              <th>Title</th>
              <th>Length</th>
            </tr>
          </thead>
        {/* Song information mapping */}
          <tbody>
            {
              this.state.album.songs.map( (song, index) => 
                <tr className='song' key={index} onClick={ () => this.handleSongClick(song) }>
                  <td className='song-actions'>
                    <button>
                      <span className='song-number'>{ index + 1 }</span>
                      <span className='ion-play'></span>
                      <span className='ion-pause'></span>
                    </button>
                  </td>
                  <td className='song-title'>{ song.title }</td>
                  <td className='song-duration'>{ song.duration }</td>
                </tr>
              )
            }
          </tbody>
        </table> 
        <PlayerBar 
          isPlaying={ this.state.isPlaying } 
          currentSong={ this.state.currentSong }
          currentTime={ this.audioElement.currentTime }
          duration={ this.audioElement.duration }
          handleSongClick={ () => this.handleSongClick(this.state.currentSong) }
          handlePreviousClick={ () => this.handlePreviousClick() }
          handleNextClick= { () => this.handleNextClick() }
          handleTimeChange={ (e) => this.handleTimeChange(e) } />
      </section>
    )
  }
}

export default Album;