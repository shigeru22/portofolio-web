interface IContentContainerProps {
	children: JSX.Element | JSX.Element[]
}

function ContentContainer({ children }: IContentContainerProps) {
	return (
		<div className="w-full space-y-4 pl-6 pt-2 pb-4 border-l-2 border-light-0">
			{ children }
		</div>
	);
}

export default ContentContainer;
