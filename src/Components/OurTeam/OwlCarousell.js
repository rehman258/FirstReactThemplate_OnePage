import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import Doctoricon1 from '../../Img/testimonials1.png';
import Doctoricon2 from '../../Img/testimonials2.png';
import Doctoricon3 from '../../Img/testimonials3.png';




const options = {
  margin: 30,
  responsiveClass: true,
  nav: false,
  autoplay: false,
  autoHeightClass:false,
  autoWidth:false,
  center:true,
  smartSpeed: 1000,
  responsive: {
      0: {
          items: 1,
      },
      400: {
          items: 1,
      },
      600: {
          items: 1,
      },
      700: {
          items: 1,
      },
      1000: {
          items: 1,
      }
  },
};
class OwlCarousell extends React.Component {
  	render() {
	    return (
			<div>
				<div className="MineOwl-cont">
					<div className="container">
						<OwlCarousel className='owl-theme MineOwl' loop margin={10} nav {...options} style={{width:"100%"}}>
						    <div className='item' >
						        <blockquote>
						        	<img src={Doctoricon1} alt="Testimonials"/>
					            	<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
					            	<h3>- Mary Williams</h3>
					          	</blockquote>
						    </div>
						    <div className='item' >
						        <blockquote>
						        	<img src={Doctoricon2}  alt="Testimonials"/>
					            	<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
					            	<h3>- Mary Williams</h3>
					          	</blockquote>
						    </div>
						    <div className='item' >
						        <blockquote>
						        	<img src={Doctoricon3}  alt="Testimonials"/>
					            	<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
					            	<h3>- Mary Williams</h3>
					          	</blockquote>
						    </div>
						</OwlCarousel>
					</div>
				</div>	
			</div>
		)
	}
}
export default OwlCarousell