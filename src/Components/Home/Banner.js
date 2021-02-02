import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
export default class Banner extends React.Component {
	render() {
		return (
			<div>
				<Carousel >
				  	<Carousel.Item>
				  		<div className="ovarlay"></div>
					    <img
					      className="d-block w-100"
					      src="https://www.imgacademy.com/themes/custom/imgacademy/images/helpbox-contact.jpg"
					      alt="First slide"
					    />
					    <Carousel.Caption className="carousel-text">
					      		<h1 className="animated1">White Dental Care</h1>
					        	<h3 className="animated2">Multipurpose Responsive Template</h3>
					        	<button className="btn btn-carousel btn-lg animated3">About Us</button>
					    </Carousel.Caption>
				  	</Carousel.Item>

				  	<Carousel.Item>
				  		<div className="ovarlay"></div>
					    <img
					      className="d-block w-100"
					      src="https://www.imgacademy.com/themes/custom/imgacademy/images/helpbox-contact.jpg"
					      alt="Third slide"
					    />
					    <Carousel.Caption className="carousel-text">
					      		<h1 className="animated1">White Dental Care</h1>
					        	<h3 className="animated2">Multipurpose Responsive Template</h3>
					        	<button className="btn btn-carousel btn-lg animated3">About Us</button>
					    </Carousel.Caption>
				  	</Carousel.Item>
				</Carousel>
			</div>
		)
	}
}