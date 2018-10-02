import React, {Component} from 'react';
import AdminPanel from "./AdminPanel";
import Order from "./Order";
import Header from "./Header";
import Inventory from "./Inventory";
import "../sass/main.css";

class App extends Component {
    constructor() {
        super();
        this.state = {
            books: [],
            order: []
        }
    }

    addNewBook = (book) => {

        let newBooks = [...this.state.books];

        newBooks.push(book);

        this.setState({
            books: newBooks
        })

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
                    <AdminPanel books={this.state.books} addBook={this.addNewBook}/>
                </div>
            </div>
        );
    }
}

export default App;
