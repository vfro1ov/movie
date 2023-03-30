import { FunctionComponent, useEffect, useState } from 'react';
import { API_KEY } from '../../../constant/api';
import axios from 'axios';
import { MovieCard } from './MovieCard/MovieCard';
import './Content.scss';

export const Content: FunctionComponent<ContentProps> = (props) => {
	const {} = props;


	return (
		<>
			<div className="movies">
				<div className="movies_card">
					<MovieCard />
				</div>
			</div>
		</>
	);
};

export interface ContentProps {}
