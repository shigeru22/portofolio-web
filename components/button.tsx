import { MouseEventHandler, useState } from "react";
import SVG from "react-inlinesvg";
import { motion } from "framer-motion";
import { getSimpleIconLink } from "../utils/simple-icons";

interface IButtonProps {
	iconSlug: string;
	iconSource?: "simpleicon" | "url";
	label: string;
	onClick?: MouseEventHandler<HTMLButtonElement>;
}

function Button({ iconSlug, iconSource, label, onClick }: IButtonProps) {
	const [ isHovered, setHovered ] = useState(false);

	return (
		<div onMouseEnter={ () => setHovered(true) } onMouseLeave={ () => setHovered(false) } className="flex h-full">
			<div className="flex justify-end w-0.5 h-full">
				<motion.div
					animate={ isHovered ? "hovered" : "default" }
					variants={ {
						hovered: {
							width: "0%",
							transition: {
								duration: 0.15,
								ease: "easeOut"
							}
						},
						default: {
							width: "100%",
							transition: {
								duration: 0.15,
								ease: "easeOut"
							}
						}
					} }
					className="bg-light-0 dark:bg-dark-100" />
			</div>
			<div className="relative flex min-w-50 h-16">
				<div className="absolute top-0 left-0 w-full h-full -z-20">
					<motion.div
						initial="default"
						animate={ isHovered ? "hovered" : "default" }
						variants={ {
							hovered: {
								width: "100%",
								transition: {
									duration: 0.15,
									ease: "easeOut"
								}
							},
							default: {
								width: "0%",
								transition: {
									duration: 0.15,
									ease: "easeOut"
								}
							}
						} }
						className="h-full bg-light-0 dark:bg-dark-100" />
				</div>
				<button type="button" onClick={ onClick } className="absolute top-0 left-0 flex items-center gap-x-4 h-full px-6 py-4">
					<div className="h-9 aspect-square">
						<SVG src={ typeof(iconSource) === "undefined" || iconSource === "simpleicon" ? getSimpleIconLink("jsdelivr", iconSlug) : iconSlug } className={ `w-9 h-9 ${ isHovered ? "fill-white dark:fill-black" : "fill-black dark:fill-white" }` } />
					</div>
					<span className={ `${ !isHovered && "lg:invisible" } font-semibold text-2xl ${ isHovered && "text-white dark:text-dark-0" }` }>{ label }</span>
				</button>
			</div>
		</div>
	);
}

export default Button;
