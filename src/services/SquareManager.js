import { map, range } from '@laufire/utils/collection';

const two = 2;
const three = 3;
const size = 50;
const margin = 100;

const SquareManager = {
	GenerateSquares: (squareCount) => map(range(0, squareCount), (number) => {
		const colCount = Math.ceil(Math.sqrt(squareCount));
		const colum = number % colCount;
		const row = (number - colum) / colCount;
		const offset = ((three * size) + ((three - 1) * margin)) / two;
		const id = number;

		return {
			id, size, margin, colum, row, offset,
		};
	}),
};

export default SquareManager;
