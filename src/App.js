import React from 'react';
import {
  BrowserRouter as Router,
  Link
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
                    <li><Link to ='/how_it_works'>How it works</Link></li>
                    <li><Link to ='/causes'>Causes</Link></li>                
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="#login">Login</Link></li>
                    <li><Link to="#register">Register</Link></li>
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
