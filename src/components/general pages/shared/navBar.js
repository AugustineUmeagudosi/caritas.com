import React from 'react';

const NavBar = () =>{
    return(
    // <!-- ========== NAVIGATION ========== --> 
    <nav className="navbar navbar-fixed-top">
    <div className="container-fluid">
        <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="index.html">
                <p className = 'light-logo' style={{color:'#fff',fontSize:'30px', fontWeight:'bold', marginTop:'10px'}}>Caritas.com</p>
                <p className = 'dark-logo' style={{color:'#000',fontSize:'30px', fontWeight:'bold', marginTop:'10px'}}>Caritas.com</p>
                {/* <img src="images/logo-light.svg" alt="Caritas Logo" height="40" className="light-logo"/>
                <img src="images/logo-dark.svg" alt="Caritas Logo" height="40" className="dark-logo"/> */}
            </a>
        </div> {/* end navbar-header */}

        <div id="navbar" className="navbar-collapse collapse">
            <ul className="nav navbar-nav navbar-right">
                <li><a href="index.html"> How it works</a></li>
                <li><a href="index.html"> Causes</a></li>                
                <li><a href="about.html">About Us</a></li>
                <li><a href="contact.html">Login</a></li>
                <li><a href="contact.html">Register</a></li>
                <li className="left-separator"><a href="mailto:info@caritas.com"><i className="fa fa-envelope"></i> info@caritas.com</a></li>
            </ul> {/* end navbar-nav */}

        </div> {/* end nav-collapse */}
    </div> {/* end container */}
    </nav>
    
    )
}
export default NavBar