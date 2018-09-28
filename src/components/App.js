import React, {Component} from 'react';
import AdminPanel from "./AdminPanel";
import Order from "./Order";
import Header from "./Header";
import Inventory from "./Inventory";
import BookView from "./BookView";
import "../sass/main.css";

class App extends Component {
    constructor() {
        super();
        this.state = {
            books: []
        }
    }

    addNewBook = (book) => {

        let newBooks = [...this.state.books];

        newBooks.push(book);

        this.setState({
            books: newBooks
        })

    }

    render() {
        return (
            <div className="app">
                <Header className="header"/>
                <div className="wrapper-section">
                    <Order className="order"/>
                    <Inventory className="inventory" books={this.state.books}/>
                    <AdminPanel books={this.state.books} addBook={this.addNewBook}/>
                </div>
            </div>
        );
    }
}

export default App;
