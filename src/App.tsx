import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter} from 'react-router-dom'
import { Content } from './components/simple/Content/Content';
import { Header } from './components/simple/Header/Header';

function App() {
	return <>
	<BrowserRouter>
	<Header/>
	<Content />

	</BrowserRouter>


		</>;
}
export default App;