import React from "react";


export default class Header extends React.Component{

    constructor(){
        super();
        this.state = {
            bookstoreName : "Some books"
        }
    }
    render(){
        return (
            <div className="header">
                <h1>Header {this.state.bookstoreName}</h1>
            </div>
        )
    }
}

