import React from 'react';
import Cause from './shared/cause';

const CauseDetails = () =>{
    return(
        <div>
            {/* <!-- ========== PAGE TITLE ========== --> */}
            <header className="page-title" data-parallax="scroll" data-image-src="http://placehold.it/1080x718?text=kids-img-4" data-speed="0.4" style={{height:'35%'}}>
                <div className="container">
                    <div className="outer" style={{margin:'70px 0px'}}>
                        <div className="inner text-center">
                            <h2>Cause title</h2>
                            <h4 className="mt1">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h4>
                        </div> {/* end inner */}
                    </div> {/* end outer */}
                </div> {/* end container */}
            </header>

            {/* <!-- ========== CURRENT CAMPAIGNS SECTION ========== --> */}
            <section className="content-section current-campaigns">
                <div className="container">
                    <div className="row">
                        <header className="section-header text-center col-md-8 col-md-offset-2">
                            {/* <h3 className="underline">Cause</h3> */}
                            {/* <p className="section-intro">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p> */}
                        </header>
                    </div> {/* end row */}

                    <div className="row">
                        <div className="col-md-9 single-campaign">
                            <div className="campaign-card">
                                <img src="https://placehold.it/1080x718?text=kids-img-3" alt="" className="img-responsive"/>
                                <div className="campaign-info">
                                    <h5>This is title</h5>
                                    <div className="category">
                                        <span>Cause category</span>
                                    </div> {/* end category */}
                                    {/* <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p> */}
                                </div> {/* end campaign-info */}

                                <div className="campaign-status">
                                    <div className="progress-bar"><span style={{width: '10%', backgroundColor:'#27ae60'}}></span></div>
                                    <p>$1,500.00 of $15,000.00 raised</p>
                                </div> {/* end campaign-status */}

                                <button type="button" className="btn gw-btn mt1 mb1">Donate For This Cause</button>

                                <div className="campaign-details">
                                    <h4 className="underline mtn">About The Project</h4>
                                    <p className="dropcap">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                    {/* <blockquote className="col-md-8 col-md-offset-2">Charity is a supreme virtue, and the great channel through which the mercy of God is passed onto mankind.
                                        <small className="text-muted"> Conrad Hilton</small>
                                    </blockquote> */}
                                    <h5>Why You Should Contribute?</h5>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

                                    <h5>Current Status of The Project</h5>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                </div> {/* end campaign-details */}

                                <div className="donate-onpage" id="donate-now">
                                    <div className="text-center">
                                        <h4 className="underline mtn">Donate Now & Spread Smiles</h4>
                                    </div> {/* end text-center */}

                                    <div id="donate-form-wrap" className="donate-form-wrap" style={{padding:'20px 0px'}}>
                                        <form className="donate-form" action="nothing" method="post">

                                            <div className="col-md-5 donate-total-wrap">
                                                <h6 className="underline mb1 mt1">Amount</h6>
                                                <div className="input-group">
                                                    <span className="input-group-addon" id="basic-addon1">$</span>
                                                    <input type="text" className="form-control" placeholder="Enter Amount"/>
                                                </div> {/* end input-group */}
                                            </div> {/* end donate-total-wrap */}

                                            <fieldset id="donate-payment-mode-select" className="col-md-7">
                                                <div id="donate-payment-mode-wrap">
                                                    <h6 className="donate-payment-mode-label underline mtn">Select Payment Method</h6>
                                                    <ul id="donate-gateway-radio-list">
                                                        <li>
                                                            <div className="custom-radio">
                                                                <label for="donate-paypal" className="donate-gateway-option" id="donate-option-paypal">PayPal</label>
                                                                <input type="radio" name="payment-mode" className="donate-gateway" id="donate-paypal" value="paypal"/>
                                                            </div> {/* end custom-radio */}
                                                        </li>
                                                        <li>
                                                            <div className="custom-radio">
                                                                <label for="donate-manual" className="donate-gateway-option donate-gateway-option-selected checked" id="donate-option-manual">Master Card</label>
                                                                <input type="radio" name="payment-mode" className="donate-gateway" id="donate-manual" value="manual" checked="checked"/>
                                                            </div> {/* end custom-radio */}
                                                        </li>
                                                        <li>
                                                            <div className="custom-radio">
                                                                <label for="donate-offline" className="donate-gateway-option" id="donate-option-offline">Paystack</label>
                                                                <input type="radio" name="payment-mode" className="donate-gateway" id="donate-offline" value="offline"/>
                                                            </div> {/* end custom-radio */}
                                                        </li>
                                                    </ul> {/* end donate-gateway-radio-list */}
                                                </div> {/* end donate-payment-mode-wrap */}
                                            </fieldset>

                                            <div id="donate_purchase_form_wrap">
                                                {/* <fieldset id="donate_checkout_user_info" className="mbn"> */}
                                                    <legend className="underline">Personal Info (Optional)</legend>
                                                    <p id="donate-first-name-wrap" className="form-row form-row-first col-md-6">
                                                        <label className="donate-label" for="donate-first"> First Name </label>
                                                        <input className="donate-input required" type="text" name="donate_first" placeholder="First name" id="donate-first" value="" required />
                                                    </p>
                                                    <p id="donate-last-name-wrap" className="form-row form-row-last col-md-6">
                                                        <label className="donate-label" for="donate-last"> Last Name </label>
                                                        <input className="donate-input" type="text" name="donate_last" id="donate-last" placeholder="Last name" value=""/>
                                                    </p>
                                                    <p id="donate-email-wrap" className="form-row form-row-wide col-md-12">
                                                        <label className="donate-label" for="donate-email"> Email Address  </label>
                                                        <input className="donate-input required" type="email" name="donate_email" placeholder="Email address" id="donate-email" value="" required/>
                                                    </p>
                                                {/* </fieldset> */}
                                                {/* <fieldset id="donate_purchase_submit" className="text-center mbn"> */}
                                                    <p id="donate-final-total-wrap" className="form-wrap "> <span className="donate-donation-total-label">Donation Total:</span> <span className="donate-final-total-amount" data-total="25.00">$50.00</span></p>
                                                    <div className="donate-submit-button-wrap donate-clearfix text-center">
                                                        <input type="submit" className="donate-submit donate-btn btn gw-btn" id="donate-purchase-button" name="donate-purchase" value="Donate Now"/>
                                                    </div>
                                                {/* </fieldset> */}
                                            </div>
                                        </form>
                                    </div>
                                </div> {/* end donate-onpage */}

                            </div> {/* end campaign-card */}
                        </div> {/* end single-campaign */}

                        <div className="col-md-3">

                            <h5 className="underline mtn hidden-sm">Related Causes</h5>

                            <Cause className='hidden-sm'
                                picture = 'https://placehold.it/1080x718?text=cause-img-2'
                                alt = 'Infrastructural development picture'
                                caption = 'Ipsum ipsum.'
                                category = 'Infrastructural Development'
                                description = 'Consectetur adipisicing elit, sed do lorem ipsum dolor sit amet, eiusmod tempor incididunt ut labore et dolore magna aliqua...'
                                progressBar = '55%'
                                amountContributed = '$8,500.00'
                                amountRequired = '$15,000.00'
                                causeId = '/cause_details'
                                donateCauseId = '/donate'
                            /> 

                            <Cause className='hidden-sm'
                                picture = 'https://placehold.it/1080x718?text=cause-img-4'
                                alt = 'Infrastructural development picture'
                                caption = 'Ipsum ipsum.'
                                category = 'Infrastructural Development'
                                description = 'Consectetur adipisicing elit, sed do lorem ipsum dolor sit amet, eiusmod tempor incididunt ut labore et dolore magna aliqua...'
                                progressBar = '55%'
                                amountContributed = '$8,500.00'
                                amountRequired = '$15,000.00'
                                causeId = '/cause_details'
                                donateCauseId = '/donate'
                            />

                            <Cause className='hidden-sm'
                                picture = 'https://placehold.it/1080x718?text=cause-img-1'
                                alt = 'Infrastructural development picture'
                                caption = 'Ipsum ipsum.'
                                category = 'Infrastructural Development'
                                description = 'Consectetur adipisicing elit, sed do lorem ipsum dolor sit amet, eiusmod tempor incididunt ut labore et dolore magna aliqua...'
                                progressBar = '55%'
                                amountContributed = '$8,500.00'
                                amountRequired = '$15,000.00'
                                causeId = '/cause_details'
                                donateCauseId = '/donate'
                            /> 

                            <h5 className="underline">Image Gallery</h5>

                            <div className="owl-carousel owl-carousel-single ">
                                <div className="text-center">
                                    <img src="https://placehold.it/1080x718?text=kids-img-3" alt="Sample" />
                                </div> {/* end one slide */}
                                <div className="text-center">
                                    <img src="https://placehold.it/1080x718?text=kids-img-2" alt="Sample" />
                                </div> {/* end one slide */}
                                <div className="text-center">
                                    <img src="https://placehold.it/1080x718?text=kids-img-1" alt="Sample" />
                                </div> {/* end one slide */}
                            </div> {/* end owl-carousel */}

                        </div>

                    </div> {/* end row */}
                </div> {/* end container */}
            </section>
        </div>
    )
}
export default CauseDetails