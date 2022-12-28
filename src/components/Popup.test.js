import { render } from '@testing-library/react';
import Popup from './Popup';

describe('Popup', () => {
	test('When tickerPaused is true - Popup is displayed', () => {
		const context = {
			state: {
				tickerPaused: true,
			},
		};

		const { getByRole } = render(Popup(context));

		expect(getByRole('popup')).toBeInTheDocument();
		expect(getByRole('paused')).toBeInTheDocument();
		expect(getByRole('paused')).toHaveTextContent('PAUSED');
	});
	test('When tickerPaused is false - Popup is not displayed', () => {
		const context = {
			state: {
				tickerPaused: false,
			},
		};

		const result = Popup(context);

		expect(result).toEqual(false);
	});
});
