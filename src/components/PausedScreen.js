import { React } from 'react';

const PausedScreen = (context) => {
	const { state: { tickerPaused }} = context;

	return tickerPaused && <div className="popup" role="popup">
		<div className="paused" role="paused">PAUSED</div>
	</div>;
};

export default PausedScreen;
