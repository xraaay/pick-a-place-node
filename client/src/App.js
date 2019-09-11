import React, { Component } from 'react'
import { BrowserRouter } from 'react-router-dom';
import ContentRouter from 'app/ContentRouter';
import AppNavbar from 'app/AppNavbar';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <AppNavbar />
                <ContentRouter />
            </BrowserRouter>
        )
    }
}

export default App