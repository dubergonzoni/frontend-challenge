import { createRouter, createWebHistory } from 'vue-router';
import PastelIdeias from '../components/PastelIdeias.vue';

const routes = [
  {
    path: '/',
    redirect: '/pastel-ideias'
  },
  {
    path: '/pastel-ideias',
    name: 'pastel-ideias',
    component: PastelIdeias
  },
  // suas outras rotas aqui
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
