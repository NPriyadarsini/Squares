import { React, useEffect } from 'react';
import './App.scss';
import Popup from './components/Popup';
import Squares from './components/Squares';
import Ticker from './services/Ticker';

const App = (context) => {
	useEffect(() => Ticker.start(context), []);

	return (
		<div
			className="App"
			role="App"
			onClick={ () =>
				context.actions.toggleTicker() }
		>
			<Squares { ...context }/>
			<Popup { ...context }/>
		</div>
	);
};

export default App;
