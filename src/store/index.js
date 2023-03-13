import { createStore } from "vuex";
import axios from "axios";

const store = createStore({
    state:{
        posts: [],
    },
    getters:{
        getPosts: (state) => state.posts,
    },
    mutations:{
        SET_POSTS(state, posts) {
            state.posts = posts;
        },
    },
    actions:{
        async getPosts({ commit }) {
            try {
              const data = await axios.get(
                "http://localhost:3000/posts"
              );
              commit("SET_POSTS", data.data);
            } catch (error) {
              alert(error);
              console.log(error);
            }
        },
    }
});

export default store;