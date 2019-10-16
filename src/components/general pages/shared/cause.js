import React from 'react';

const Cause = (props) =>{
    return(
        <div className="col-md-4 col-sm-6">
            <div className="campaign-card">
                {/* <img src="https://placehold.it/1080x718?text=cause-img-2" alt="" className="img-responsive"/> */}
                <img src = {props.picture} alt={props.alt} className="img-responsive"/>
                <div className="campaign-info">
                    <h5>{props.caption}</h5>
                    <div className="category">
                        <span>{props.category}</span>
                    </div> {/* end category */}
                    <p>{props.description}</p>
                </div> {/* end campaign-info */}

                <div className="campaign-status">
                    <div className="progress-bar"><span style={{width: props.progressBar, backgroundColor:'#27ae60'}}></span></div>
                        <p>{props.amountContributed} of {props.amountRequired} raised</p>
                    </div> {/* end cam[paign-status] */}

                    <div className="card-footer">
                        <a href="nothing" className="link-left">Donate Now</a>
                        <a href="nothing" className="link-right">Read More</a>
                    </div> {/* end card-footer */}

                <div className="clearfix"></div>
            </div> {/* end campaign-card */}
        </div>    
    )
}
export default Cause