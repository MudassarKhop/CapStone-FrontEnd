import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
	{
		path: "/",
		name: "home",
		component: HomeView,
	},
	{
		path: "/about",
		name: "about",
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: function () {
			return import(/* webpackChunkName: "about" */ "../views/AboutView.vue");
		},
	},
	{
		path: "/flights",
		name: "flights",
		component: function () {
			return import(/* webpackChunkName: "about" */ "../views/FlightsView.vue");
		},
	},
	{
		path: "/login",
		name: "login",
		component: function () {
			return import(/* webpackChunkName: "about" */ "../views/Login.vue");
		},
	},
	{
		path: "/contactus",
		name: "contactus",
		component: function () {
			return import(
				/* webpackChunkName: "about" */ "../views/ContactUsView.vue"
			);
		},
	},
	{
		path: "/flights/:id",
		name: "singleview",
		component: function () {
			return import(/* webpackChunkName: "about" */ "../views/SingleView.vue");
		},
		props: true,
	},
	{
		path: "/admin",
		name: "admin",
		component: function () {
			return import(/* webpackChunkName: "about" */ "../views/AdminLogin.vue");
		},
	},
	{
		path: "/offices",
		name: "offices",
		component: function () {
			return import(/* webpackChunkName: "about" */ "../views/Offices.vue");
		},
	},
	{
		path: "/dashboard",
		name: "dashboard",
		component: function () {
			return import(/* webpackChunkName: "about" */ "../views/AdminDash.vue");
		},
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

export default router;
