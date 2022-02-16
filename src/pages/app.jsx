import React from 'react';
import Room from './panel';
import './app.scss';
import Header from '../components/header';

const App = () => {
	return (
		<div className={'app'}>
			<Header />
			<Room />
		</div>
	);
};

export default App;
