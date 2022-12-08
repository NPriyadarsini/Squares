import { React } from 'react';
import SquareManager from '../services/SquareManager';

const Squares = (context) => {
	const { state: { squareCount, spacing }} = context;
	const boxes = SquareManager.generateSquares(squareCount, spacing);

	return boxes.map(({ id, row, column, margin }) =>
		<div
			key={ id }
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
