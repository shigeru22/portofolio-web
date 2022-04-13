import { motion } from "framer-motion";
import { ValueError } from "../types/error";
import { ILanguageGraphData } from "../types/components/language-graph";

interface ILanguageGraphProps {
	data: ILanguageGraphData[];
}

function LanguageGraph({ data }: ILanguageGraphProps) {
	interface IGraphItemProps {
		percentage: number | string;
		label: string;
	}

	function GraphItem({ percentage, label } : IGraphItemProps) {
		const heightPercentage = typeof(percentage) === "number" ? percentage : parseInt(percentage, 10);

		if(heightPercentage <= 0 || heightPercentage >= 100) {
			throw new ValueError("Percentage must be between (including) 0 and 100.");
		}

		return (
			<div className="flex flex-col gap-y-2 w-14 2xl:w-16 h-full border-b-2 border-light-0 dark:border-dark-100">
				<div className="flex flex-grow justify-center items-end">
					<motion.div
						initial="hidden"
						whileInView="shown"
						viewport={ { once: true } }
						variants={ {
							hidden: {
								height: "0%"
							},
							shown: {
								height: `${ heightPercentage }%`,
								transition: {
									duration: 0.6,
									ease: "backOut"
								}
							}
						} }
						title={ `${ heightPercentage }%` }
						className="w-2 2xl:w-3 bg-light-20 dark:bg-dark-80" />
				</div>
				<div className="flex justify-center items-center w-full h-8">
					<p className="font-medium text-lg 2xl:text-xl text-light-0 dark:text-dark-100">{ label }</p>
				</div>
			</div>
		);
	}

	return (
		<div className="flex h-48 2xl:h-56">
			{
				data.map(item => (
					<GraphItem key={ item.id } percentage={ item.percentage } label={ item.label } />
				))
			}
		</div>
	);
}

export default LanguageGraph;
