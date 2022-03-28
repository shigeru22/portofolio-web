interface IContentContainerProps {
	children: JSX.Element | JSX.Element[]
}

function ContentContainer({ children }: IContentContainerProps) {
	return (
		<div className="w-full h-full pl-6 border-l-2 border-light-0">
			{ children }
		</div>
	);
}

export default ContentContainer;
