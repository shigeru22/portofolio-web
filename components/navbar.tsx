import { useState } from "react";
import Link from "next/link";
import { MenuAlt4Icon, XIcon } from "@heroicons/react/outline";

interface INavbarProps {
	active: string;
}

function Navbar({ active }: INavbarProps) {
	const [ isNavbarOpened, setNavbarOpened ] = useState(false);

	function onNavbarItemClick() {
		setNavbarOpened(false);
	}

	return (
		<>
			<div className="absolute top-0 right-0 mr-8 mt-8 z-10">
				<button type="button" onClick={ () => setNavbarOpened(!isNavbarOpened) }>
					{
						!isNavbarOpened
							? <MenuAlt4Icon className="h-6 stroke-light-0" />
							: <XIcon className="h-6 stroke-light-0" />
					}
				</button>
			</div>
			{
				isNavbarOpened &&
				<div className="absolute h-screen w-screen bg-white bg-opacity-90">
					<div className="absolute bottom-0 left-0">
						<div className="flex flex-col gap-y-4 h-56 pl-6 ml-8 border-l-2 border-light-0">
							<Link href="/" passHref>
								<a onClick={ () => onNavbarItemClick() } className={ `font-medium text-4xl ${ active === "home" ? "text-light-0 " : "text-light-20" } cursor-pointer` }>Home</a>
							</Link>
							<Link href="/portfolio" passHref>
								<a onClick={ () => onNavbarItemClick() } className={ `font-medium text-4xl ${ active === "portfolio" ? "text-light-0 " : "text-light-20" } cursor-pointer` }>Portfolio</a>
							</Link>
							<Link href="/about" passHref>
								<a onClick={ () => onNavbarItemClick() } className={ `font-medium text-4xl ${ active === "about" ? "text-light-0 " : "text-light-20" } cursor-pointer` }>About</a>
							</Link>
						</div>
					</div>
				</div>
			}
		</>
	);
}

export default Navbar;
