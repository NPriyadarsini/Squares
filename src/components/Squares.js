
import SquareManager from '../services/SquareManager';
import Square from './Square';

const Squares = (context) =>
	SquareManager.generateSquares(context).map(Square);

export default Squares;
