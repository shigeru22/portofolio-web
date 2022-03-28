import ProfilePicture from "../components/profile-picture";

function Home() {
	return (
		<>
			<div className="flex justify-center items-center h-full">
				<ProfilePicture src="/profpic.jpg" />
			</div>
		</>
	);
}

export default Home;
