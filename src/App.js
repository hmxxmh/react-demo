import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Welcome1,Welcome2 } from './components/CompType';
import Clock from './components/Clock';

function App() {

	return (
		// const name = "jerry";
		// const user = { firstName: "tom", lastName:  "jerry" };
		<div className="App">
			<h1>123123</h1>
			<Welcome1 name="jerry"></Welcome1>
			<Welcome2 name="jhon"></Welcome2>
			<Clock></Clock>
		</div>
	);
}

export default App;
