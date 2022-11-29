/* eslint-disable no-mixed-operators */
import { React } from 'react';
import SquareManager from '../services/SquareManager';

const Squares = (context) => {
	const { state: { squareCount }} = context;
	const boxes = SquareManager.generateSquares(squareCount);

	return boxes.map(({ id, margin, column, row, offset }) =>
		<div
			key={ id }
			{ ...{
				className: 'square',
				style: {
					top: `calc( 50vh + ${ (row * margin) - offset }px )`,
					left: `calc( 50vw + ${ (column * margin) - offset }px)`,
				},
			} }
		/>);
};

export default Squares;
