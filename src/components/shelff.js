import React from "react";
import Shelf from "./shelf";


function Shelff (props) {

    const allBook = props.allBook;
    const currentlyReading = allBook.filter(allBook => allBook.shelf === 'currentlyReading')
    const wantToRead = allBook.filter(allBook => allBook.shelf === 'wantToRead')
    const read = allBook.filter(allBook => allBook.shelf === 'read')

    return(
        <div className="list-books-content">
              <div>
                  <Shelf books = {currentlyReading} title ={'Currently Reading '} changeShelf={props.changeShelf}/>
                  <Shelf books = {wantToRead} title ={'Want To Read'} changeShelf={props.changeShelf}/>
                  <Shelf books = {read} title = {'Read'} changeShelf={props.changeShelf}/>
       </div>
  </div>
    )
}

export default  Shelff