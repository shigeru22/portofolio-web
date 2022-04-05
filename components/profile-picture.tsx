import Image from "next/image";

interface IProfilePictureProps {
	src: string
}

function ProfilePicture({ src }: IProfilePictureProps) {
	return (
		<div className="h-64 2xl:h-80 rounded-full border-2 border-black aspect-square">
			<div className="relative h-full rounded-full border-2 border-white aspect-square">
				<Image src={ src } alt="Profile picture" layout="fill" objectFit="contain" className="rounded-full" />
			</div>
		</div>
	);
}

export default ProfilePicture;
