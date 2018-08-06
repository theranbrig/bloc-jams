import React from 'react';
import { Grid, Container, Image, Divider } from 'semantic-ui-react';

const Landing = () => (
	<section className="library">
		{/* Main title section */}
		<div className="main-title">
			<h2 className="hero-title">TURN THE MUSIC UP!</h2>
		</div>
		<Container className="Site-content">
			<Grid textAlign="center" columns={3}>
				{/* Selling points information */}
				<Grid.Row className="show-grid selling-points">
					<Grid.Column mobile={16} tablet={8} computer={5} className="point">
						<div className="selling-point" color="violet">
							<h2 className="point-title end-title">Choose your music</h2>
							<Image
								src="https://i.imgur.com/D6PwHSZ.jpg"
								className="landing-image"
								fluid
							/>
							<div>
								<i className="fas fa-headphones landing-icon" />
							</div>
							<p className="point-description">
								The world is full of music; why should you have to listen to
								music that someone else chose?
							</p>
						</div>
					</Grid.Column>
					<Divider horizontal />
					<Grid.Column mobile={16} tablet={8} computer={5} className="point">
						<div className="selling-point" color="violet">
							<h2 className="point-title">Unlimited, streaming, ad-free</h2>
							<Image
								src="https://i.imgur.com/rZdL6o2.jpg"
								className="landing-image"
								fluid
							/>
							<div>
								<i className="fas fa-wifi landing-icon" />
							</div>
							<p className="point-description">
								No arbitrary limits. No distractions
							</p>
						</div>
					</Grid.Column>
					<Divider horizontal />
					<Grid.Column mobile={16} tablet={8} computer={5} className="point">
						<div className="selling-point" color="violet">
							<h2 className="point-title end-title">Mobile enabled</h2>
							<Image
								src="https://i.imgur.com/AiHHQ0X.jpg"
								className="landing-image"
								fluid
							/>
							<div>
								<i className="fas fa-mobile-alt landing-icon" />
							</div>
							<p className="point-description">
								Listen to your music on the go. This streaming service is
								available on all mobile platforms
							</p>
						</div>
					</Grid.Column>
				</Grid.Row>
			</Grid>
		</Container>
	</section>
);

export default Landing;
