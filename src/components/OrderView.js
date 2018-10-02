import React from "react";

export default class OrderView extends React.Component{

    render(){
        return(
            <div>
                <h1>{this.props.book.author} <i>{this.props.book.title}</i></h1>
                <button onClick={ (event) => this.props.removeFromOrder(this.props.book.title, this.props.book.isbn)  }> Remove </button>
            </div>
        )
    }
}