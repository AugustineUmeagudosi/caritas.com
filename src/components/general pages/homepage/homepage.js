import React from 'react';
import Cause from '../shared/cause';
// import {Link} from 'react-router-dom';
// import {Layout, Header, Navigation, Drawer, Content} from 'react-mdl';

const Homepage = () =>{

    return ( 
        <div>
            {/* <!-- ========== HEADER ========== --> */}
            <header className="head" data-parallax="scroll" data-image-src="" data-speed="0.4">
                <div className="container">
                    <div className="outer">
                        <div className="inner text-center">
                            <div className="animate-title">
                                <ul className="texts" >
                                    <li data-in-effect="fadeInUp" data-out-effect="fadeOutDown" style={{fontSize:'1000em'}}>Alone, we walk...</li>
                                    <li data-in-effect="fadeInUp" data-out-effect="fadeOutDown" style={{fontSize:'10px'}}>Together, we go places!</li>
                                    <li data-in-effect="fadeInUp" data-out-effect="fadeOutDown" style={{fontSize:'10px'}}>You can make difference!</li>
                                    <li data-in-effect="fadeInUp" data-out-effect="fadeOutDown" style={{fontSize:'10px'}}>Yes we can!</li>
                                </ul> {/* end texts */}                            
                            </div>{/* end animate-title */}
                            <h4 style={{color:'#fff'}}>Welcome to caritas: an online community of people commited to a single cause - making our world a better place.</h4>
                            <button type="button" className="btn gw-btn" style={{padding:'10px', fontSize:'20px'}}>How it works</button>
                        </div> {/* end inner */}
                    </div> {/* end outer */}
                </div> {/* end container */}
            </header>

            {/* <!-- ========== COUNTERS SECTION ========== --> */}
            <section className="content-section counters-section">
                <div className="container">
                    <div className="row">

                        <div className="col-md-3 col-sm-6 col-xs-6 counter-title">
                            <h3>Together, we can make difference.</h3>
                        </div>

                        <div className="col-md-3 col-sm-6 col-xs-6 counter-box">
                            <span className="count-icon ion-happy-outline"></span>
                            <div className="count-info">
                                <h3><span className="counter">11000</span>+</h3>
                                <p>Lorem ipsum.</p>
                            </div> {/* end count-info */}
                        </div> {/* end counter-box */}

                        <div className="col-md-3 col-sm-6 col-xs-6 counter-box">
                            <span className="count-icon ion-ios-flag-outline"></span>
                            <div className="count-info">
                                <h3><span className="counter">2200</span>+</h3>
                                <p>Lorem ipsum..</p>
                            </div> {/* end count-info */}
                        </div> {/* end counter-box */}

                        <div className="col-md-3 col-sm-6 col-xs-6 counter-box">
                            <span className="count-icon ion-ios-flame-outline"></span>
                            <div className="count-info">
                                <h3><span className="counter">128</span>+</h3>
                                <p>Lorem ipsum..</p>
                            </div> {/* end count-info */}
                        </div> {/* end counter-box */}

                    </div> {/* end row */}
                </div> {/* end container */}
            </section>

            {/* <!-- ========== CURRENT CAMPAIGNS SECTION ========== --> */}
            <section className="content-section current-campaigns">
                <div className="container">
                    <div className="row">
                        <header className="section-header text-center col-md-8 col-md-offset-2">
                            <h3 className="underline">Current Causes</h3>
                            <h4 className="section-intro">Here are our top picks for the day...</h4>
                        </header>
                    </div> {/* end row */}

                {/* Cause cards */}
                    <div className="col-md-4 col-sm-6">
                        <Cause
                            picture = 'https://placehold.it/1080x718?text=cause-img-1'
                            alt = 'Health picture'
                            caption = 'Lorem ipsum.'
                            category = 'Health'
                            description = 'Consectetur adipisicing elit, sed do lorem ipsum dolor sit amet, eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                            progressBar = '70%'
                            amountContributed = '$10,500.00'
                            amountRequired = '$15,000.00'
                            causeId = '/cause_details'
                            donateCauseId = '/donate'
                        />
                    </div>
                    <div className="col-md-4 col-sm-6">
                        <Cause
                            picture = 'https://placehold.it/1080x718?text=cause-img-2'
                            alt = 'uma right picture'
                            caption = 'Cool ipsum.'
                            category = 'Human Right'
                            description = 'Consectetur adipisicing elit, sed do lorem ipsum dolor sit amet, eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                            progressBar = '20%'                       
                            amountContributed = '$1,500.00'
                            amountRequired = '$15,000.00'
                            causeId = '/cause_details'
                            donateCauseId = '/donate'
                        />
                    </div>
                    <div className="col-md-4 col-sm-6">
                        <Cause
                            picture = 'https://placehold.it/1080x718?text=cause-img-3'
                            alt = 'Infrastructural development picture'
                            caption = 'Ipsum ipsum.'
                            category = 'Infrastructural Development'
                            description = 'Consectetur adipisicing elit, sed do lorem ipsum dolor sit amet, eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                            progressBar = '55%'
                            amountContributed = '$8,500.00'
                            amountRequired = '$15,000.00'
                            causeId = '/cause_details'
                            donateCauseId = '/donate'
                        /> 
                    </div>
                {/* end cause cards */}
                
                    <a href = '/causes'><button type="button" className="btn gw-btn" style={{padding: '10px'}}>See all causes</button></a>

                </div> {/* end container */}
            </section>

            {/* <!-- ========== WHAT CAN YOU DO SECTION ========== --> */}
            <section className="content-section">
                <div className="container">
                    <div className="row">
                        <header className="section-header text-center col-md-8 col-md-offset-2">
                            <h3 className="underline">How can you contribute?</h3>
                            <h5 className="section-intro">At Caritas, everyone has a role to play irrespective of his or her religious, educational, professional,societal, and cultural background.</h5>
                        </header>
                    </div> {/* end row */}

                    <div className="row features-row">
                        <div className="col-md-3 col-sm-6 same-ht">
                            <h4>Upload a cause</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.</p>
                            <i className="bg-icon ion-ios-paper-outline"></i>
                        </div>

                        <div className="col-md-3 col-sm-6 same-ht">
                            <h4>Assess a cause</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.</p>
                            <i className="bg-icon ion-loop"></i>
                        </div>

                        <div className="col-md-3 col-sm-6 same-ht">
                            <h4>Vote for a cause</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.</p>
                            <i className="bg-icon ion-heart"></i>
                        </div>

                        <div className="col-md-3 col-sm-6 same-ht">
                            <h4>Handle projects</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.</p>
                            <i className="bg-icon ion-pizza"></i>
                        </div>

                        <div className="col-md-3 col-sm-6 same-ht">
                            <h4>Become Volunteer</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.</p>
                            <i className="bg-icon ion-ribbon-a"></i>
                        </div>

                        <div className="col-md-6 col-sm-6 text-center black-gradient feature-diff same-ht">
                            <h2>Together, we can make a difference!</h2>
                            <p>Yes, we all can make huge difference with our small initiatives.</p>
                        </div>

                        <div className="col-md-3 col-sm-6 same-ht">
                            <h4>Donate for a cause</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.</p>
                            <i className="bg-icon ion-cash"></i>
                        </div>

                    </div> {/* end row */}
                </div> {/* end container */}
            </section>

            {/* <!-- ========== BECOME VOLUNTEER SECTION ========== --> */}
            <section className="content-section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <img src="https://placehold.it/1080x718?text=charity-img-5" alt="" className="img-responsive img-box"/>
                        </div>
                        <div className="col-md-6">
                            <header className="section-header">
                                <h3 className="underline mtn mbn">Become Volunteer</h3>
                                <h6 className="mt1">Experience the "Inner Peace"!</h6>
                            </header>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                            <blockquote>Think for the people while enjoying life at the same time.
                                <small className="text-muted"> Chuck Feeney</small>
                            </blockquote>
                            <a href="nothing" className="btn gw-btn">Join the Movement</a>
                        </div>
                    </div> {/* end row */}
                </div> {/* end container */}
            </section>

            {/* <!-- ========== ABOUT TRUST ========== --> */}
            <section className="content-section">
                <div className="container">
                    <div className="row">
                        <header className="section-header text-center col-md-8 col-md-offset-2">
                            <h3 className="underline">About the trust</h3>
                            <p className="section-intro">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                        </header>
                    </div> {/* end row */}

                    <div className="row">
                        <div className="col-md-8">
                            <h5 className="underline">The best charity / fundraising site.</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</p>
                            <div className="col-md-5">
                                <blockquote>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                </blockquote>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>

                        <div className="col-md-4">
                            <h5 className="underline">Why Us?</h5>
                            <ul className="ul-style-1">
                                <li><i className="fa fa-star list-icon"></i>Team of more than 200 volunteers.</li>
                                <li><i className="fa fa-send list-icon"></i>Accredited by the government. </li>
                                <li><i className="fa fa-hand-o-right list-icon"></i>Spreading smiles since 20 years. </li>
                                <li><i className="fa fa-thumbs-up list-icon"></i>More than 20 successful campaigns. </li>
                                <li><i className="fa fa-gear list-icon"></i>Most awarded charity trust. </li>
                            </ul>
                            <a href="nothing" className="btn gw-btn">Contact Us</a>
                        </div>
                    </div> {/* end row */}
                </div> {/* end container */}
            </section>

            {/* <!-- ========== RECENT STORIES ========== --> */}
            <section className="content-section">
                <div className="container">
                    <div className="row">
                        <header className="section-header text-center col-md-8 col-md-offset-2">
                            <h3 className="underline">Recent Stories</h3>
                            <p className="section-intro">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                        </header>
                    </div> {/* end row */}

                    <div className="row">
                        <div className="col-md-6 col-sm-6">
                            <div className="story-card">
                                <div className="col-md-5 zero-padding">
                                    <img src="https://placehold.it/1080x718?text=cause-img-4" alt="" className="img-responsive"/>
                                </div>
                                <div className="col-md-7">
                                    <h5 className="mt1"><a href="nothing">Cloths donation camp</a></h5>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                </div>
                                <div className="clearfix"></div>
                            </div> {/* end story-card */}
                        </div>

                        <div className="col-md-6 col-sm-6">
                            <div className="story-card">
                                <div className="col-md-5 zero-padding">
                                    <img src="https://placehold.it/1080x718?text=cause-img-5" alt="" className="img-responsive"/>
                                </div>
                                <div className="col-md-7">
                                    <h5 className="mt1"><a href="nothing">Healthy Lunch Program</a></h5>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                </div>
                                <div className="clearfix"></div>
                            </div> {/* end story-card */}
                        </div>

                        <div className="col-md-6 col-sm-6">
                            <div className="story-card">
                                <div className="col-md-5 zero-padding">
                                    <img src="https://placehold.it/1080x718?text=cause-img-6" alt="" className="img-responsive"/>
                                </div>
                                <div className="col-md-7">
                                    <h5 className="mt1"><a href="nothing">Education Program</a></h5>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                </div>
                                <div className="clearfix"></div>
                            </div> {/* end story-card */}
                        </div>

                        <div className="col-md-6 col-sm-6">
                            <div className="story-card">
                                <div className="col-md-5 zero-padding">
                                    <img src="https://placehold.it/1080x718?text=cause-img-7" alt="" className="img-responsive"/>
                                </div>
                                <div className="col-md-7">
                                    <h5 className="mt1"><a href="nothing">Girls Education Program</a></h5>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                </div>
                                <div className="clearfix"></div>
                            </div> {/* end story-card */}
                        </div>

                    </div> {/* end row */}
                </div> {/* end container */}
            </section>

            {/* <!-- ========== STAY CONNECTED SECTION ========== --> */}
            <section className="content-section black-gradient">
                <div className="container">
                    <div className="row">

                        <div className="col-md-6 col-md-offset-3 text-center subscribe-box">
                            <h3 className="mtn">Stay updated with our events & programs.</h3>
                            <div className="input-group">
                                <input type="text" className="form-control" placeholder="Enter email id..."/>
                                <span className="input-group-btn">
                                    <button className="btn gw-btn" type="button">Subscribe!</button>
                                </span>
                            </div> {/* end input-group */}
                        </div> {/* end subscribe-box */}

                    </div> {/* end row */}
                </div> {/* end container */}
            </section>
        </div>
    )
}
export default Homepage