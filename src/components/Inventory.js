import React from "react";
import BookView from "./BookView";
import {fbase} from "../firebase";

export default class Inventory extends React.Component{


    constructor(){
        super();
        this.state = {
            books: []
        }
    }
    componentDidMount(){
        this.ref = fbase.syncState("bookstore/books", {
            context: this,
            state: "books"
        });
    }

    componentWillUnmount(){
        fbase.removeBinding(this.ref)
    }

    render(){

        const bookListing = this.state.books.map((element, index )=> {
            return  <BookView key = {index} book = {element} addToOrder = {this.props.addOrder}/>
        });
        return (
            <div className="inventory">
                <h1>Inventory</h1>
                    {bookListing}
            </div>
        )
    }
}

