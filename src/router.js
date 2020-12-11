import Vue from 'vue';
import Router from 'vue-router';
import Home from './main/Home.vue';
import Skil from './main/About.vue';
import Content from './main/Content.vue';
import Experience from './main/Experience.vue';
import Quesiton from './main/Question.vue';
import Answer from './main/Answer.vue';

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {path: '/', component: Home},
        {path: '/skil', component: Skil},
        {path: '/expe', component: Experience},
        {path: '/content', component: Content},
        {path: '/question', component: Quesiton},
        {path: '/answer', component: Answer},
    ]
});