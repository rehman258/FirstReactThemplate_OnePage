import React from 'react';
import  * as BootstrapItems  from 'react-bootstrap';
import * as Iconss from 'react-icons/fa';
export default class ContactsItems extends React.Component {
	render() {
		return (
			<div>
				<BootstrapItems.Container className="contactus">
				  	<div className="title">
				        <h2>Contact <span>Us</span></h2>
				      	<span className="title-border-blue">
				      		<Iconss.FaPlusSquare />
				      	</span>
				    </div>
				    <div className="contact-inner">
				      	<BootstrapItems.Col>
					        <BootstrapItems.Row>
						        <BootstrapItems.Col sm={3}> 
						         	<span><Iconss.FaMapMarkerAlt/></span>
						          	<h3>Address</h3>
						           	<p>300 E-Block Building, USA</p>
						        </BootstrapItems.Col>
						        <BootstrapItems.Col sm={3}> 
						         	<span><Iconss.FaEnvelope/></span>
						          	<h3>Eamil</h3>
						          	<p><a href="mailto:support@yourdomain.com">support@yourdomain.com</a></p>
						        </BootstrapItems.Col>
						        <BootstrapItems.Col sm={3}>
						         	<span><Iconss.FaPhoneAlt/></span>
						          	<h3>Contact Number</h3>
						          	<p>0800 123 46 0000</p>
						        </BootstrapItems.Col>
						        <BootstrapItems.Col sm={3}>
						         	<span><Iconss.FaPhoneVolume/></span>
						          	<h3>Customer Care</h3>
						          	<p>0800 123 46 7890</p>
						        </BootstrapItems.Col>
					        </BootstrapItems.Row>
				      	</BootstrapItems.Col>
				     </div>
				</BootstrapItems.Container>
			</div>
		)
	}
}