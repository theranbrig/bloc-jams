import React, {Component} from 'react';
import albumData from './../data/albums'

class Album extends Component {
  constructor(props) {
    super(props);
    const album = albumData.find( album => {
      return album.slug === this.props.match.params.slug
    })
    this.state = {
      album: album
    };
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
            <tbody>
              {
                this.state.album.songs.map( (song, index) => 
                  <tr key={index}>
                    <td>{ index +1 }</td>
                    <td>{ song.title }</td>
                    <td>{ song.duration }</td>
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