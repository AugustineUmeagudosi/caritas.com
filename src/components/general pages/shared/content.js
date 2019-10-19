import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Homepage from '../homepage/homepage';
import AllCauses from '../all_causes';
import About from '../about/about';
// import HowItWorks from '../how_it_works';

const Content = () => (
    <Switch>
        <Route exact path = "/" component = {Homepage} />
        <Route path = "/causes" component = {AllCauses} />
        <Route path ='/about' component = {About} />
    </Switch>
)
    

export default Content;