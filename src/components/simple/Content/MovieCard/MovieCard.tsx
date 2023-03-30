import axios from 'axios';
import { FunctionComponent, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { API_KEY, API_MOVIE } from '../../../../constant/api';

export const MovieCard: FunctionComponent<MovieCardProps> = (props) => {
	const {} = props;
	const [movie,setMovie] = useState([])

	useEffect(() => {
		axios.get(API_MOVIE,{headers:{'x-api-key':API_KEY,"accept": "application/json"}})
		.then(res =>{
			console.log(res.data.docs,'res')
			const movieList = res.data.docs.map(({alternativeName,logo,url,name,year,id})=> {
				return {
					alternativeName,
					logo,
					name,
					year,
					url,
					id
				}
			})
		setMovie(movieList)
		}).catch(function (error) {
			// handle error
			console.log(error);
		})
	},[setMovie])
	return (
		<>
			{movie.map((movie) => {
				return (
					<div className="card">
						<img src={movie.logo.url} className="card-img-top" alt="{movie.id}" />
						<div className="card-body">
							<h5 className="card-title">{movie.name}</h5>
							<p className="card-text">{movie.shortDescription}</p>
							<Link to={`/film`} className="btn btn-primary">
								Go somewhere
							</Link>
						</div>
					</div>
				);
			})}
		</>
	);
};

export interface MovieCardProps {}
