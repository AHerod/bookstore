import React from "react";


export default class AdminPanel extends React.Component{

    render(){
        return (
            <div className="adminPanel">
                <h1>AdminPanel</h1>
                <form>
                    <label htmlFor="bookNameInput"> Book Name: </label>
                    <input type="text" placeholder="name" id ="Name" name = "Name"/>
                    <label htmlFor="bookNameAuthor"> Book Author: </label>
                    <input type="text" placeholder="author" id ="Author" name = "Author"/>
                    <textarea placeholder="Book description:" id="Description" name="Description"/>
                    <label for="bookOnStock"> Book On Stock:
                    <input type="checkbox" id="bookOnStock" name="bookOnStock"/>
                    </label>
                    <input type="text" placeholder="image" id="Image" name="Image"/>
                    <button type="submit" className="button-form-submit">Add</button>
                </form>
            </div>
        )
    }
}

