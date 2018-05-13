import React from 'react';
import { Grid, Container, Image, Divider } from "semantic-ui-react";


const Landing = () => (
  <section className='library'>
  {/* Main title section */}
    <div className='main-title'>
      <h2 className='hero-title'>TURN THE MUSIC UP!</h2>
    </div>
    <Container className='Site-content'>
      <Grid textAlign='center' columns={3}>
      {/* Selling points information */}
        <Grid.Row className='show-grid selling-points'>
          <Grid.Column mobile={16} tablet={8} computer={5} className='point'>
            <div className='selling-point' color='violet'>
              <h2 className='point-title end-title'>Choose your music</h2>
              <Image src={require('./../data/images/photo-1524623258233-5eb366d88882.jpeg')} className='landing-image' size='medium' fluid/>
              <div>
                <span className='ion-headphone landing-icon'></span>
              </div>
              <p className='point-description'>The world is full of music; why should you have to listen to music that someone else chose?</p>
            </div>
          </Grid.Column>
          <Divider horizontal/>
          <Grid.Column mobile={16} tablet={8} computer={5} className='point'>
            <div className='selling-point' color='violet'>
              <h2 className='point-title'>Unlimited, streaming, ad-free</h2>
              <Image src={require('./../data/images/cristian-guanipa-161134-unsplash.jpg')} className='landing-image' size='medium' fluid/>
              <div>
                <span className='ion-wifi landing-icon'></span>
              </div>
              <p className='point-description'>No arbitrary limits. No distractions</p>
            </div>
          </Grid.Column>
          <Divider horizontal/>
          <Grid.Column mobile={16} tablet={8} computer={5} className='point'>
            <div className='selling-point' color='violet'>
              <h2 className='point-title end-title'>Mobile enabled</h2>
              <Image src={require('./../data/images/gabriel-barletta-87533-unsplash.jpg')} className='landing-image' size='medium' fluid/>
              <div>
                <span className='ion-iphone landing-icon'></span>
              </div>
              <p className='point-description'>Listen to your music on the go.  This streaming service is available on all mobile platforms</p>
            </div>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  </section>
  
);

export default Landing;
