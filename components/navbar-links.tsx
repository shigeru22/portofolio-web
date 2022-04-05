import Link from "next/link";

interface INavbarLinksProps {
	active: string;
	onNavbarItemClick?: (target: boolean) => void;
}

function NavbarLinks({ active, onNavbarItemClick }: INavbarLinksProps) {
	return (
		<>
			<Link href="/" passHref>
				<a onClick={ () => typeof(onNavbarItemClick) !== "undefined" && onNavbarItemClick(false) } className={ `font-medium text-3xl ${ active === "home" ? "text-light-0 " : "text-light-20" } cursor-pointer` }>Home</a>
			</Link>
			<Link href="/portfolio" passHref>
				<a onClick={ () => typeof(onNavbarItemClick) !== "undefined" && onNavbarItemClick(false) } className={ `font-medium text-3xl ${ active === "portfolio" ? "text-light-0 " : "text-light-20" } cursor-pointer` }>Portfolio</a>
			</Link>
			<Link href="/about" passHref>
				<a onClick={ () => typeof(onNavbarItemClick) !== "undefined" && onNavbarItemClick(false) } className={ `font-medium text-3xl ${ active === "about" ? "text-light-0 " : "text-light-20" } cursor-pointer` }>About</a>
			</Link>
		</>
	);
}

export default NavbarLinks;
