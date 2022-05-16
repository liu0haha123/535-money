import Vue from 'vue';
import VueRouter, {RouteConfig} from 'vue-router';
import Home from '@/views/Home.vue';
import Money from '@/views/Money.vue';
import Labels from '@/views/Labels.vue';
import Statistics from '@/views/Statistics.vue';


Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
    {
      path:"/",
      redirect :"money"
    },
    {
        path: '/money',
        name: 'Money',
        component: Money
    },
    {
        path: '/labels',
        name: 'Labels',
        component: Labels
    },
    {
        path: '/statistics',
        name: 'Statistics',
        component: Statistics
    },
];

const router = new VueRouter({
    routes
});

export default router;
