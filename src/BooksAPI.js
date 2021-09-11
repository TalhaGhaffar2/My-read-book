import axios from "axios"

const api = "https://reactnd-books-api.udacity.com"


// Generate a unique token for storing your bookshelf data on the backend server.
let token = localStorage.token
if (!token)
  token = localStorage.token = Math.random().toString(36).substr(-8)

const headers = {
  'Accept': 'application/json',
  'Authorization': token
}


    export async function get(bookId) {
      
      const response = await axios.get(`${api}/books${bookId}`,{headers});
      const data = await response.data.book;
      return data;
    }
  
  export async function getAll() {
    
    const response = await axios.get(`${api}/books`,{headers});
    const data = await response.data.books;
    return data;
  }
  export const  update = async(book, shelf) =>
  await fetch(`${api}/books/${book.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ shelf })
  }).then(res => res.json())

export const search = async(query) =>
  await fetch(`${api}/search`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ query })
  }).then(res => res.json())
    .then(data => data.books)
console.log('search',search("fitness"))



