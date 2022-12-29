import { React, useEffect } from 'react';
import './App.scss';
import PausedScreen from './components/PausedScreen';
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
			<PausedScreen { ...context }/>
		</div>
	);
};

export default App;
