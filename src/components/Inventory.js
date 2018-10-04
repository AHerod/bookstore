import React from "react";
import BookView from "./BookView";

export default class Inventory extends React.Component{

    render(){

        // const bookListing = this.props.books.map((element, index )=> {
        //     return  <BookView key = {index} book = {element} addToOrder = {this.props.addOrder}/>
        // });
        return (
            <div className="inventory">
                <h1>Inventory</h1>
                    {/*{bookListing}*/}
            </div>
        )
    }
}

