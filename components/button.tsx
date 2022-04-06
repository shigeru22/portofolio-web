import { MouseEventHandler, useState } from "react";
import SVG from "react-inlinesvg";
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
		<div className="flex h-full">
			<div className="flex justify-end w-0.5 h-full">
				<div className="bg-light-0 dark:bg-dark-100" style={ { width: isHovered ? "0%" : "100%" } } />
			</div>
			<div className="flex h-16">
				<button type="button" onMouseOver={ () => setHovered(true) } onMouseOut={ () => setHovered(false) } onClick={ onClick } className={ `flex items-center gap-x-4 px-6 py-4 ${ isHovered && "bg-light-0 dark:bg-dark-100" }` }>
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
