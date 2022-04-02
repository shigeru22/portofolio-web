import { useEffect, useRef, useContext } from "react";
import Link from "next/link";
import { MenuAlt4Icon, XIcon } from "@heroicons/react/outline";
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
					{
						!navbarProps.isDialogOpened
							? <MenuAlt4Icon className="h-6 stroke-light-0" />
							: <XIcon className="h-6 stroke-light-0" />
					}
				</button>
			</div>
			{
				(navbarProps.isDialogOpened && navbarProps.target === TargetComponent.Navbar) &&
				<div ref={ rootDiv } className="fixed top-0 w-screen bg-white bg-opacity-90">
					<div className="absolute bottom-0 left-0">
						<div className="flex flex-col gap-y-6 h-56 pl-6 ml-8 border-l-2 border-light-0">
							<Link href="/" passHref>
								<a onClick={ () => onNavbarItemClick(false) } className={ `font-medium text-3xl ${ active === "home" ? "text-light-0 " : "text-light-20" } cursor-pointer` }>Home</a>
							</Link>
							<Link href="/portfolio" passHref>
								<a onClick={ () => onNavbarItemClick(false) } className={ `font-medium text-3xl ${ active === "portfolio" ? "text-light-0 " : "text-light-20" } cursor-pointer` }>Portfolio</a>
							</Link>
							<Link href="/about" passHref>
								<a onClick={ () => onNavbarItemClick(false) } className={ `font-medium text-3xl ${ active === "about" ? "text-light-0 " : "text-light-20" } cursor-pointer` }>About</a>
							</Link>
						</div>
					</div>
				</div>
			}
		</>
	);
}

export default Navbar;
