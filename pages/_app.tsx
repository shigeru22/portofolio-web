import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import MobileNavbar from "../components/mobile/navbar";
import Navbar from "../components/navbar";

function MyApp({ Component, pageProps }: AppProps) {
	const router = useRouter();
	const pathArray = router.pathname.split("/");

	function getPath() {
		switch(pathArray[1]) {
			case "": return "home";
			case "portfolio": return "portfolio";
			case "about": return "about";
			default: return "";
		}
	}

	return (
		<div className="flex flex-col w-screen h-screen">
			<div className="top-0 w-full">
				<MobileNavbar iconSrc="/kyuu.svg" />
			</div>
			<div className="h-full overflow-y-auto">
				<Component { ...pageProps } />
			</div>
			<Navbar active={ getPath() } />
		</div>
	);
}

export default MyApp;
