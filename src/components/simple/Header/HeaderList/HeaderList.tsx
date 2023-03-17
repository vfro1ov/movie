import { FunctionComponent } from 'react';
import {Link} from 'react-router-dom'

export const HeaderList: FunctionComponent<HeaderListProps> = (props) => {
	const listItem: HeaderListProps[] = [
		{ id: 1, 'name': 'Главная', path:'/' },
		{ id: 2, 'name': 'Избранное',path:'/favorites' },
		{ id: 3, 'name': 'ТВ каналы',path:'/tv' },
		{ id: 4, 'name': 'Спорт',path:'/sport' },
	];

	return (
		<>
		
			{listItem.map((listItem) => {
				return <li><Link to={listItem.path}>{listItem.name}</Link></li>;
			})}
		</>
	);
};

export interface HeaderListProps {
	id?: number;
	name?: string;
	path?:string;
}
