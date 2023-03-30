import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import { Content } from '../../components/simple/Content/Content';
import { Header } from '../../components/simple/Header/Header';
import { routerConfig } from '../../routes/routerConfig';
import FilmPage from '../../pages/FilmPage';

function App() {
	return <>
	<BrowserRouter>
	<Header/>
	<Routes>
						<Route  path={`/`} element={<Content/>} />
						<Route path={`/film`} element={<FilmPage/>} />
				</Routes>
	</BrowserRouter>


		</>;
}
export default App;