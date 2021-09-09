
import React,{useState}  from "react"
import * as BooksAPI from '../BooksAPI';
import Shelf from './shelf';

function Search(props){

  const [Books,setBooks] = useState([])

  
  let  queryBooks = query => {
    let Results = [];
          BooksAPI.search(query).then(results => {
              Results = results.map(result => {
                result.shelf = addShelf(result);
                return result;
              });
              setBooks([
              ...Results
               ]);  
          })
      };  
      let  addShelf = (result) =>{
        let Shelf = props.books.find(book => book.id === result.id);
        return Shelf
      };
     
        return (
          <div className="search-books">
          <div className="search-books-bar">
          <button className="close-search" onClick={() => props.setnewstate(false)}>Close</button>
           <div className="search-books-input-wrapper">  
                <input
                  onChange={event => queryBooks(event.target.value)}
                  placeholder="Search by title"
                  type="text"
                />
    
              </div>
              </div>
            <div className="search-books-results">
                <Shelf
                  books = {Books}
                  changeShelf={props.changeShelf}
                />
            </div> 
          </div>  
          
        );
    }
      export default Search;

