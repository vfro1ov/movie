import { FunctionComponent } from 'react';

export const HeaderList: FunctionComponent<HeaderListProps> = (props) => {
	const {} = props;
	const listItem: HeaderListProps[] = [
		{ id: 1, 'name': 'Главная' },
		{ id: 2, 'name': 'Избранное' },
		{ id: 3, 'name': 'ТВ каналы' },
		{ id: 4, 'name': 'Спорт' },
	];

	return (
		<>
			{listItem.map((listItem) => {
				return <li>{listItem.name}</li>;
			})}
		</>
	);
};

export interface HeaderListProps {
	id: number;
	name: string;
}
