import { createRouter, createWebHistory } from 'vue-router';
import loginPage from "../components/loginPage";
import mainPage from "../components/mainPage";
import registerPage from "../components/registerPage";
import editPage from "../components/editPage";
import createPost from "../components/createPost";
import NotFound from "../components/404";

const routes = [
  {
    path:"/",
    component: mainPage
  },
  {
    path: '/login',
    component: loginPage
  },
  {
    path: '/register',
    component: registerPage
  },
  {
    path: '/create_post',
    component: createPost
  },
  {
    path: '/edit_post/:id',
    component: editPage
  },
  {
    path: '/:pathMatch(.*)*',
    component: NotFound
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
