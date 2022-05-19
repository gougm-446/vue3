import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
const routes: Array<RouteRecordRaw> = [
    {
        path: "/",
        name: "form",
        redirect:'/baseComponents',
        component: () => import("../views/home.vue"),  // 懒加载组件
        children: [
            {
                path: "/baseComponents",
                name: "form",
                component: () => import("../components/baseComponents.vue"),  // 懒加载组件
            },
            {
                path: "/baseForm",
                name: "baseForm",
                component: () => import("../components/baseForm.vue"),  // 懒加载组件
            },
            {
                path: "/baseUpload",
                name: "baseUpload",
                component: () => import("../components/baseUpload.vue"),  // 懒加载组件
            },
            {
                path: "/baseTable",
                name: "baseTable",
                component: () => import("../components/baseTable.vue"),  // 懒加载组件
            },
        ]
    },

];
const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router;