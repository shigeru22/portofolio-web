import "../styles/globals.css";
import { useState, useEffect, useRef, createContext } from "react";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import SVG from "react-inlinesvg";
import Navbar from "../components/navbar";
import NavbarLinks from "../components/navbar-links";
import MobileNavbar from "../components/mobile/navbar";
import { IContextProps, INavbarDataProps, TargetComponent } from "../types/context";

const contextValues: IContextProps = {
	navbarProps: {
		isDialogOpened: false,
		target: TargetComponent.None,
		onCloseClick: undefined
	},
	setNavbarProps: updateNavbarProps
};

const context = createContext<IContextProps>(contextValues);

function updateNavbarProps(data: INavbarDataProps) {
	contextValues.navbarProps = data;
}

function MyApp({ Component, pageProps }: AppProps) {
	const router = useRouter();
	const pathArray = router.pathname.split("/");

	const [ navbarData, setNavbarData ] = useState<INavbarDataProps>(contextValues.navbarProps);

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

	useEffect(() => {
		if(rootDiv.current) {
			const body = document.body;

			if(navbarData.isDialogOpened) {
				body.classList.add("overflow-hidden");
			}
			else {
				body.classList.remove("overflow-hidden");
				body.classList.length <= 0 && body.removeAttribute("class");
			}
		}
	}, [ navbarData.isDialogOpened ]);

	function getPath() {
		switch(pathArray[1]) {
			case "": return "home";
			case "portfolio": return "portfolio";
			case "about": return "about";
			default: return "";
		}
	}

	const Provider = context.Provider;

	return (
		<Provider value={ {
			navbarProps: navbarData,
			setNavbarProps: setNavbarData
		} }>
			<div ref={ rootDiv } className="flex flex-col lg:flex-row w-screen">
				<div className="sticky lg:hidden top-0 w-full">
					<MobileNavbar iconSrc="/kyuu.svg" />
				</div>
				<div className="shrink-0 hidden lg:flex flex-col justify-between w-72 h-screen px-16 pt-14">
					<SVG src="/kyuu.svg" className="w-12 2xl:w-16 h-12 2xl:h-16 fill-black dark:fill-white" />
					<div className="flex flex-col gap-y-6 2xl:gap-y-8 h-56 2xl:h-64 pl-6 border-l-2 border-light-0 dark:border-dark-80">
						<NavbarLinks active={ getPath() } />
					</div>
				</div>
				<div className="flex flex-col flex-grow lg:h-screen overflow-y-auto">
					<Component { ...pageProps } />
				</div>
				<div>
					<Navbar active={ getPath() } />
				</div>
			</div>
		</Provider>
	);
}

export { context };
export default MyApp;
