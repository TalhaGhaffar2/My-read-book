
import React , {Component} from "react"
import * as BooksAPI from '../BooksAPI';
import Shelf from './shelf';

class Search extends Component {
    state = {
        query: "",
        Books: []
      }; 
      queryBooks = query => {
       
          let Results = [];
          BooksAPI.search(query).then(results => {
              Results = results.map(result => {
                result.shelf = this.addShelf(result);
                return result;
              });
              this.setState({
                Books: Results
              });  
          })
      };  
  addShelf(result) {
        let Shelf = this.props.books.find(book => book.id === result.id);
        return Shelf
      }
      render() {
        return (
          <div className="search-books">
           <div className="search-books-input-wrapper">  
                <input
                  onChange={event => this.queryBooks(event.target.value)}
                  placeholder="Search by title"
                  type="text"
                />
    
              </div>
            <div className="search-books-results">
                <Shelf
                  books={this.state.Books}
                  changeShelf={this.props.changeShelf}
                />
            </div> 
          </div>  
          
        );
      }
    }
      export default Search;

