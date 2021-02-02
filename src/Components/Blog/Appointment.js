import React from 'react';
import  * as BootstrapItems  from 'react-bootstrap';
export default class Appointment extends React.Component {
	render() {
		return (
			<div>
				<BootstrapItems.Container>
					<BootstrapItems.Row>
						<BootstrapItems.Col md={4}>
							<BootstrapItems.Form>
							  	<BootstrapItems.Form.Group>
								    <BootstrapItems.Form.Control id="Name" type="text" placeholder="Name" />
								    <BootstrapItems.Form.Text className="text-muted">
								    </BootstrapItems.Form.Text>
							  	</BootstrapItems.Form.Group>
							</BootstrapItems.Form>
						</BootstrapItems.Col>
						<BootstrapItems.Col md={4}>
							<BootstrapItems.Form>
							  	<BootstrapItems.Form.Group >
								    <BootstrapItems.Form.Control id="Phone" type="Number" placeholder="Phone" />
								    <BootstrapItems.Form.Text className="text-muted">
								    </BootstrapItems.Form.Text>
							  	</BootstrapItems.Form.Group>
							</BootstrapItems.Form>
						</BootstrapItems.Col>
						<BootstrapItems.Col md={4}>
							<BootstrapItems.Form>
							  	<BootstrapItems.Form.Group >
								    <BootstrapItems.Form.Control id="Mail" type="email" placeholder="Email" />
								    <BootstrapItems.Form.Text className="text-muted">
								    </BootstrapItems.Form.Text>
							  	</BootstrapItems.Form.Group>
							</BootstrapItems.Form>
						</BootstrapItems.Col>
						<BootstrapItems.Col>
							<BootstrapItems.Form.Group controlId="exampleForm.ControlTextarea1">
							    <BootstrapItems.Form.Control as="textarea" rows={4} />
							</BootstrapItems.Form.Group>
						</BootstrapItems.Col>
					</BootstrapItems.Row>
					<BootstrapItems.Button variant="primary" type="submit">
						    Submit
					</BootstrapItems.Button>
				</BootstrapItems.Container>
			</div>
		)
	}
}