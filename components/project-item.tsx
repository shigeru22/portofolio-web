import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface IProjectItemProps {
	id: number;
	name: string;
	description: string;
	iconSrc: string;
}

function ProjectItem({ id, name, description, iconSrc }: IProjectItemProps) {
	const [ isHovered, setHovered ] = useState(false);

	return (
		<div className="flex">
			<div className="flex justify-end w-0.5 min-h-24">
				<div className="bg-light-0" style={ { width: isHovered ? "0%" : "100%" } } />
			</div>
			<div className="flex w-full min-h-24">
				<Link href={ `/portfolio/${ id }` } passHref>
					<button type="button" onMouseOver={ () => setHovered(true) } onMouseOut={ () => setHovered(false) } className={ `flex items-center gap-x-4 h-full px-6 ${ isHovered && "bg-light-0" }` }>
						<div className="relative h-20 aspect-square">
							<Image src={ iconSrc } alt={ `${ name } icon` } layout="fill" className={ `${ !isHovered && "-z-10" }` } />
						</div>
						<div className={ `${ !isHovered && "hidden" } flex flex-col gap-y-1` }>
							<h3 className={ `font-semibold text-left text-2xl ${ isHovered && "text-white" } leading-tight` }>{ name }</h3>
							<h4 className={ `font-medium text-left text-lg ${ isHovered && "text-white" } leading-tight` }>{ description }</h4>
						</div>
					</button>
				</Link>
			</div>
		</div>
	);
}

export default ProjectItem;
