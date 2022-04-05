import { useEffect, useRef, useContext } from "react";
import { MenuAlt4Icon, XIcon } from "@heroicons/react/outline";
import NavbarLinks from "./navbar-links";
import { context } from "../pages/_app";
import { TargetComponent } from "../types/context";

interface INavbarProps {
	active: string;
}

function Navbar({ active }: INavbarProps) {
	const { navbarProps, setNavbarProps } = useContext(context);

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

	function onNavbarItemClick(dialogOpenedTarget: boolean) {
		const temp = {
			isDialogOpened: navbarProps.isDialogOpened,
			target: !navbarProps.isDialogOpened ? TargetComponent.Navbar : TargetComponent.None,
			onCloseClick: navbarProps.onCloseClick
		};

		temp.isDialogOpened = dialogOpenedTarget;
		setNavbarProps(temp);
	}

	return (
		<>
			<div className="fixed top-0 right-0 mr-8 mt-8 z-10">
				<button type="button" onClick={ () => onNavbarItemClick(!navbarProps.isDialogOpened) }>
					<div>
						{
							!navbarProps.isDialogOpened
								? <MenuAlt4Icon className="lg:hidden h-6 stroke-light-0" />
								: <XIcon className="h-6 stroke-light-0" />
						}
					</div>
				</button>
			</div>
			{
				(navbarProps.isDialogOpened && navbarProps.target === TargetComponent.Navbar) &&
				<div ref={ rootDiv } className="lg:hidden fixed top-0 w-screen bg-white bg-opacity-90">
					<div className="absolute bottom-0 left-0">
						<div className="flex flex-col gap-y-6 h-56 pl-6 ml-8 border-l-2 border-light-0">
							<NavbarLinks active={ active } onNavbarItemClick={ onNavbarItemClick } />
						</div>
					</div>
				</div>
			}
		</>
	);
}

export default Navbar;
