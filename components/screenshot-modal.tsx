import { useState, useEffect, useRef, useContext } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/outline";
import { context } from "../pages/_app";
import { TargetComponent } from "../types/context";

interface IScreenshotModalProps {
	src: string;
	alt: string;
	description: string;
	currentIndex: number;
	maxIndex: number;
	onArrowClick: (index: number) => void;
}

function ScreenshotModal({ src, alt, description, currentIndex, maxIndex, onArrowClick }: IScreenshotModalProps) {
	const { navbarProps } = useContext(context);
	const [ ratio, setRatio ] = useState(16 / 9);

	const rootDiv = useRef<HTMLDivElement>(null);

	useEffect(() => {
		function onResize() {
			if(rootDiv.current) {
				rootDiv.current.style.height = `${ window.innerHeight }px`;
				rootDiv.current.style.minHeight = `${ window.innerHeight }px`;
			}
		}

		onResize();
		window.addEventListener("resize", onResize);

		return () => {
			window.removeEventListener("resize", onResize);
		};
	});

	const enum ChangeScreenshotType {
		INCREMENT,
		DECREMENT
	}

	function changeScreenshot(type: ChangeScreenshotType) {
		switch(type) {
			case ChangeScreenshotType.DECREMENT:
				currentIndex > 0 && onArrowClick(currentIndex - 1);
				break;
			case ChangeScreenshotType.INCREMENT:
				currentIndex < maxIndex - 1 && onArrowClick(currentIndex + 1);
				break;
		}
	}

	return (
		<AnimatePresence>
			{
				(navbarProps.isDialogOpened && navbarProps.target === TargetComponent.Screenshot) &&
				<motion.div
					ref={ rootDiv }
					key="navModal"
					initial="hidden"
					animate="visible"
					exit="hidden"
					variants={ {
						hidden: {
							opacity: 0,
							transition: { duration: 0.15 }
						},
						visible: {
							opacity: 1,
							transition: { duration: 0.25 }
						}
					} }
					className="fixed top-0 left-0 w-screen bg-white dark:bg-black bg-opacity-90">
					<div className="absolute h-1/2 bottom-0 left-0 -z-10">
						<div className="flex flex-col gap-y-6 h-full px-6 ml-8 md:ml-36 2xl:ml-56 border-l-2 border-light-0 dark:border-dark-100" />
					</div>
					<div className="flex items-center w-full h-full pr-8 mx-8 md:mx-36 2xl:ml-56">
						<div className="flex flex-col gap-y-4 w-full pl-6 pr-8 md:pr-64 2xl:pr-96 border-l-2 border-light-0 dark:border-dark-100">
							<div className="relative w-full shadow-md" style={ { aspectRatio: ratio.toString() } }>
								<Image
									src={ `/projects/${ src }` }
									alt={ alt }
									layout="fill"
									onLoadingComplete={ dimen => setRatio(dimen.naturalWidth / dimen.naturalHeight) } />
							</div>
							<div className="flex justify-between items-center h-8">
								<div className="h-8 md:h-10 aspect-square">
									<button type="button" onClick={ () => changeScreenshot(ChangeScreenshotType.DECREMENT) } className={ `${ currentIndex === 0 && "hidden" } w-full h-full p-1 hover:bg-light-0 hover:dark:bg-dark-100` }>
										<ChevronLeftIcon className="h-6 md:h-8 stroke-light-0 dark:stroke-dark-100 hover:stroke-white hover:dark:stroke-dark-0 aspect-square z-20" />
									</button>
								</div>
								<div className="flex-grow">
									<h3 className="font-medium text-center text-xl md:text-2xl text-light-0 dark:text-dark-100">{ description }</h3>
								</div>
								<div className="h-8 md:h-10 aspect-square">
									<button type="button" onClick={ () => changeScreenshot(ChangeScreenshotType.INCREMENT) } className={ `${ currentIndex === maxIndex - 1 && "hidden" } w-full h-full p-1 hover:bg-light-0 hover:dark:bg-dark-100` }>
										<ChevronRightIcon className="h-6 md:h-8 stroke-light-0 dark:stroke-dark-100 hover:stroke-white hover:dark:stroke-dark-0 aspect-square z-20" />
									</button>
								</div>
							</div>
						</div>
					</div>
				</motion.div>
			}
		</AnimatePresence>
	);
}

export default ScreenshotModal;
