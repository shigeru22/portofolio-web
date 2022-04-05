import { useState, useEffect } from "react";
import Image from "next/image";

interface IScreenshotProps {
	src: string;
	alt: string;
	priority: boolean;
}

function Screenshot({ src, alt }: IScreenshotProps) {
	const [ width, setWidth ] = useState(0);
	const [ ratio, setRatio ] = useState(16 / 9);

	useEffect(() => {
		function onScreenSizeChanged() {
			setWidth(window.innerWidth);
		}

		onScreenSizeChanged();

		window.addEventListener("resize", onScreenSizeChanged);

		return () => {
			window.removeEventListener("resize", onScreenSizeChanged);
		};
	});

	return (
		<Image
			src={ `/projects/${ src }` }
			alt={ alt }
			width={ ratio * (width > 1536 ? 320 : 160) }
			height={ (width > 1536 ? 320 : 160) }
			priority
			onLoadingComplete={ dimen => setRatio(dimen.naturalWidth / dimen.naturalHeight) } />
	);
}

export default Screenshot;
