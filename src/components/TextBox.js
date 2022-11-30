import { React } from 'react';

// eslint-disable-next-line no-magic-numbers
const TextBox = ({ state, actions }) =>
	<label className="textBox">Enter the no:{}
		<input
			id="input"
			type="number"
			value={ state.squareCount }
			onChange={ (evt) =>
				actions.setInput(evt.target.value) }
		/>
	</label>;

export default TextBox;
