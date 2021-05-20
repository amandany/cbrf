import React from "react";
import './App.css';
import Navbar from "./components/navbar";
import MainPage from "./components/valuteList/mainPage";
import {Route, Switch} from "react-router-dom";
import Converter from "./components/converter";

function App() {
    return (
        <div className="app">

            <Navbar/>

            <Switch>
                <Route path="/" component={MainPage}
                       exact
                />

                <Route path="/converter" component={Converter}/>

            </Switch>
        </div>
    );
}

export default App;
