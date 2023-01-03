
const Ticker = {
	start: (context) => {
		const { config: { TickerDelay }} = context;

		setInterval(() =>
			Ticker.toggleTicker(context), TickerDelay);
	},
	toggleTicker: (context) => {
		const { state: { tickerPaused }, actions } = context;

		tickerPaused || actions.setInput(context);
	},
};

export default Ticker;
