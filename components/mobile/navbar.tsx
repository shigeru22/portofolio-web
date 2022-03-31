import SVG from "react-inlinesvg";
import { MenuAlt4Icon } from "@heroicons/react/outline";

interface IMobileNavbarProps {
	iconSrc: string;
}

function MobileNavbar({ iconSrc }: IMobileNavbarProps) {
	return (
		<div className="flex justify-between items-center w-full h-24 px-8 py-6 bg-white z-10">
			<SVG src={ iconSrc } className="w-8 h-8 fill-black" />
			<button type="button">
				<MenuAlt4Icon className="h-6 stroke-light-0" />
			</button>
		</div>
	);
}

export default MobileNavbar;
