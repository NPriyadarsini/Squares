import { rndBetween } from '@laufire/utils/lib';
import SquareManager from '../services/SquareManager';
import Square from './Square';
import Squares from './Squares';

test('Displaying Squares', () => {
	const maxSquareCount = 64;
	const squareCount = rndBetween(0, maxSquareCount);
	const context = {
		state: {
			squareCount,
		},
	};
	const boxesReturnValue = Symbol('boxesReturnValue');
	const boxes = { map: jest.fn().mockReturnValue(boxesReturnValue) };

	jest.spyOn(SquareManager, 'generateSquares')
		.mockReturnValue(boxes);

	const result = Squares(context);

	expect(SquareManager.generateSquares)
		.toHaveBeenCalledWith(squareCount);
	expect(boxes.map).toHaveBeenCalledWith(Square);
	expect(result)
		.toEqual(boxesReturnValue);
});
