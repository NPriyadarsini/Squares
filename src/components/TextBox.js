import { React } from 'react';

const TextBox = ({ state, actions }) =>
	<label className="textBox">Enter the no:{}
		<input
			id="input"
			type="number"
			value={ state.spacing }
			onChange={ (evt) =>
				actions.setInput(evt.target.value) }
		/>
	</label>;

export default TextBox;
