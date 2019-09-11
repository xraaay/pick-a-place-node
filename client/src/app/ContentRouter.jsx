import React from 'react';
import { Route, Switch } from 'react-router-dom'
import LandingPage from './LandingPage'
import RollTheDice from './RollTheDice'

class ContentRouter extends React.Component {
    render() {
        return (
            <Switch>
                <Route path="/rtd" component={RollTheDice} />
                <Route path="/" component={LandingPage} />
            </Switch>
        )
    }
}

export default ContentRouter