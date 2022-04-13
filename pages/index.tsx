import Head from "next/head";
import ProfilePicture from "../components/profile-picture";
import Config from "../config.json";

function Home() {
	return (
		<>
			<Head>
				<title>Kyutorius | Home</title>
				<meta name="charset" content="UTF-8" />
				<meta name="description" content="Kyutorius (aka Shigeru)'s portfolio homepage." />
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
				<link rel="icon" href="/kyuu.svg" />
			</Head>
			<div className="flex flex-col flex-grow">
				<div className="flex flex-grow justify-center items-center">
					<ProfilePicture src="/profpic.jpg" />
				</div>
				<div className="flex justify-center items-center w-full py-8">
					<p className="font-medium text-lg md:text-xl 2xl:text-2xl text-light-20 dark:text-dark-80">
						Profile picture by <a href={ Config.img.link } className="text-light-0 dark:text-dark-60" target="_blank" rel="noreferrer">{ Config.img.creator }</a>.
					</p>
				</div>
			</div>
		</>
	);
}

export default Home;
