import axios from 'axios'

export const postapi = {
    async getPosts() {
         const response = await axios.get('http://localhost:3000/posts')    
         return response
     },
     async getPostsById(id) {
        const response = await axios.get('http://localhost:3000/posts/' + id) 
        console.log("api re", response)   
        return response
    },
    async deletePostById(id) {
        const response = await axios.delete('http://localhost:3000/posts/' + id) 
        console.log("api re", response)   
        return response
    }
};