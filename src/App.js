import './App.css';
import Navbar from "./components/navbar/navbar";
import HeroSection from "./components/herosection/herosection"
import Services from './components/services/services';
import FAQ from './components/faq/faq';
import Footer from './components/footer/footer';
import "./styles/theme.css";
import "./styles/global.css";


function App() {
  return (
    <div className="App">
      <Navbar/>
      <HeroSection/>
      <Services/>
      <FAQ/>
      <Footer/>
    </div>
  );
}

export default App;
