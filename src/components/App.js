import React, {Component} from 'react';
import '../App.css';
import AdminPanel from "./AdminPanel";
import Order from "./Order";
import Header from "./Header";
import Inventory from "./Inventory";
import "../sass/main.css";

class App extends Component {
    render() {
        return (
            <div className="app">
                <Header/>
                <Order/>
                <Inventory/>
                <AdminPanel/>
            </div>
        );
    }
}

export default App;
