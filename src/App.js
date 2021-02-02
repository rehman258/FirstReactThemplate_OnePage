import './Css/App.css';
import Page_Navbar from './Components/Home/Page_Navbar';
import AboutUs from './Components/AboutUs/About';
import Services from './Components/Services/Services';
import Team from './Components/OurTeam/Team';
import Portfolio from './Components/Portfolio/Porfolio';
import Blog from './Components/Blog/Blog';
import ContactUs from './Components/ContactUs/ContactUs';



function App() {
	
  return (
    <div className="App">
	  	<Page_Navbar/>
      	<AboutUs/>
      	<Services/>
      	<Team/>
      	<Portfolio/>
      	<Blog/>
      	<ContactUs/>
    </div>
  );
}

export default App;
