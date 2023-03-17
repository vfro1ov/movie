import { FunctionComponent } from 'react';

export const MovieCard: FunctionComponent<MovieCardProps> = (props) => {
	const {} = props;
	const card = [
		{
			title: 'Человек Паук',
			text: 'Some quick example text to build on the card title and make up the bulk of the card content.',
			src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRauSAf9j2NtxbW6Vzv2oX5qYXStZJxabsWyw&usqp=CAU',
		},
		{
			title: 'Человек Паук',
			text: 'Some quick example text to build on the card title and make up the bulk of the carcontent.',
			src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRauSAf9j2NtxbW6Vzv2oX5qYXStZJxabsWyw&usqp=CAU',
		},
		{
			title: 'Человек Паук',
			text: 'Some quick example text to build on the card title and make up the bulk of the card content.,',
			src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRauSAf9j2NtxbW6Vzv2oX5qYXStZJxabsWyw&usqp=CAU',
		},
		{
			title: 'Человек Паук',
			text: 'Some quick example text to build on the card title and make up the bulk of the card content.',
			src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRauSAf9j2NtxbW6Vzv2oX5qYXStZJxabsWyw&usqp=CAU',
		},
		{
			title: 'Человек Паук',
			text: 'Some quick example text to build on the card title and make up the bulk of the card content.',
			src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRauSAf9j2NtxbW6Vzv2oX5qYXStZJxabsWyw&usqp=CAU',
		},
		{
			title: 'Человек Паук',
			text: 'Some quick example text to build on the card title and make up the bulk of the cardcontent.',
			src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRauSAf9j2NtxbW6Vzv2oX5qYXStZJxabsWyw&usqp=CAU',
		},
		{
			title: 'Человек Паук',
			text: 'Some quick example text to build on the card title and make up the bulk of the cardcontent.',
			src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRauSAf9j2NtxbW6Vzv2oX5qYXStZJxabsWyw&usqp=CAU',
		},
		{
			title: 'Человек Паук',
			text: 'Some quick example text to build on the card title and make up the bulk of the cardcontent.',
			src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRauSAf9j2NtxbW6Vzv2oX5qYXStZJxabsWyw&usqp=CAU',
		},
	];
	return (
		<>
			{card.map((card) => {
				return (
					<div className="card">
						<img src={card.src} className="card-img-top" alt="..." />
						<div className="card-body">
							<h5 className="card-title">{card.title}</h5>
							<p className="card-text">{card.text}</p>
							<a href="/" className="btn btn-primary">
								Go somewhere
							</a>
						</div>
					</div>
				);
			})}
		</>
	);
};

export interface MovieCardProps {}
