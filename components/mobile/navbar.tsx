import Link from "next/link";
import { motion } from "framer-motion";
import SVG from "react-inlinesvg";

interface IMobileNavbarProps {
	iconSrc: string;
}

function MobileNavbar({ iconSrc }: IMobileNavbarProps) {
	return (
		<motion.div
			animate={ { y: 0 } }
			transition={ {
				from: -32, duration: 0.6, ease: "easeOut"
			} }
			className="flex justify-between items-center w-full h-24 px-8 py-6 bg-white dark:bg-black">
			<Link href="/" passHref>
				<SVG src={ iconSrc } className="w-8 h-8 fill-black dark:fill-white" />
			</Link>
		</motion.div>
	);
}

export default MobileNavbar;
