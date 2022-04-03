import { useState, useEffect, useRef, useContext } from "react";
import Image from "next/image";
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
		<>
			{
				(navbarProps.isDialogOpened && navbarProps.target === TargetComponent.Screenshot) &&
				<div ref={ rootDiv } className="fixed top-0 left-0 w-screen bg-white bg-opacity-90">
					<div className="absolute h-1/2 bottom-0 left-0 -z-10">
						<div className="flex flex-col gap-y-6 h-full px-6 ml-8 border-l-2 border-light-0" />
					</div>
					<div className="flex items-center w-full h-full pr-8 mx-8">
						<div className="flex flex-col gap-y-4 w-full pl-6 pr-8 border-l-2 border-light-0">
							<div className="relative w-full shadow-md" style={ { aspectRatio: ratio.toString() } }>
								<Image
									src={ `/projects/${ src }` }
									alt={ alt }
									layout="fill"
									onLoadingComplete={ dimen => setRatio(dimen.naturalWidth / dimen.naturalHeight) } />
							</div>
							<div className="flex justify-between items-center h-8">
								<div className="h-8 aspect-square">
									<button type="button" onClick={ () => changeScreenshot(ChangeScreenshotType.DECREMENT) } className={ `${ currentIndex === 0 && "hidden" } w-full h-full p-1 hover:bg-light-0` }>
										<ChevronLeftIcon className="h-6 stroke-light-0 hover:stroke-white aspect-square z-20" />
									</button>
								</div>
								<div className="flex-grow">
									<h3 className="font-medium text-center text-xl text-light-0">{ description }</h3>
								</div>
								<div className="h-8 aspect-square">
									<button type="button" onClick={ () => changeScreenshot(ChangeScreenshotType.INCREMENT) } className={ `${ currentIndex === maxIndex - 1 && "hidden" } w-full h-full p-1 hover:bg-light-0` }>
										<ChevronRightIcon className="h-6 stroke-light-0 hover:stroke-white aspect-square z-20" />
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			}
		</>
	);
}

export default ScreenshotModal;