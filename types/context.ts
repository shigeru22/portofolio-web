export enum TargetComponent {
	None = 0,
	Navbar,
	Screenshot
}

export interface INavbarDataProps {
	isDialogOpened: boolean;
	target: TargetComponent;
	onCloseClick?: () => void;
}

export interface IContextProps {
	navbarProps: INavbarDataProps;
	setNavbarProps: (data: INavbarDataProps) => void;
}
