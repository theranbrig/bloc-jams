import React, { Component } from 'react';
import { Grid, Segment } from "semantic-ui-react";

// Build of player bar for album page to be placed at the bottom of the screen

class PlayerBar extends Component {
  render() {
    return (
      <div className='container player-controls'>
        <Grid centered className='container'>
          <Grid.Row columns={3} className='player-bar' verticalAlign='middle'>
          {/* Track time and slider for song seeking */}
            <Grid.Column mobile={14} tablet={7} computer={5} id='time-control' className='sliders player-col'>
              <Segment basic>
                <div className="current-time">{this.props.formatTime(this.props.currentTime)}</div>
                <input
                  type="range"
                  className="seek-bar"
                  value={(this.props.currentTime / this.props.duration) || 0}
                  max="1"
                  min="0"
                  step="0.01"
                  onChange={ this.props.handleTimeChange }
                />
                <span className="total-time">{this.props.formatTime(this.props.duration)}</span>
              </Segment>
            </Grid.Column>
          {/* Song information and button section */}
            <Grid.Column mobile={14} tablet={7} computer={6} id='buttons' textAlign='center' className='player-col player-buttons'>
              <Segment basic>
                <button id='previous' onClick={ this.props.handlePreviousClick }>
                  <i className='fas fa-backward'></i>
                </button>
                <button id='play-pause' onClick={ this.props.handleSongClick }>
                  <i className={ this.props.isPlaying ? 'fas fa-pause' : 'fas fa-play' }></i>
                </button>
                <button id='next' onClick={ this.props.handleNextClick }>
                  <i className='fas fa-forward'></i>
                </button>
                <p className='player-song'>{ this.props.currentSong.title }</p>
                <p className='player-other'>{ this.props.album.artist } - { this.props.album.title }</p>
              </Segment>
            </Grid.Column>
          {/* Volume bar slider section */}
            <Grid.Column mobile={14} tablet={7} computer={5} id='volume-control' className='sliders player-col'>
              <Segment basic>
                <i className="fas fa-volume-down"></i>
                <input
                  type='range'
                  className='seek-bar'
                  value={ this.props.volume }
                  max='1'
                  min='0'
                  step='0.01'
                  onChange={ this.props.handleVolumeChange }
                />
                <i className="fas fa-volume-up"></i>
              </Segment>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    )
  }
}

export default PlayerBar;
