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
                <h1 className="Title">Savvy Hotspots</h1>
            </header>



            <Router>
            <nav>

                <Link to="/">Home</Link>
                <Link to="/historic">Historic District</Link>
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
                <Route path="/search">
                    <Search/>
                </Route>
            </Switch>

        </Router>
        <footer>
            Application created by Erik Ciceraro and Alex Merced (AlexMercedCoder.com)

        </footer>
            </>
        )
    }
}

export default App
