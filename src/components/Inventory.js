import React from "react";
import BookView from "./BookView";

export default class Inventory extends React.Component{

    render(){

        const bookListing = this.props.books.map(element => {
            return  <BookView book = {element}/>
        });
        return (
            <div className="inventory">
                <h1>Inventory</h1>
                    {bookListing}
            </div>
        )
    }
}

