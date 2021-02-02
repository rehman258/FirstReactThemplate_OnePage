import React from 'react';
import  * as BootstrapItems  from 'react-bootstrap';
import * as Iconss from 'react-icons/fa';
import Blogİmg1 from '../../Img/blog-img1.jpg';
import Blogİmg2 from '../../Img/blog-img2.jpg';
import Appointment from './Appointment';
export default class Blog extends React.Component {
	render() {
		return (
			<div id="blogg">
				<section id="blog" className="blog">
				  	<BootstrapItems.Container>
					  	<div className="title">
					    	<h2>Our <span>Blog</span></h2>
					    	<span className="title-border-blue"><Iconss.FaPlusSquare /></span>
					    </div>
					    <BootstrapItems.Row>
					    	<BootstrapItems.Col md={6}>
							    <div className="thumbnail">
								    <div className="blog-image"> 
									    <a className="hover-img" href="#"> <img alt="image" src={Blogİmg1}/> </a>
									    <span>14 <b>Nov</b></span>
								    </div>
								    <div className="caption">
								        <h3><a href="#">Medical Consulting</a></h3>
								        <div className="date"> 
									        <span>Aug 22, 2016</span> 
									        <span>by<a href="#">Admin</a></span> <span>3 comment</span> 
								        </div>
								        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet.</p>
								    </div>
						    	</div>
						    </BootstrapItems.Col>
						    <BootstrapItems.Col md={6}>
							    <div className="thumbnail">
								    <div className="blog-image"> 
									    <a className="hover-img" href="#"> <img alt="image" src={Blogİmg2}/> </a>
									    <span>14 <b>Nov</b></span>
								    </div>
								    <div className="caption">
								        <h3><a href="#">Medical Consulting</a></h3>
								        <div className="date"> 
									        <span>Aug 22, 2016</span> 
									        <span>by<a href="#">Admin</a></span> <span>3 comment</span> 
								        </div>
								        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet.</p>
								    </div>
						    	</div>
						    </BootstrapItems.Col>
					    </BootstrapItems.Row>
				  	</BootstrapItems.Container>
				</section>
				<Appointment/>
			</div>
		)
	}
}