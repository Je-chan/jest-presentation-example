import { createApp } from 'vue';
import App from './App.vue';
// 특정한 폴더 안에 있는 index 라는 이름의 파일을 가져올 때는 생략할 수 있다.
import router from './routes';
import store from './store';
import loadImage from './plugins/loadImage';

// use 메소드는 플러그인을 적용하고자 할 때 사용
createApp(App).use(router).use(store).use(loadImage).mount('#app');
