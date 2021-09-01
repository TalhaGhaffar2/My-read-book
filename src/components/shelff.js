import React, { Component } from "react";
import Shelf from "./shelf";


class Shelff extends Component {
render (){
    const allBook = this.props.allBook;
    console.log('here', allBook)
    console.log(this.props)
    const currentlyReading = allBook.filter(allBook => allBook.shelf === 'currentlyReading')
    const wantToRead = allBook.filter(allBook => allBook.shelf === 'wantToRead')
    const read = allBook.filter(allBook => allBook.shelf === 'read')

    return(
        <div className="list-books-content">
              <div>
                  <Shelf books = {currentlyReading} title ={'Currently Reading '} changeShelf={this.props.changeShelf}/>
                  <Shelf books = {wantToRead} title ={'Want To Read'} changeShelf={this.props.changeShelf}/>
                  <Shelf books = {read} title = {'Read'} changeShelf={this.props.changeShelf}/>
       </div>
  </div>
    )
}
}

export default  Shelff