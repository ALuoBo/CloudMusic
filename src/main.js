import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { Swipe, SwipeItem } from 'vant';
import 'vant/lib/index.css';

const app = createApp(App)
app.use(Swipe);
app.use(SwipeItem);
app.mount('#app')
