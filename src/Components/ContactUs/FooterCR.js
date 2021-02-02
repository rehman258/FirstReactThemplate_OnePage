import React from 'react'
import * as Iconss from 'react-icons/fa';
import {Link, animateScroll as scroll } from "react-scroll";
export default class FooterCR extends React.Component {
	render() {
		return (
			<div>
				<footer>
				  <div className="container">
				    <p>© Copyright
					    <script type="text/javascript" async="" src="https://www.google-analytics.com/analytics.js"></script><script type="text/javascript">
							var d=new Date();
							document.write(d.getFullYear());
						</script>2021
					    White Dental Care | All Rights Reserved.
				    </p>
				  </div>
				  <Link id="scrool-top"
						activeClass="active"
						to="Headerr"
						spy={true}
						smooth={true}
						offset={2}
						duration={500}
					><Iconss.FaArrowUp/></Link>
					
				</footer>
			</div>
		)
	}
}