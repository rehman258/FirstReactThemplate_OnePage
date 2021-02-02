import React from 'react';
import ContactsItems from './ContactsItems';
import MyMap from './MyMap';
import FooterCR from './FooterCR';


export default class ContactUs extends React.Component {
	render() {
		return (
			<div id="contactuss">
				<ContactsItems/>
				<MyMap/>
				<FooterCR/>
			</div>
		)
	}
}