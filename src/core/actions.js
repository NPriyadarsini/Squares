import SquareManager from '../services/SquareManager';

const setInput = (context) => ({
	squareCount: SquareManager.getSquareCount(context),
});

const toggleTicker = ({ state: { tickerPaused }}) => ({
	tickerPaused: !tickerPaused,
});
const actions = {
	setInput,
	toggleTicker,
};

export default actions;
