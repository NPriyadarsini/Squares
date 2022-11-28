import { React } from 'react';
import './App.scss';
import Squares from './components/squares';

const App = (context) =>
	<div className="App" role="App">
		<Squares { ...{ ...context } }/>
	</div>;

export default App;
