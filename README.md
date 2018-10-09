# Bloc Jams React Project

Bloc Jams is a my first React SPA that was built as part of my curriculum through Bloc.  It is an SPA for albums and music that uses React Router to create a responsive page that works on mobile as well.  I started out by building the basic routes with React Router.  After that I built up the functionality of the library, album, and music player controls using React.  The page was then finally styled through the use of Semantic UI - React.  This was my first time working to build an SPA completely with React.  It was a learning experience in managing state and props, while building a responsive webpage.

## Built With

* [React](https://github.com/facebook/react) - JS library to build frontend
* [React Router](https://github.com/ui-router/react) - Built state based route for SPA
* [Semantic UI - React](https://github.com/Semantic-Org/Semantic-UI-React) - Built styling for responsive mobile site\

## Screenshots

> FullScreen Views

![Landing Page Screenshot - Imgur](https://i.imgur.com/gQ4Hrit.png?1)
![Library Page Screenshot - Imgur](https://i.imgur.com/tsYxipW.png?1)
![Album Page Screenshot - Imgur](https://i.imgur.com/p9Pd8c9.png?1)

> Mobile View

![Imgur](https://i.imgur.com/kP2hXnP.png?1)

> [More screenshots of my Bloc Jams build](https://imgur.com/a/XnkFjDB)

## Assignment Checkpoints and Build Steps

### Checkpoint 1 - Configuration

* Create boilerplate with `create-react-app`
* Create git repository
* Add music and image assets

### Checkpoint/Assignment 2 - Routing

* Add `react-router` to app
* Create routes for landing, library, and album
* Create links for landing, library, and album
* Setup components (imports and exports) for landing, library, and album

### Checkpoint 3 - Components: Landing

* Added selling points with titles and descriptions for site landing page

### Checkpoint 4 - Components: Library

* Added data for albums (Using static album data, rather than API JSON for now) and set to state
* Set up library as a class with albums mapped out.
* Added route for individual albums with URL and passed parameters to Albums component
* Set up albums as links using `react-router-dom`

### Checkpoint 5 - Components: Album

* Imported album from source data and created album as state
* Added album information layout in component
* Mapped song information to table with track, title, and duration

### Checkpoint 6 - Audio Playback

* Created audio component from source data
* Added play and pause functions with set track function called and assigned to click function
* Added click function to song component

### Checkpoint 7 - Play Bar: Buttons

* Added Play Bar class component and built up player buttons
* Added previous and next click functions to Album component
* Added click functions (play/pause, previous, next) to Play Bar component

### Checkpoint 8 - Play Bar: Range Inputs

* Added volume and time slider functionality
* Formatted display of time for current time and time remaining

### Checkpoint 9 - Styling

* Added Semantic UI to make for easy, responsive, and mobile styling integration
* Added final display styling across all routes

## Author

Theran Brigowatz is a Full-stack Web Developer currently out of Seoul, South Korea, but transitioning back to the US.  Check him out at the following:

* [theran.co](https://www.theran.co)
* theran.brigowatz@gmail.com
* [twitter.com/wellBuilt](https://www.twitter.com/wellBuilt)
* [github.com/theranbrig](https://www.github.com/theranbrig)

> Made with :heart: and :coffee:.

## Acknowledgements

> Thank you to all of the great artists out there who make their artwork availabe to share.  Links to the artists for the photos are from below.  

  *  <a href="http://www.freepik.com"> Landing page main image designed by fanjianhua / Freepik</a>
  * [Landing Page Photos](https://unsplash.com/collections/2105142/landing-page-images)
  * [Album Artwork - Unsplash Album](https://unsplash.com/collections/2105148/albums-photos)
