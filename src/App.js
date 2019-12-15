import React from 'react';
import Search from './components/Search';
import Display from './components/Display';
import Main from './components/Main';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

//////////////////////////////
//App
//Frontpage of application,  routes traffic to different pages

class App extends React.Component {

    render() {
                //Router Component Defines where the router looks for routes
                //Link tags trigger routes
                //Switch tag defines where routes will appear
                //routes define which route triggers its display
        return (
            <>
            <header>
                <h1>Savvy Hotspots</h1>
            </header>



            <Router>
            <nav>

                <Link to="/">Home</Link>
                <Link to="/historic">Historic</Link>
                <Link to="/tybee">Tybee</Link>
                <Link to="/southside">Southside</Link>
                <Link to="/search">Search</Link>
            </nav>

            <Switch>

                <Route exact path="/">
                    <Main/>
                </Route>
                <Route path="/historic">
                    <h1>Historic Savannah</h1>
                    <Display key="name" zip="31401"/>
                </Route>
                <Route path="/tybee">
                    <h1>Tybee Island</h1>
                    <Display key="name2" zip="11230"/>
                </Route>
                <Route path="/southside">
                    <h1>Southside Savannah</h1>
                    <Display key="name4" zip="10005"/>
                </Route>
                <Route path="/search">
                    <Search/>
                </Route>
            </Switch>

        </Router>
            </>
        )
    }
}

export default App
