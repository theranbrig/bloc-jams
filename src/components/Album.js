import React, {Component} from 'react';
import albumData from './../data/albums';

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
      isPlaying: false
    };
    // Create audio element and set to play first song
    this.audioElement = document.createElement('audio');
    this.audioElement.src = album.songs[0].audioSrc;
  }

  // Audio playback methods
  play() {
    this.audioElement.play();
    this.setState({ isPlaying: true });
  }

  pause() {
    this.audioElement.pause()
    this.setState({ isPlaying: false });
  }

  setSong(song) {
    this.audioElement.src = song.audioSrc;
    this.setState({ currentSong: song });
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
        </section>
      </section>
    )
  }
}

export default Album;