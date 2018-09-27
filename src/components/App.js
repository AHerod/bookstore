import React, {Component} from 'react';
import AdminPanel from "./AdminPanel";
import Order from "./Order";
import Header from "./Header";
import Inventory from "./Inventory";
import "../sass/main.css";

class App extends Component {
    render() {
        return (
            <div className="app">
                <Header className="header"/>
                <div className="wrapper-section">
                    <Order className="order"/>
                    <Inventory className="inventory"/>
                    <AdminPanel/>
                </div>
            </div>
        );
    }
}

export default App;
