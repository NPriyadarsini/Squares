import { React } from 'react';
import './App.scss';
import Squares from './components/squares';
import TextBox from './components/textBox';

const App = (context) =>
	<div className="App" role="App">
		<Squares { ...{ ...context } }/>
		<TextBox { ...{ ...context } }/>
	</div>;

export default App;
