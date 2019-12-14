import React from 'react';
import Search from './components/Search';
import Display from './components/Display';
import Main from './components/Main';
import './App.css';

class App extends React.Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }
    render() {
        return (
            <>
            <header>
                <h1>Savvy Hotspots</h1>
            </header>
            <nav>
                <a href='#'>Home</a>
                <a href='#'>Historic</a>
                <a href='#'>Tybee</a>
                <a href='#'>Southside</a>
                <a href='#'>Search</a>
            </nav>
            <Main />
            </>
        )
    }
}

export default App
