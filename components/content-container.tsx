import { MouseEventHandler, useState } from "react";
import { ChevronLeftIcon } from "@heroicons/react/outline";

interface IContentContainerProps {
	onBackClick?: MouseEventHandler<HTMLButtonElement>;
	children: JSX.Element | JSX.Element[];
}

function ContentContainer({ onBackClick, children }: IContentContainerProps) {
	const [ isHovered, setHovered ] = useState(false);

	return (
		<>
			{
				typeof(onBackClick) !== "undefined" &&
				<div className="flex h-16">
					<div className="flex justify-end w-0.5 h-full">
						<div className="h-full bg-light-0" style={ { width: isHovered ? "0%" : "100%" } } />
					</div>
					<div className="flex min-w-50 h-full">
						<button type="button" onMouseOver={ () => setHovered(true) } onMouseOut={ () => setHovered(false) } onClick={ onBackClick } className={ `flex items-center gap-x-4 px-6 py-4 ${ isHovered && "bg-light-0" }` }>
							<div className="h-9 aspect-square">
								<ChevronLeftIcon className={ `h-9 stroke-1 ${ !isHovered ? "stroke-light-0" : "stroke-white" } aspect-square` } />
							</div>
							<span className={ `${ !isHovered && "hidden" } font-semibold text-2xl ${ isHovered && "text-white" }` }>Back</span>
						</button>
					</div>
				</div>
			}
			<div className="min-h-full w-full space-y-4 pl-6 pt-2 pb-4 border-l-2 border-light-0">
				{ children }
			</div>
		</>
	);
}

export default ContentContainer;
