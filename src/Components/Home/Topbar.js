import React from 'react'
import { BrowserRouter as Router,  NavLink } from "react-router-dom";
import  * as Icons  from 'react-icons/fa';
export default class Topbar extends React.Component {
	render() {
		return (
			<div>
				<div className="top-bar hidden-sm hidden-xs">
				    <div className="container">
				      <div className="row">
				        <div className="col-sm-6">
				          <ul className="list-unstyled list-inline h6">
				            <li>
				              <p><Icons.FaRegClock fill="#5cceeb" /> We are today working: 9:00 am - 5:00 pm</p>
				            </li>
				            <li>
				              <p><Icons.FaPhoneAlt fill="#5cceeb" /> Call us +1 0123 456 789</p>
				            </li>
				          </ul>
				        </div>
				        <div className="col-sm-6">
				          <div className="pull-right">
				            <ul className="social text-right">
				               	<Router>
				              		<li><NavLink to=""><Icons.FaFacebookF fill="white" /></NavLink></li>
					              	<li><NavLink to=""><Icons.FaTwitter fill="white" /></NavLink></li>
					              	<li><NavLink to=""><Icons.FaYoutube fill="white" /></NavLink></li>
					              	<li><NavLink to=""><Icons.FaGooglePlusG fill="white" /></NavLink></li>
					              	<li><NavLink to=""><Icons.FaLinkedinIn fill="white" /></NavLink></li>
					              	<li><NavLink to=""><Icons.FaPinterestP fill="white" /></NavLink></li>
					              	<li><NavLink to=""><Icons.FaInstagram fill="white" /></NavLink></li>
				               	</Router>
				            </ul>
				          </div>
				        </div>
				      </div>
				    </div>
				</div>
			</div>
		)
	}
}