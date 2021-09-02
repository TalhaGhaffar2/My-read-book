import React, { Component } from 'react'
import './App.css'
import Header from './components/header'
import Shelff from './components/shelff'
import Search from './components/search'
import * as BooksAPI from './BooksAPI'
 


class bookshelf extends Component{
  state = {
    showSearchPage: false,
    books: [],
  };

componentDidMount(){
BooksAPI.getAll().then(resp => this.setState({books: resp}))
console.log("There", BooksAPI.getAll());
}

changeBookShelf = (book,shelf)=>{
  console.log(book, shelf)
  const books = this.state.books.find(b => b.id === book.id);
  if (books) {
    books.shelf = shelf;
    this.setState(currentState => ({
      books: currentState.books
    }));
  } else {
      book.shelf = shelf;
      this.setState(preState => ({
        books: preState.books.concat(book)
    }));
  }
  BooksAPI.update(book, shelf);
      }


  render(){
    return(   

    <div className ='app'>
     
    {this.state.showSearchPage ? (
         <div className="search-books-bar">
        <button className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</button>
          <Search books ={this.state.books}
           allBook={this.state.books} changeShelf={this.changeBookShelf}/>  
     </div>
        ):( 
         <div className = " list-books">
      <Header/>
      <Shelff allBook={this.state.books} changeShelf={this.changeBookShelf}/>
      <div className="open-search">
           <button onClick={() => this.setState({ showSearchPage: true })}>Add a book</button>
         </div> 
      </div>
        )} 
        
      </div>
    )
  }
}
export default bookshelf;