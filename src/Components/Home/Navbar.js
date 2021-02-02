import React from 'react'
import logo from '../../Img/logo.png';
import * as ReactBootstrap from 'react-bootstrap';
import {Link, animateScroll as scroll } from "react-scroll";

export default class Navbar extends React.Component {
	state = {
	    isTop: false,
	    scrollPos:0
	};
	componentDidMount(){
		window.addEventListener("scroll",this.CheckScroll);
	}

	componentWillUnmount(){
		window.removeEventListener("scroll",this.CheckScroll);	
	}

	CheckScroll = () =>{

		this.setState({
			scrollPos: window.pageYOffset,
			isTop: window.pageYOffset > 130
		})
		
	} 
	render() {
		return (
			<div className={this.state.isTop ? " affix-top " : " affix"}>

				<ReactBootstrap.Navbar 
				collapseOnSelect expand="lg"
				className="fadeInDown container mt-0 pl-0 mt-0" 
				>
				  		<ReactBootstrap.Navbar.Brand href="#home" className="col-m"> <img src={logo} alt=""/></ReactBootstrap.Navbar.Brand>
				  		<ReactBootstrap.Navbar.Toggle aria-controls="responsive-navbar-nav"  />
				  			<ReactBootstrap.Navbar.Collapse id="responsive-navbar-nav" className="col-m">
				    		<ReactBootstrap.Nav className="ml-auto text-right myNav">
				    			<Link
								    activeClass="active"
								    to="Headerr"
								    spy={true}
								    smooth={true}
								    offset={2}
								    duration={500}
								>HOME</Link>
				    			<Link
								    activeClass="active"
								    to="aboutuss"
								    spy={true}
								    smooth={true}
								    offset={-10}
								    duration={500}
								>ABOUT US</Link>
								<Link
								    activeClass="active"
								    to="servicess"
								    spy={true}
								    smooth={true}
								    offset={2}
								    duration={500}
								>SERVICES</Link>
								<Link
								    activeClass="active"
								    to="ourteamm"
								    spy={true}
								    smooth={true}
								    offset={2}
								    duration={500}
								>OUR TEAM</Link>
								<Link
								    activeClass="active"
								    to="portfolioo"
								    spy={true}
								    smooth={true}
								    offset={-70}
								    duration={500}
								>PORTFOLIO</Link>
								<Link
								    activeClass="active"
								    to="blogg"
								    spy={true}
								    smooth={true}
								    offset={-50}
								    duration={500}
								>BLOG</Link>
								<Link
								    activeClass="active"
								    to="contactuss"
								    spy={true}
								    smooth={true}
								    offset={2}
								    duration={500}
								>CONTACT US</Link>
				    		</ReactBootstrap.Nav>
						</ReactBootstrap.Navbar.Collapse>
				</ReactBootstrap.Navbar>
			</div>
		)
	}
}