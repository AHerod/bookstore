import React from "react";
import {fbase, firebaseApp} from "../firebase";

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
            loggedIn: false,
            email: "",
            password: ""
        };
    }

    handleLoginChange = (event) => {
        this.setState({

            [event.target.name]: event.target.value

        })
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
            books: [...this.state.books, newBook]
        })
        event.currentTarget.reset();
    }

    componentDidMount() {
        this.ref = fbase.syncState("bookstore/books", {
            context: this,
            state: "books"
        });
    }

    componentWillUnmount() {
        fbase.removeBinding(this.ref)
    }

    authenticate = (event) => {
        event.preventDefault();

        firebaseApp.auth().signInWithEmailAndPassword(this.state.email, this.state.password)

            //passed
            .then( () => {
                this.setState({
                    loggedIn: true
                })
            })
            //failed
            .catch( () => {
                console.log("Cannot enter");
            })
        console.log(`${this.state.email} ${this.state.password}`);

        this.setState({
            loggedIn: false
        })
    }

    render() {
        return (
            <div>
                {!this.state.loggedIn &&
                    <form onSubmit={this.authenticate}>
                        <input type="text" placeholder="email" id="email" name="email" onChange={this.handleLoginChange} value={this.state.email}/>
                        <input type="password" id="password" name="password" onChange={this.handleLoginChange} value={this.state.password}/>
                        <button type="submit">Login</button>
                    </form>
                }
                {this.state.loggedIn &&
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
                }
            </div>


        )
    }
}

