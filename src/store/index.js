import axios from 'axios';
import { createStore } from 'vuex'
import authHeader from '@/service/auth-header';

const data = JSON.parse(localStorage.getItem("user"));
const initUser = data ? true : false;
const initId = data ? data.id : 0;

export default createStore({
  state: {
    user: null,
    userId: initId,
    posts: null,
    loggedIn: initUser,
  },
  getters: {
    stateLoggedIn: (state) => state.loggedIn,
    statePosts: (state) => state.posts,
    stateUser: (state) => state.user,
    stateUserId: (state) => state.userId,
  },
  actions: {
    async Register({dispatch},data) {
      await axios.post('api/auth/register',data)
      let userData = {
        email:data.email,
        password:data.password
      }
      await dispatch("Login",userData);
    },
    async Login({commit},userData){
      const response = await axios.post("api/auth/login",userData);
      localStorage.setItem("user",JSON.stringify(response.data));
      commit("setUser",userData.email);
      commit("setUserId",response.data.id);
    },
    Logout({commit}) {
      localStorage.removeItem("user");
      commit("logOut");
    },
    async GetPosts({commit}) {
      const dataPosts = await axios.get("api/post/all");
      commit("setPosts",dataPosts);
    },
    async CreatePost({dispatch},dataPost) {
      await axios.post("api/post/create",dataPost,{ headers: authHeader() });
      await dispatch("GetPosts");
    },
    async EditPosts({dispatch},dataPost) {
      await axios.post("api/post/edit",dataPost,{ headers: authHeader() });
      await dispatch("GetPosts");
    },
    async DeletePosts({dispatch},dataPost) {
      await axios.post("api/post/delete",dataPost,{ headers: authHeader() });
      await dispatch("GetPosts");
    },
  },
  mutations: {
    setUser(state,userName) {
      state.user = userName;
      state.loggedIn = true;
    },
    setUserId(state,userId) {
      state.userId = userId
    },
    logOut(state) {
      state.user = null;
      state.loggedIn = false;
    },
    setPosts(state,posts) {
      state.posts = posts;
    },
    
  },
  modules: {
  }
})
