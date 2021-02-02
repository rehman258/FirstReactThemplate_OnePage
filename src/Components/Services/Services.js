import React from 'react';
import * as Iconss from 'react-icons/fa';
import icon1 from '../../Img/icon1.png';
import icon2 from '../../Img/icon2.png';
import icon3 from '../../Img/icon3.png';
import icon4 from '../../Img/icon4.png';
import icon5 from '../../Img/icon5.png';
import icon6 from '../../Img/icon6.png';

export default class Services extends React.Component {
	render() {
		return (
				<div id="servicess">
					<section id="services" className="services">
				  		<div className="container">
					    	<div className="title">
					      		<h2>Our <span>Services</span></h2>
					      		<span className="title-border-blue"> <Iconss.FaPlusSquare /></span>
					      	</div>
						    <div className="service-callouts row">
						      	<div className="col-sm-6 col-lg-4"><span className="shadow"><img src={icon1} alt="icon"/></span>
						        	<h2>Dental Cleaning</h2>
						        	<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit consectetur adipiscing elit</p>
						      	</div>
						      	<div className="col-sm-6 col-lg-4"><span className="shadow"><img src={icon2} alt="icon"/></span>
						        	<h2>COSMETIC DENTISTRY</h2>
						        	<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit consectetur adipiscing elit</p>
						      	</div>
						      	<div className="col-sm-6 col-lg-4"><span className="shadow"><img src={icon3} alt="icon"/></span>
						        	<h2>Oral Exam</h2>
						        	<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit consectetur adipiscing elit</p>
						      	</div>
						      	<div className="col-sm-6 col-lg-4"><span className="shadow"><img src={icon4} alt="icon"/></span>
						        	<h2>Oral Exam</h2>
						        	<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit consectetur adipiscing elit</p>
						      	</div>
						      	<div className="col-sm-6 col-lg-4"><span className="shadow"><img src={icon5} alt="icon"/></span>
						        	<h2>Oral Exam</h2>
						        	<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit consectetur adipiscing elit</p>
						      	</div>
						      	<div className="col-sm-6 col-lg-4"><span className="shadow"><img src={icon6} alt="icon"/></span>
						        	<h2>Oral Exam</h2>
						        	<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit consectetur adipiscing elit</p>
						      	</div>
						    </div>
				  		</div>
					</section>
					<div className="counters">
					  	<div className="container">
					  		<div className="row">
						  		<div className="col-sm-3 counter "><span className="Counter_i"> <Iconss.FaRegListAlt /></span> 
						    		<div className="number animateNumber active" data-num="28">28</div>
						    		<p>Our Hospitals</p>
						  		</div>
							  	<div className="col-sm-3 counter"><span className="Counter_i"> <Iconss.FaUserAlt /></span> 
							    	<div className="number animateNumber active" data-num="180">180</div>
							    	<p>Our staff</p>
							  	</div>
							  	<div className="col-sm-3 counter"><span className="Counter_i"> <Iconss.FaRegSmile /></span> 
							    	<div className="number animateNumber active" data-num="3600">3600</div>
							    	<p>Happy Clients</p>
							  	</div>
							  	<div className="col-sm-3 counter"><span className="Counter_i"> <Iconss.FaTv /></span> 
							    	<div className="number animateNumber active" data-num="18">18</div>
							    	<p>Our Services</p>
								</div>
				 			</div>	
					  	</div>
					</div>
					<div className="clearb"></div>
				</div>
		)
	}
}