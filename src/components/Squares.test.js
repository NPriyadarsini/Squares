import SquareManager from '../services/SquareManager';
import Square from './Square';
import Squares from './Squares';

test('Displaying Squares', () => {
	const context = Symbol('context');
	const boxesReturnValue = Symbol('boxesReturnValue');
	const boxes = { map: jest.fn().mockReturnValue(boxesReturnValue) };

	jest.spyOn(SquareManager, 'generateSquares')
		.mockReturnValue(boxes);

	const result = Squares(context);

	expect(SquareManager.generateSquares)
		.toHaveBeenCalledWith(context);
	expect(boxes.map).toHaveBeenCalledWith(Square);
	expect(result)
		.toEqual(boxesReturnValue);
});
