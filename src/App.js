import { React, useEffect } from 'react';
import './App.scss';
import Squares from './components/Squares';
import Ticker from './components/Ticker';

const App = (context) => {
	useEffect(() => Ticker.start(context), []);

	return <div className="App" role="App">
		<Squares { ...context }/>
	</div>;
};

export default App;
