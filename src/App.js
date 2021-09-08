import React,{useState,useEffect} from 'react'
import './App.css'
import Header from './components/header'
import Shelff from './components/shelff'
import Search from './components/search'
import * as BooksAPI from './BooksAPI'

 


function Bookshelf () {

 const [ showSearchPage, setnewstate] = useState(false);
 const [books,setbooks ] = useState([]);


  
 useEffect(() => {
  BooksAPI.getAll()
  .then(data => setbooks(data))
  console.log("There", BooksAPI.getAll());

  
},[])

let changeBookShelf = (book, shelf) =>{
 console.log(book,shelf);
   const bookss = books.find(b => b.id === book.id);
   console.log('books',bookss)
  if (bookss) {
    bookss.shelf = shelf;
    setbooks([
      ...books
     
    ]);
  } else {
      books.shelf = shelf;
     setbooks ([
    ...bookss
    ]);
  }
  BooksAPI.update(book, shelf)
  console.log( BooksAPI.update(book, shelf))
      }
 

    return(   

    <div className ='app'>
     
     {showSearchPage ? (
         <div className="search-books-bar">
        <button className="close-search" onClick={() => setnewstate({showSearchPage: false})}>Close</button>
          <Search  books ={books} />  
     </div> 
      ):(   
         <div className = " list-books">
      <Header/>
      <Shelff allBook={books} 
      changeShelf = {changeBookShelf}
       />
      <div className="open-search">
           <button onClick={() => setnewstate({showSearchPage: true})}>Add a book</button>
         </div> 
      </div>  
         )}   
      </div>
    )
}
export default Bookshelf;