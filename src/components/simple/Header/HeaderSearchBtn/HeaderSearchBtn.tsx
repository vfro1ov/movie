import { FunctionComponent } from 'react';

export const HeaderSearchBtn: FunctionComponent<HeaderSearchBtnProps> = (props) => {
	const {} = props;

	return (
		<>
			<img
				src="https://img.icons8.com/external-kiranshastry-gradient-kiranshastry/1x/external-search-alignment-and-tools-kiranshastry-gradient-kiranshastry.png"
				alt="search"
			/>
		</>
	);
};

export interface HeaderSearchBtnProps {}
