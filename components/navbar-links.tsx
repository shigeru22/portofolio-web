import Link from "next/link";

interface INavbarLinksProps {
	active: string;
	onNavbarItemClick?: (target: boolean) => void;
}

function NavbarLinks({ active, onNavbarItemClick }: INavbarLinksProps) {
	return (
		<>
			<Link href="/" passHref>
				<a onClick={ () => typeof(onNavbarItemClick) !== "undefined" && onNavbarItemClick(false) } className={ `font-medium text-3xl 2xl:text-4xl ${ active === "home" ? "text-light-0 dark:text-dark-100" : "text-light-20 dark:text-dark-80" } cursor-pointer` }>Home</a>
			</Link>
			<Link href="/portfolio" passHref>
				<a onClick={ () => typeof(onNavbarItemClick) !== "undefined" && onNavbarItemClick(false) } className={ `font-medium text-3xl 2xl:text-4xl ${ active === "portfolio" ? "text-light-0 dark:text-dark-100" : "text-light-20 dark:text-dark-80" } cursor-pointer` }>Portfolio</a>
			</Link>
			<Link href="/about" passHref>
				<a onClick={ () => typeof(onNavbarItemClick) !== "undefined" && onNavbarItemClick(false) } className={ `font-medium text-3xl 2xl:text-4xl ${ active === "about" ? "text-light-0 dark:text-dark-100" : "text-light-20 dark:text-dark-80" } cursor-pointer` }>About</a>
			</Link>
		</>
	);
}

export default NavbarLinks;
