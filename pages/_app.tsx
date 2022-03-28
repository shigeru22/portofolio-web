import "../styles/globals.css";
import type { AppProps } from "next/app";
import MobileNavbar from "../components/mobile/navbar";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<div className="flex flex-col w-screen h-screen">
			<MobileNavbar iconSrc="/kyuu.svg" />
			<Component { ...pageProps } />
		</div>
	);
}

export default MyApp;
