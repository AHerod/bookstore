import React from "react";


export default class Inventory extends React.Component{

    render(){

        const bookListing = this.props.books.map(element => {
            return  <div> {element.title} </div>
        })
        return (
            <div className="inventory">
                <h1>Inventory</h1>
                    {bookListing}
            </div>
        )
    }
}

