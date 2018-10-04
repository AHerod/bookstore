import React from "react";
import {fbase} from "../firebase";

export default class AdminPanel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            books: [],
            book: {
                title: "",
                author: "",
                description: "",
                onStock: true,
                image: "",
                isbn: ""
            },
        };
    }

    handleChange = (event) => {


        let newBook;
        if (event.target.name === "onStock") {

            newBook = {
                ...this.state.book,
                [event.target.name]: event.target.checked

            }


        } else {
            newBook = {

                ...this.state.book,
                [event.target.name]: event.target.value
            };

        }

        this.setState({

            book: newBook
        })
    };

    addNewBook = (event) => {

        event.preventDefault();

        let newBook = {...this.state.book};

        // this.props.addBook(newBook);

        this.setState({
            books: [... this.state.books, newBook]
        })
        event.currentTarget.reset();
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
    render() {
        return (
            <div className="adminPanel">
                <h1>AdminPanel</h1>
                <form onSubmit={this.addNewBook}>
                    <input type="text" placeholder="title" id="title" name="title" value={this.state.title}
                           onChange={this.handleChange}/>
                    <input type="text" placeholder="author" id="author" name="author" value={this.state.author}
                           onChange={this.handleChange}/>
                    <textarea placeholder="Book description:" id="description" name="description"
                              value={this.state.description} onChange={this.handleChange}/>
                    <label htmlFor="onStock"> Book On Stock:
                        <input type="checkbox" id="onStock" name="onStock" onChange={this.handleChange}
                               value={this.state.onStock}/>
                    </label>
                    <input type="number" placeholder="ISBN" id="isbn" name="isbn" value={this.state.isbn}
                           onChange={this.handleChange}/>

                    <input type="text" placeholder="image path" id="image" name="image" onChange={this.handleChange}
                           value={this.state.image}/>
                    <button type="submit" className="button-form-submit">Add</button>
                </form>
            </div>
        )
    }
}

