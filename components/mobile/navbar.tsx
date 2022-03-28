import Image from "next/image";
import { MenuAlt4Icon } from "@heroicons/react/outline";

interface IMobileNavbarProps {
	iconSrc: string;
}

function MobileNavbar({ iconSrc }: IMobileNavbarProps) {
	return (
		<div className="flex justify-between items-center w-full h-24 px-8">
			<div className="relative h-8 aspect-square">
				<Image src={ iconSrc } alt="Website Icon" layout="fill" className="h-8 aspect-square" />
			</div>
			<button type="button">
				<MenuAlt4Icon className="h-6 stroke-light-0" />
			</button>
		</div>
	);
}

export default MobileNavbar;
