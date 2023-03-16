import { FunctionComponent } from 'react';
import { HeaderSearch } from '../../ordinary/HeaderSearch/HeaderSearch';
import { Profile } from '../../ordinary/Profle/Profile';
import { HeaderList } from './HeaderList/HeaderList';
import { HeaderLogo } from './HeaderLogo/HeaderLogo';
import './Header.scss'

export const Header: FunctionComponent<HeaderProps> = (props) => {
	const {} = props;

	return (
		<>
		<header className='header'>
			<div className="header__logo">
				<HeaderLogo />
			</div>
			<div className="header__list">
				<HeaderList id={0} name={''} />{' '}
			</div>
			<div className="header__search">
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
