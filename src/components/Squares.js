/* eslint-disable no-mixed-operators */
import { React } from 'react';
import SquareManager from '../services/SquareManager';

const Squares = (context) => {
	const { state: { squareCount }} = context;
	const boxes = SquareManager.generateSquares(squareCount);

	return boxes.map(({ id, style }) =>
		<div
			key={ id }
			{ ...{
				className: 'square',
				style: style,
			} }
		/>);
};

export default Squares;
