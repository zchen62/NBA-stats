import React, { Component } from 'react';
import { TopNavBar } from './TopBar';
import { Main } from './Main';

class App extends Component {
    render() {
        return (
            <div className="App">
                <TopNavBar/>
                <Main/>
            </div>
        );
    }
}

export default App;
