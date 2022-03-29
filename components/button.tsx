import { MouseEventHandler, useState } from "react";
import SVG from "react-inlinesvg";
import { getSimpleIconLink } from "../utils/simple-icons";

interface IButtonProps {
	iconSlug: string;
	label: string;
	onClick?: MouseEventHandler<HTMLButtonElement>;
}

function Button({ iconSlug, label, onClick }: IButtonProps) {
	const [ isHovered, setHovered ] = useState(false);

	return (
		<div className="flex">
			<div className="flex justify-end w-0.5 h-full">
				<div className="bg-light-0" style={ { width: isHovered ? "0%" : "100%" } } />
			</div>
			<div className="flex min-w-50 h-16">
				<button type="button" onMouseOver={ () => setHovered(true) } onMouseOut={ () => setHovered(false) } onClick={ onClick } className={ `flex items-center gap-x-4 px-6 py-4 ${ isHovered && "bg-light-0" }` }>
					<div className="h-9 aspect-square">
						<SVG src={ getSimpleIconLink("jsdelivr", iconSlug) } className={ `h-9 ${ isHovered ? "fill-white" : "fill-black" }` } />
					</div>
					<span className={ `${ !isHovered && "hidden" } font-semibold text-2xl ${ isHovered && "text-white" }` }>{ label }</span>
				</button>
			</div>
		</div>
	);
}

export default Button;
