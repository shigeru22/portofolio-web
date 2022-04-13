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
		<div onMouseEnter={ () => setHovered(true) } onMouseLeave={ () => setHovered(false) } className="flex">
			<div className="flex justify-end w-0.5 min-h-24">
				<div className="bg-light-0 dark:bg-dark-100" style={ { width: isHovered ? "0%" : "100%" } } />
			</div>
			<div className="flex w-full min-h-24">
				<Link href={ `/portfolio/${ id }` } passHref>
					<button type="button" className={ `flex items-center gap-x-4 h-full px-6 ${ isHovered && "bg-light-0 dark:bg-dark-100" } -z-20` }>
						<div className="relative h-12 aspect-square -z-10">
							<Image src={ iconSrc } alt={ `${ name } icon` } layout="fill" objectFit="contain" />
						</div>
						<div className="flex flex-col gap-y-1 -z-10">
							<h3 className={ `font-semibold text-left text-xl md:text-2xl ${ !isHovered ? "text-light-0 dark:text-dark-100" : "text-white dark:text-dark-0" } leading-tight md:leading-tight` }>{ name }</h3>
							<h4 className={ `text-left md:text-lg ${ !isHovered ? "text-light-0 dark:text-dark-100" : "text-white dark:text-dark-0" } leading-tight md:leading-none` }>{ description }</h4>
						</div>
					</button>
				</Link>
			</div>
		</div>
	);
}

export default ProjectItem;
