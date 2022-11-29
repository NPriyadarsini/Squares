/* eslint-disable no-mixed-operators */
import { React } from 'react';
import SquareManager from '../services/SquareManager';

const Squares = (context) => {
	const { state: { columnCount }} = context;
	const boxes = SquareManager.GenerateSquares(columnCount);

	return boxes.map(({ id, size, margin, colum, row, offset }) =>
		<div
			key={ id }
			{ ...{
				className: 'square',
				style: {
					top: `calc( 50vh + ${ (row * margin) - offset }px )`,
					left: `calc( 50vw + ${ (colum * margin) - offset }px)`,
					width: `${ size }px`,
					height: `${ size }px`,
				},
			} }
		/>);
};

export default Squares;
