import { createApp } from "vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faHome, faTable, faIdCard, faQuoteRight } from "@fortawesome/free-solid-svg-icons";
import { faTwitter, faLinkedin, faGithub, faPhp, faBootstrap, faUnity, faAndroid, faVuejs } from "@fortawesome/free-brands-svg-icons";
import App from "./App.vue";
import router from "./router";
import "./assets/index.css";

library.add(
	faHome,
	faTable,
	faIdCard,
	faTwitter,
	faLinkedin,
	faGithub,
	faQuoteRight,
	faPhp,
	faBootstrap,
	faUnity,
	faAndroid,
	faVuejs
);

createApp(App)
	.component("font-awesome-icon", FontAwesomeIcon)
	.use(router)
	.mount("#app");
