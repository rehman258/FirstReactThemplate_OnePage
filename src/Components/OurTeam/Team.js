import React from 'react';
import * as Iconss from 'react-icons/fa';
import Doctor1 from '../../Img/doctor-img1.jpg';
import Doctor2 from '../../Img/doctor-img2.jpg';
import Doctor3 from '../../Img/doctor-img3.jpg';
import Doctor4 from '../../Img/doctor-img4.jpg';

import OwlCarousell from './OwlCarousell';

export default class Team extends React.Component {
	
	render() {
		return (
			<div id="ourteamm">
				<section id="ourteam" className="ourteam">
				  	<div className="container">
					   	<div className="title">
					      	<h2>Our <span>Doctors</span></h2>
					      	<span className="title-border-blue"><Iconss.FaPlusSquare /></span>
					    </div>
					    <h4>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</h4>
					    <div className="team-cnt row">
					      	<div className="col-sm-6 col-md-3 callouts">
						        <div className="img-box"> <img src={Doctor1} alt="Doctor" title="Doctor"/>
						          	<div className="text-center"> 
						          		<a href="#">
						          			<Iconss.FaFacebookF />
						          		</a>
						          		<a href="#">
						          			<Iconss.FaTwitter />
						          		</a> 
						          		<a href="#">
						          			<Iconss.FaLinkedinIn />
						          		</a>
						          	</div>
						        </div>
					        	<div className="team-info">
					          		<h3>Mary Williams</h3>
					          		<p>Coccaecat cupidatat</p>
					        	</div>
					      	</div>
					      	<div className="col-sm-6 col-md-3 callouts">
						        <div className="img-box"> <img src={Doctor2} alt="Doctor" title="Doctor"/>
						          	<div className="text-center">
							          	<a href="#">
						          			<Iconss.FaFacebookF />
						          		</a>
						          		<a href="#">
						          			<Iconss.FaTwitter />
						          		</a> 
						          		<a href="#">
						          			<Iconss.FaLinkedinIn />
						          		</a>
						          	</div>
						        </div>
						        <div className="team-info">
						          	<h3>Dave Young</h3>
						          	<p>Coccaecat cupidatat</p>
						        </div>
						    </div>
					      	<div className="col-sm-6 col-md-3 callouts">
					        	<div className="img-box"> <img src={Doctor3} alt="Doctor" title="Doctor"/>
						          	<div className="text-center"> 
						          		<a href="#">
						          			<Iconss.FaFacebookF />
						          		</a>
						          		<a href="#">
						          			<Iconss.FaTwitter />
						          		</a> 
						          		<a href="#">
						          			<Iconss.FaLinkedinIn />
						          		</a>
						          	</div>
					        	</div>
					        	<div className="team-info">
					          		<h3>Satyaraman</h3>
					          		<p>Coccaecat cupidatat</p>
					        	</div>
					      	</div>
					      	<div className="col-sm-6 col-md-3 callouts">
					        	<div className="img-box"> <img src={Doctor4} alt="Doctor" title="Doctor"/>
					          		<div className="text-center">
						          		<a href="#">
						          			<Iconss.FaFacebookF />
						          		</a>
						          		<a href="#">
						          			<Iconss.FaTwitter />
						          		</a> 
						          		<a href="#">
						          			<Iconss.FaLinkedinIn />
						          		</a>
					          		</div>
					        	</div>
					        	<div className="team-info">
					          		<h3>Paul Groves</h3>
					          		<p>Coccaecat cupidatat</p>
					        	</div>
					      	</div>
					    </div>
				  	</div>
				</section>
				<OwlCarousell/>
				<div className="clearb"></div>
			</div>
		)
	}
}