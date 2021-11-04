import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";

const routes: Array<RouteRecordRaw> = [
	{
		path: "/",
		name: "Home",
		component: Home
	},
	{
		path: "/portofolio",
		name: "Portofolio",
		component: () => import("../views/Portofolio.vue"),
		children: [
			{
				path: "",
				name: "Project List",
				component: () => import("../views/ProjectList.vue")
			},
			{
				path: ":id",
				name: "Project Details",
				component: () => import("../views/ProjectDetails.vue")
			}
		]
	},
	{
		path: "/about",
		name: "About",
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () => import("../views/About.vue")
	}
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes
});

export default router;
