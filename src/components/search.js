
import React , {Component} from "react"
import * as BooksAPI from '../BooksAPI';
import Shelf from './shelf';

class Search extends Component {
    state = {
        showSearchPage: false,
        query: "",
        queriedBooks: []
      }; 
      queryBooks = query => {
        if (query) {
          let queryResults = [];

    
          BooksAPI.search(query).then(results => {
            if (results && results.length) {
              queryResults = results.map(result => {
                result.shelf = this.addShelf(result);
                return result;
              });
              this.setState({
                queriedBooks: queryResults
              });
            } else {
              this.setState({
                queriedBooks: []
              });
            }
          })
        }
        this.setState({
          query: query.trim()
        });
      };
    
    
  addShelf(result) {
        let hShelf = this.props.books.find(book => book.id === result.id);
        return hShelf
      }
      updateSearchPageState=state=>{
        this.setState({ showSearchPage: state})
      };
    
      render() {
        return (
          <div className="search-books">
            <div className="search-books-bar">
            <div  className = 'close-search' onClick={() => this.setState({ showSearchPage: false })} >
           </div>
              <div className="search-books-input-wrapper">  
                <input
                  onChange={event => this.queryBooks(event.target.value)}
                  placeholder="Search by title"
                  type="text"
                />
    
              </div>
            </div>
            <div className="search-books-results">
                <Shelf
                  books={this.state.queriedBooks}
                  changeShelf={this.props.changeShelf}
                />
            </div>
          </div>     
        );
      }
    }
      export default Search;

