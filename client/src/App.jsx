import React, { Component } from 'react'
import { BrowserRouter } from 'react-router-dom';
import ContentRouter from 'app/ContentRouter';
import AppNavbar from 'app/AppNavbar';
import { Provider } from 'react-redux'
import store from './store'

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <AppNavbar />
                    <ContentRouter />
                </BrowserRouter>
            </Provider>
        )
    }
}

export default App