import Axios from './dataservice.js';

export default{
    getAllBook(){
        return Axios.get('/books')
            .then(resp =>{
                // console.log(resp.data);
                return resp.data;
            })
            .catch(err =>{
                console.log(err);
            })
    },
}