import { React } from 'react';
import SquareManager from '../services/SquareManager';

const Squares = (context) => {
	const { state: { squareCount }} = context;
	const boxes = SquareManager.generateSquares(squareCount);

	return boxes.map(({ id, row, column, margin }) =>
		<div
			key={ id }
			role="squares"
			{ ...{
				className: 'square',
				style: {
					top: `calc( 5vh + ${ row * margin }px )`,
					left: `calc( 5vw + ${ column * margin }px)`,
				},
			} }
		/>);
};

export default Squares;
