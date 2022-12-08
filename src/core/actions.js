import SquareManager from '../services/SquareManager';

const setInput = (context) => ({
	squareCount: SquareManager.getSquareCount(context),
});
const actions = {
	setInput,
};

export default actions;
