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

// export const get = (bookId) =>
//    fetch(`${api}/books/${bookId}`, { headers })
//     .then(res => res.json())
//     .then(data => data.book)
    export async function get(bookId) {
      
      const response = await axios.get(`${api}/books${bookId}`,{headers});
      const data = await response.data.book;
      return data;
    }

  // export  const getAll = () =>
  //  fetch(`${api}/books`, { headers })
  //   .then(res => res.json())
  //   .then(data => data.books)
  export async function getAll() {
    
    const response = await axios.get(`${api}/books`,{headers});
    const data = await response.data.books;
    return data;
  }
    console.log('ddd', getAll())


//  export const update = (book, shelf) =>
//    fetch(`${api}/books/${book.id}`, {
//     method: 'PUT',
//     headers: {
//       ...headers,
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify( shelf )
//   }).then(res => res.json())

  export async function update(book,shelf) {
    
    const response = await axios.put(`${api}/books/${book.id}`,{
      headers:{
        ...headers,
        'Content-Type':'application/json'
      },
      body:JSON.stringify(shelf)
    });
    const data = await response.data.book.id
    return data;
  }
console.log(update())

export const search = (query) =>
   fetch(`${api}/search`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ query })
  }).then(res => res.json())
    .then(data => data.books)
console.log('search',search("fitness"))


// export async function search(query) {
 
//   const response = await axios.post(`${api}/search`,{
//     method: 'POST',
//    headers: {
//      ...headers,
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({ query })
//   });
//   let data = await response.data.books.json();
//   return data
// }
// console.log('search',search("fi"))