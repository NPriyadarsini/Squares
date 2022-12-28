import { render } from '@testing-library/react';
import Square from './Square';

test('Square', () => {
	const context = Symbol('context');
	const { getByRole } = render(Square(context));

	expect(getByRole('square')).toBeInTheDocument();
});
