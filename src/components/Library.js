import React, { Component } from 'react';
import { Link } from "react-router-dom";
import albumData from './../data/albums';
import { Image, Grid, Container } from "semantic-ui-react";

// Album library component

class Library extends Component {
  constructor(props) {
    super(props);
    this.state = { albums: albumData }
  }
  render() {
    return (
      <section className='library'>    
      {/* Create album list */}
        <Container>
          <Grid centered className='grid-area'>
          {
            this.state.albums.map( (album, index) =>
              <Grid.Column mobile={16} tablet={8} computer={4}>
                <div className='library-item'>
                  <Link to={`/album/${album.slug}`} key={index}>
                    <Image src={ album.albumCover } alt={ album.title } fluid className='lib-image'/>
                    <h3>{ album.title }</h3>
                    <h4>{ album.artist }</h4>
                    <p>{ album.releaseDate }</p>
                  </Link>
                </div>
              </Grid.Column>
            )
          }
          </Grid>
        </Container>
      </section>
    )
  }
}

export default Library;
