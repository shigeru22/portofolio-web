import { useState, useEffect, useRef, useContext } from "react";
import Image from "next/image";
import { context } from "../pages/_app";
import { TargetComponent } from "../types/context";

interface IScreenshotProps {
	src: string;
	alt: string;
	description: string;
	priority: boolean;
}

function Screenshot({ src, alt, description, priority }: IScreenshotProps) {
	const { navbarProps, setNavbarProps } = useContext(context);
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

	function toggleScreenshotModal(target: boolean) {
		const temp = {
			isDialogOpened: target,
			target: !navbarProps.isDialogOpened ? TargetComponent.Screenshot : TargetComponent.None,
			onCloseClick: navbarProps.onCloseClick
		};

		setNavbarProps(temp);
	}

	return (
		<>
			<button type="button" onClick={ () => toggleScreenshotModal(true) }>
				<Image
					src={ `/projects/${ src }` }
					alt={ alt }
					width={ ratio * 160 }
					height={ 160 }
					priority={ priority }
					onLoadingComplete={ dimen => setRatio(dimen.naturalWidth / dimen.naturalHeight) } />
			</button>
			{
				(navbarProps.isDialogOpened && navbarProps.target === TargetComponent.Screenshot) &&
				<div ref={ rootDiv } className="fixed top-0 left-0 w-screen bg-white bg-opacity-90">
					<div className="absolute h-1/2 bottom-0 left-0">
						<div className="flex flex-col gap-y-6 h-full px-6 ml-8 border-l-2 border-light-0" />
					</div>
					<div className="flex items-center w-full h-full pr-8 mx-8">
						<div className="flex flex-col gap-y-4 w-full pl-6 pr-8 border-l-2 border-light-0">
							<div className="relative w-full shadow-md" style={ { aspectRatio: ratio.toString() } }>
								<Image
									src={ `/projects/${ src }` }
									alt={ alt }
									layout="fill" />
							</div>
							<div className="flex justify-center">
								<h3 className="font-medium text-xl text-light-0">{ description }</h3>
							</div>
						</div>
					</div>
				</div>
			}
		</>
	);
}

export default Screenshot;
