import { React } from 'react';

const Popup = (context) => {
	const { state: { tickerPaused }} = context;

	return tickerPaused && <div className="popup">
		<div className="text">PAUSED</div>
	</div>;
};

export default Popup;
