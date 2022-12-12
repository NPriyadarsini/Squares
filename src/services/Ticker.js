
const Ticker = {
	start: (context) => {
		const { config: { TickerDelay }} = context;

		return setInterval(() =>
			Ticker.toggleTicker(context), TickerDelay);
	},
	toggleTicker: (context) => {
		const { state: { tickerPaused }, actions } = context;

		return tickerPaused || actions.setInput(context);
	},
};

export default Ticker;
