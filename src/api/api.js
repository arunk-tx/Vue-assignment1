import axios from 'axios'

export const postapi = {
    async getPosts() {
         const response = await axios.get('http://localhost:3000/posts')    
         return response
     }
};