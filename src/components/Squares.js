
import SquareManager from '../services/SquareManager';
import Square from './Square';

const Squares = (context) => {
	const { state: { squareCount }} = context;
	const boxes = SquareManager.generateSquares(squareCount);

	return boxes.map(Square);
};

export default Squares;
