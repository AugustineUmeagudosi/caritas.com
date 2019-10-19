import React from 'react';
import {
  BrowserRouter as Router,
} from "react-router-dom";

import Footer from './components/general pages/shared/footer';
import Content from './components/general pages/shared/content';

function App() {
  return (
    <div className="App">
      {/* // <!-- ========== NAVIGATION ========== -->  */}
      <Router>
        <nav className="navbar navbar-fixed-top">
        <div className="container-fluid">
            <div className="navbar-header">
                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                </button>
                <a className="navbar-brand" href="/">
                    <p className = 'light-logo' style={{color:'#fff',fontSize:'30px', fontWeight:'bold', marginTop:'10px'}}>Caritas.com</p>
                    <p className = 'dark-logo' style={{color:'#000',fontSize:'30px', fontWeight:'bold', marginTop:'10px'}}>Caritas.com</p>
                </a>
            </div> {/* end navbar-header */}

            <div id="navbar" className="navbar-collapse collapse">
                <ul className="nav navbar-nav navbar-right">
                    <li><a href ='/how_it_works'>How it works</a></li>
                    <li><a href ='/causes'>Causes</a></li>                
                    <li><a href="/about">About Us</a></li>
                    <li><a href="#login">Login</a></li>
                    <li><a href="#register">Register</a></li>
                    <li className="left-separator"><a href="mailto:info@caritas.com"><i className="fa fa-envelope"></i> info@caritas.com</a></li>
                </ul> {/* end navbar-nav */}

            </div> {/* end nav-collapse */}
        </div> {/* end container */}
        </nav>

        <Content/>

        <Footer/>
      </Router>
    </div>
  );
}

export default App;
