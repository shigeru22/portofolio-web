import ProfilePicture from "../components/profile-picture";
import Config from "../config.json";

function Home() {
	return (
		<div className="flex flex-col w-full h-full">
			<div className="flex justify-center items-center h-full">
				<ProfilePicture src="/profpic.jpg" />
			</div>
			<div className="flex justify-center items-center py-8">
				<p className="font-medium text-2xl text-light-20">
					Profile picture by <a href={ Config.img.link } className="text-light-0">{ Config.img.creator }</a>.
				</p>
			</div>
		</div>
	);
}

export default Home;
