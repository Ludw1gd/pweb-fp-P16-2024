import { createRouter, createWebHistory } from "vue-router";
import LoginForm from "@/views/LoginForm.vue";
import Rules from "@/views/Rules.vue";

const routes = [
  { 
    path: "/",
    component: LoginForm
  },
  {
    path: "/rules",
    component: Rules // Add the rules route
  }
];

export default createRouter({
  history: createWebHistory(),
  routes,
});