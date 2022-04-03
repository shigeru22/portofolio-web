import { useState } from "react";
import Image from "next/image";

interface IScreenshotProps {
	src: string;
	alt: string;
	priority: boolean;
}

function Screenshot({ src, alt, priority }: IScreenshotProps) {
	const [ ratio, setRatio ] = useState(16 / 9);

	return (
		<Image
			src={ `/projects/${ src }` }
			alt={ alt }
			width={ ratio * 160 }
			height={ 160 }
			priority={ priority }
			onLoadingComplete={ dimen => setRatio(dimen.naturalWidth / dimen.naturalHeight) } />
	);
}

export default Screenshot;
