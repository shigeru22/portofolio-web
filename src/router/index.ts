import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";

const routes: Array<RouteRecordRaw> = [
	{
		path: "/",
		name: "Home",
		component: Home,
		meta: {
			title: "Home"
		}
	},
	{
		path: "/portofolio",
		name: "Portofolio",
		component: () => import("../views/Portofolio.vue"),
		meta: {
			title: "Portofolio"
		},
		children: [
			{
				path: "",
				name: "Project List",
				component: () => import("../views/portofolio-views/ProjectList.vue")
			},
			{
				path: ":id",
				name: "Project Details",
				component: () => import("../views/portofolio-views/ProjectDetails.vue")
			}
		]
	},
	{
		path: "/about",
		name: "About",
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () => import("../views/About.vue"),
		meta: {
			title: "About"
		}
	}
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes
});

router.beforeEach((to, _, next) => {
	const title = to.meta.title as string;
	document.title = title != undefined ? `Shigeru | ${ title }` : "Shigeru";
	next();
});

export default router;
