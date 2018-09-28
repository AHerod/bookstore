import React from "react";

export default class BookView extends React.Component{

    render(){
        return(
            <div>
                <h1>{this.props.book.author} <i>{this.props.book.title}</i></h1>
                <p>{this.props.book.description}</p>
                <img src={this.props.book.image} width="75" height="100" alt="book cover"/>
            </div>
        )
    }
}