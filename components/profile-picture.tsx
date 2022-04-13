import Image from "next/image";

interface IProfilePictureProps {
	src: string
}

function ProfilePicture({ src }: IProfilePictureProps) {
	return (
		<div className="h-64 2xl:h-80 rounded-full border-2 border-light-0 dark:border-dark-80 aspect-square">
			<div className="relative h-full rounded-full border-2 border-white dark:border-black aspect-square">
				<Image src={ src } alt="Profile picture" layout="fill" objectFit="contain" className="rounded-full" />
			</div>
		</div>
	);
}

export default ProfilePicture;
