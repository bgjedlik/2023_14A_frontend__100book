import Axios from './dataservice.js';

export default{
    getAllBook(){
        return Axios.get('/books')
            .then(resp =>{
                // console.log(resp.data);
                return resp.data;
            })
            .catch(err =>{
                // console.log(err);
                return Promise.reject(err.response)
            })
    },
    getAllAuthor(){
        return Axios.get('/get-all-authors')
            .then(resp =>{
                // console.log(resp.data);
                return resp.data;
            })
            .catch(err =>{
                // console.log(err);
                return Promise.reject(err.response)
            })
    },
    getBooksByAuthor(authorName){
        return Axios.get(`/book-by-author/${authorName}`)
            .then(resp =>{
                // console.log(resp.data);
                return resp.data;
            })
            .catch(err =>{
                // console.log(err);
                return Promise.reject(err.response)
            })
    },
    getRandomBooks(count){
        return Axios.get(`/random-books/${count}`)
            .then(resp =>{
                // console.log(resp.data);
                return resp.data;
            })
            .catch(err =>{
                // console.log(err);
                return Promise.reject(err.response)
            })
    }
}