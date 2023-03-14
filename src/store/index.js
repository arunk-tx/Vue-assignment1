import { createStore } from "vuex";
import {postapi} from '@/api/api'

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
              const data = await postapi.getPosts()
              commit("SET_POSTS", data.data);
            } catch (error) {
              alert(error);
            }
        },
    }
});

export default store;