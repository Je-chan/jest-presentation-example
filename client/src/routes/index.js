import { createRouter, createWebHashHistory } from 'vue-router';
import Home from './Home';
import Grew from './Grew';
import About from './About';
import NotFound from './NotFound';

export default createRouter({
  // Hash 모드
  history: createWebHashHistory(),
  scrollBehavior() {
    return { top: 0 };
  }, // 페이지들을 구분
  routes: [
    {
      path: '/',
      component: Home,
    },
    {
      path: '/author',
      component: About,
    },
    {
      path: '/grew/:id',
      component: Grew,
    },
    {
      // params 의 이름은 중요하지 않고 소괄호 안의 정규표혀식 내용이 중요한 것
      path: '/:notFound(.*)',
      component: NotFound,
    },
  ],
});
