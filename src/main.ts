import { createApp } from "vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faHome, faTable, faIdCard } from "@fortawesome/free-solid-svg-icons";
import { faTwitter, faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { MotionPlugin } from "@vueuse/motion";
import App from "./App.vue";
import router from "./router";
import "./assets/index.css";

library.add(
	faHome,
	faTable,
	faIdCard,
	faTwitter,
	faLinkedin,
	faGithub
);

createApp(App)
	.component("font-awesome-icon", FontAwesomeIcon)
	.use(router)
	.use(MotionPlugin)
	.mount("#app");
