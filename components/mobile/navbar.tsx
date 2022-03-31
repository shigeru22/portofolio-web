import SVG from "react-inlinesvg";

interface IMobileNavbarProps {
	iconSrc: string;
}

function MobileNavbar({ iconSrc }: IMobileNavbarProps) {
	return (
		<div className="flex justify-between items-center w-full h-24 px-8 py-6 bg-white">
			<SVG src={ iconSrc } className="w-8 h-8 fill-black" />
		</div>
	);
}

export default MobileNavbar;
