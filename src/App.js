import React, {Component} from 'react';
import AdminPanel from "./components/AdminPanel";
import Order from "./components/Order";
import Header from "./components/Header";
import Inventory from "./components/Inventory";
import "./sass/main.css";

class App extends Component {
    constructor() {
        super();
        this.state = {
            order: []
        }
    }

    addToOrder = (book) => {
        this.setState({
            order: [...this.state.order, book]
        })
    }

    removeFromOrder = (title) => {
        this.setState({
            order: this.state.order.filter(book => title !== book.title )
        })
        console.log("DSasd")
    }

    render() {
        return (
            <div className="app">
                <Header className="header"/>
                <div className="wrapper-section">
                    <Order className="order" order = {this.state.order} removeFromOrder = {this.removeFromOrder}/>
                    <Inventory className="inventory" books={this.state.books} addOrder = {this.addToOrder}/>
                </div>
            </div>
        );
    }
}

export default App;
