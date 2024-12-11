import logo from './logo.svg';
import './App.css';
import { createElement } from 'react';

export const App = () => {
	return (
		<div className="App">
			{/*-- imperative */}
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
				<p>
					CurrentDate
					<div>{new Date().toLocaleDateString()}</div> {/*-- declarative */}
				</p>
			</header>
		</div>
	);
};
