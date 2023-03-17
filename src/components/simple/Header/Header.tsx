import { FunctionComponent } from 'react';
import { HeaderSearchBtn } from './HeaderSearchBtn/HeaderSearchBtn';
import { Profile } from '../../ordinary/Header/Profle/Profile';
import { HeaderList } from './HeaderList/HeaderList';
import { HeaderLogo } from './HeaderLogo/HeaderLogo';
import './Header.scss';
import { HeaderSearch } from '../../ordinary/Header/HeaderSearch/HeaderSearch';

export const Header: FunctionComponent<HeaderProps> = (props) => {
	const {} = props;
	return (
		<>
			<header className="header">
				<div className="header__logo">
					<HeaderLogo />
				</div>
				<div className="header__list">
					<HeaderList />
				</div>
				<div className="header__search">
					<HeaderSearchBtn />
					<HeaderSearch />
				</div>

				<div className="header__profile">
					<Profile />
				</div>
			</header>
		</>
	);
};

export interface HeaderProps {}
