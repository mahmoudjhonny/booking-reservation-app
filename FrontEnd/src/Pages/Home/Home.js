import Navbar from "../../Components/Navbar/Navbar";
import Header from "../../Components/Header/Header";
import "./Home.css";
import Features from "../../Components/Features/Features";
import PropertyList from "../../Components/Property/propertyList";
import FeaturesProperties from "../../Components/FeaturesProperties/FeaturesProperties";
import MailList from "../../Components/MailList/MailList";
import Footer from "../../Components/Footer/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <Header />
      <div className="homeContainer">
        <Features />
        <h1 className="homeTitle">Browse by property type</h1>
        <PropertyList />
        <h1 className="homeTitle">Homes guests love</h1>
        <FeaturesProperties />
        <MailList />
        <Footer />
      </div>
    </>
  );
};

export default Home;
