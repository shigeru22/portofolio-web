import { useRouter } from "next/router";

function PortfolioDetails() {
	const router = useRouter();

	return (
		<div className="py-4 text-3xl text-center font-semibold text-slate-800">Portfolio details page with ID { router.query.id }</div>
	);
}

export default PortfolioDetails;
