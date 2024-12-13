import { createRouter, createWebHistory } from "vue-router";
import LoginForm from "@/views/LoginForm.vue";

const routes = [
  { 
    path: "/",
    component: LoginForm
  },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});