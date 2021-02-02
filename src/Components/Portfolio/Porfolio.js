import React from 'react';
import  * as BootstrapItems  from 'react-bootstrap';
import 'photoswipe/dist/photoswipe.css';
import 'photoswipe/dist/default-skin/default-skin.css';
import { Gallery, Item } from 'react-photoswipe-gallery';
import galimg1 from '../../Img/gallery-img1.jpg';
import galimg2 from '../../Img/gallery-img2.jpg';
import galimg3 from '../../Img/gallery-img3.jpg';
import galimg4 from '../../Img/gallery-img4.jpg';
import galimg5 from '../../Img/gallery-img5.jpg';
import galimg6 from '../../Img/gallery-img6.jpg';
import galimg7 from '../../Img/gallery-img7.jpg';
import galimg8 from '../../Img/gallery-img8.jpg';

export default class Portfolio extends React.Component {
	render() {
		return (
			<div id="portfolioo">
				<Gallery>
					<BootstrapItems.Container fluid className="px-0">
						<BootstrapItems.Row className="mx-0">
							<BootstrapItems.Col className="px-0" md={3}>
								<div className="box">
							        <Item
										original={galimg1}
										thumbnail={galimg1}
										width="1024"
										height="768"
									>
										{({ ref, open }) => (
										  	<img ref={ref} onClick={open} src={galimg1} alt={galimg1}/>
										)}
									</Item>
						      	</div>
							</BootstrapItems.Col>
						    <BootstrapItems.Col className="px-0" md={3}>
								<div className="box">
							        <Item
										original={galimg1}
										thumbnail={galimg1}
										width="1024"
										height="768"
									>
										{({ ref, open }) => (
										  	<img ref={ref} onClick={open} src={galimg2} alt={galimg2}/>
										)}
									</Item>
						      	</div>
							</BootstrapItems.Col>
							<BootstrapItems.Col className="px-0" md={3}>
								<div className="box">
							        <Item
										original={galimg3}
										thumbnail={galimg3}
										width="1024"
										height="768"
									>
										{({ ref, open }) => (
										  	<img ref={ref} onClick={open} src={galimg3}  alt={galimg3}/>
										)}
									</Item>
						      	</div>
							</BootstrapItems.Col>
						    <BootstrapItems.Col className="px-0" md={3}>
								<div className="box">
							        <Item
										original={galimg4}
										thumbnail={galimg4}
										width="1024"
										height="768"
									>
										{({ ref, open }) => (
										  	<img ref={ref} onClick={open} src={galimg4} alt={galimg4}/>
										)}
									</Item>
						      	</div>
							</BootstrapItems.Col>
							<BootstrapItems.Col className="px-0" md={3}>
								<div className="box">
							        <Item
										original={galimg5}
										thumbnail={galimg5}
										width="1024"
										height="768"
									>
										{({ ref, open }) => (
										  	<img ref={ref} onClick={open} src={galimg5} alt={galimg5}/>
										)}
									</Item>
						      	</div>
							</BootstrapItems.Col>
						    <BootstrapItems.Col className="px-0" md={3}>
								<div className="box">
							        <Item
										original={galimg6}
										thumbnail={galimg6}
										width="1024"
										height="768"
									>
										{({ ref, open }) => (
										  	<img ref={ref} onClick={open} src={galimg6} alt={galimg6}/>
										)}
									</Item>
						      	</div>
							</BootstrapItems.Col>
							<BootstrapItems.Col className="px-0" md={3}>
								<div className="box">
							        <Item
										original={galimg7}
										thumbnail={galimg7}
										width="1024"
										height="768"
									>
										{({ ref, open }) => (
										  	<img ref={ref} onClick={open} src={galimg7} alt={galimg7}/>
										)}
									</Item>
						      	</div>
							</BootstrapItems.Col>
						    <BootstrapItems.Col className="px-0" md={3}>
								<div className="box">
							        <Item
										original={galimg8}
										thumbnail={galimg8}
										width="1024"
										height="768"
									>
										{({ ref, open }) => (
										  	<img ref={ref} onClick={open} src={galimg8} alt={galimg8}/>
										)}
									</Item>
						      	</div>
							</BootstrapItems.Col>
						</BootstrapItems.Row>
					</BootstrapItems.Container>	
				</Gallery>
			</div>
		)
	}
}