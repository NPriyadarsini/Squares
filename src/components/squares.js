/* eslint-disable no-mixed-operators */
import { range, map } from '@laufire/utils/collection';
import { React } from 'react';

const two = 2;
const size = 50;
const margin = 100;
const columCount = 3;

const Squares = map(range(0, columCount ** two), (number) => {
	const colum = number % columCount;
	const row = (number - colum) / columCount;
	const offset = (columCount * size + ((columCount - 1) * margin)) / two;

	return {	id: number,
		style: {
			top: `calc( 50vh + ${ row * margin - offset }px )`,
			left: `calc( 50vw + ${ colum * margin - offset }px)`,
			width: `${ size }px`,
			height: `${ size }px`,
		}};
});

const Square = () => Squares.map(({ id, style }) =>
	<div
		key={ id }
		{ ...{
			className: 'square',
			style: style,
		} }
	/>);

export default Square;
