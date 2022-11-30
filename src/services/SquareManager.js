import { map, range } from '@laufire/utils/collection';
import config from '../core/config';

const { fifty, ten } = config;

const SquareManager = {
	generateSquares: (squareCount, spacing) =>
		map(range(0, squareCount), (number) => {
			const colCount = Math.ceil(Math.sqrt(squareCount));
			const column = number % colCount;
			const row = (number - column) / colCount;
			const offset = 175;
			const margin = fifty + (spacing * ten);
			const id = number;
			const style = {
				top: `calc( 50vh + ${ (row * margin) - offset }px )`,
				left: `calc( 50vw + ${ (column * margin) - offset }px)`,
			};

			return {
				id, style,
			};
		}),
};

export default SquareManager;
