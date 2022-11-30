import { React } from 'react';
import './App.scss';
import Squares from './components/Squares';
import TextBox from './components/TextBox';

const App = (context) =>
	<div className="App" role="App">
		<Squares { ...context }/>
		<TextBox { ...context }/>
	</div>;

export default App;
