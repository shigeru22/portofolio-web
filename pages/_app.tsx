import "../styles/globals.css";
import type { AppProps } from "next/app";
import MobileNavbar from "../components/mobile/navbar";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<div className="flex flex-col w-screen h-screen">
			<div className="fixed top-0 w-full">
				<MobileNavbar iconSrc="/kyuu.svg" />
			</div>
			<div className="h-full pt-24">
				<Component { ...pageProps } />
			</div>
		</div>
	);
}

export default MyApp;
