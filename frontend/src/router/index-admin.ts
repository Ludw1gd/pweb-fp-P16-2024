import { createRouter, createWebHistory } from 'vue-router';
import AdminDashboard from '@/views/AdminDashboard.vue';
import Items from '@/views/Items.vue';
import Operators from '@/views/Operators.vue';
import Summary from '@/views/Summary.vue';

const routes = [
  {
    path: '/',
    name: 'AdminDashboard',
    component: AdminDashboard,
    children: [
      { path: 'items', name: 'Items', component: Items },
      { path: 'operators', name: 'Operators', component: Operators },
      { path: 'summary', name: 'Summary', component: Summary },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;