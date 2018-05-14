import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';
import Library from './components/Library';
import Landing from './components/Landing';
import Album from './components/Album';
import { Menu } from "semantic-ui-react";

class App extends Component {
  render() {
    return (
      <div className='App'>
        {/* Navigation bar sticky */}
        <Menu className='fixed top mini borderless'>
          <Menu.Item header><Link to='/'><img src={require('./data/images/bloc_jams_logo.png')} alt='bloc jams'/></Link></Menu.Item>
          <Menu.Item name='library' position='right' id='library-link'><Link to='/library'>Library<span className='ion-headphone nav-icon'></span></Link></Menu.Item>
        </Menu>
        {/* React Router paths for components */}
        <main>
          <Route exact path='/' component={Landing} />
          <Route path='/library' component={Library} />
          <Route path='/album/:slug' component={Album} />
        </main>
      </div>
    );
  }
}

export default App;
