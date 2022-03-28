interface IContentContainerProps {
	children: JSX.Element | JSX.Element[]
}

function ContentContainer({ children }: IContentContainerProps) {
	return (
		<div className="w-full space-y-2 pl-6 border-l-2 border-light-0">
			{ children }
		</div>
	);
}

export default ContentContainer;
