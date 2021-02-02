import React from 'react';
import Doctor from "../../Img/doctor-img4.jpg"; 

export default class AboutUs extends React.Component {
	render() {
		return (
			<div  id="aboutuss">
				<section id="aboutt" >
					<div className="container">
						<div className="row">
							<div className="col-sm-7 about-txt">
						    	<h2>About White Dental Care</h2>
						    	<p>Magna aliqua ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum. Magna aliqua ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum. Magna aliqua ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum. Magna aliqua ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum.</p>
						    	<p>Magna aliqua ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum. Magna aliqua ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum. Magna aliqua ut enim ad minim veniam.</p>
							</div>
							<div className="col-sm-5 about-txt">
						  		<img src={Doctor} alt="about" />
							</div>
						</div>
					</div>
				</section>
				<div className="clearb"></div>
			</div>
		)
	}
}