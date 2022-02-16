import React from 'react';
import './header.scss';

const Header = () => {
	return (
		<header>
			<div className={'title'}>Watch Youtube Together</div>
			<div style={{ flex: '1' }} />
			<div className={'room-number'}>ROOM NUMBER: 456123</div>
		</header>
	);
};

export default Header;
