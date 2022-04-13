import { useState } from "react";
import Link from "next/link";
import { ChevronLeftIcon } from "@heroicons/react/outline";
import { motion } from "framer-motion";

interface IContentContainerProps {
	backHref?: string;
	backLabel?: string;
	flexMode?: boolean;
	children: JSX.Element | JSX.Element[];
}

function ContentContainer({ backHref, backLabel, flexMode, children }: IContentContainerProps) {
	const [ isHovered, setHovered ] = useState(false);

	return (
		<div className="flex flex-col flex-grow h-full lg:pt-14">
			<div className={ `flex-grow ${ flexMode ? "flex flex-col" : "" } min-h-full w-full` }>
				{
					typeof(backHref) !== "undefined" &&
					<Link href={ backHref } passHref>
						<div onMouseEnter={ () => setHovered(true) } onMouseLeave={ () => setHovered(false) } className="flex h-16">
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
									className="h-full bg-light-0 dark:bg-dark-100" />
							</div>
							<div className="relative flex min-w-50 h-full">
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
								<button type="button" className="absolute top-0 left-0 flex items-center gap-x-4 px-6 py-4">
									<div className="h-9 aspect-square -z-10">
										<ChevronLeftIcon className={ `h-9 stroke-1 ${ !isHovered ? "stroke-light-0 dark:stroke-dark-100" : "stroke-white dark:stroke-light-0" } aspect-square` } />
									</div>
									<span className={ `${ !isHovered && "lg:invisible" } font-semibold text-2xl ${ isHovered && "text-white dark:text-dark-0" } -z-10` }>{ typeof(backLabel) !== "undefined" ? backLabel : "Back" }</span>
								</button>
							</div>
						</div>
					</Link>
				}
				<div className={ `flex-grow ${ flexMode ? "flex flex-col" : "" } space-y-4 md:space-y-6 2xl:space-y-8 pl-6 2xl:pl-8 py-4 border-l-2 border-light-0 dark:border-dark-100` }>
					{ children }
				</div>
			</div>
		</div>
	);
}

export default ContentContainer;
