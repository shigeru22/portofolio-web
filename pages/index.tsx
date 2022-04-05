import ProfilePicture from "../components/profile-picture";
import Config from "../config.json";

function Home() {
	return (
		<div className="flex flex-col flex-grow">
			<div className="flex flex-grow justify-center items-center">
				<ProfilePicture src="/profpic.jpg" />
			</div>
			<div className="flex justify-center items-center w-full py-8">
				<p className="font-medium text-lg md:text-xl 2xl:text-2xl text-light-20">
					Profile picture by <a href={ Config.img.link } className="text-light-0" target="_blank" rel="noreferrer">{ Config.img.creator }</a>.
				</p>
			</div>
		</div>
	);
}

export default Home;
