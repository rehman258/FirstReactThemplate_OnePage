import React from 'react';
import '../../Css/Navbar.css';
import Topbar from './Topbar';
import Navbar from './Navbar';
import Banner from './Banner';

export class Page_Navbar extends React.Component {
	render() {
		return (
			<div id="Headerr">
				<header>
				  	<Topbar/>
				  	<Navbar/>
				  	<Banner/>
				</header>
				<div className="clearb"></div>
			</div>
		)
	}
}

export default Page_Navbar