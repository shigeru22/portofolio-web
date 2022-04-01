import "../styles/globals.css";
import { useEffect, useRef } from "react";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import MobileNavbar from "../components/mobile/navbar";
import Navbar from "../components/navbar";

function MyApp({ Component, pageProps }: AppProps) {
	const router = useRouter();
	const pathArray = router.pathname.split("/");

	const rootDiv = useRef<HTMLDivElement>(null);

	useEffect(() => {
		function onResize() {
			if(rootDiv.current) {
				rootDiv.current.style.minHeight = `${ window.innerHeight }px`;
			}
		}

		onResize();
		window.addEventListener("resize", onResize);

		return () => {
			window.removeEventListener("resize", onResize);
		};
	});

	function getPath() {
		switch(pathArray[1]) {
			case "": return "home";
			case "portfolio": return "portfolio";
			case "about": return "about";
			default: return "";
		}
	}

	return (
		<div ref={ rootDiv } className="flex flex-col w-screen">
			<div className="sticky top-0 w-full">
				<MobileNavbar iconSrc="/kyuu.svg" />
			</div>
			<div className="flex flex-col flex-grow overflow-y-auto">
				<Component { ...pageProps } />
			</div>
			<Navbar active={ getPath() } />
		</div>
	);
}

export default MyApp;
