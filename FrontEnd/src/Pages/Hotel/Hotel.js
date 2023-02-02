import "./Hotel.css";
import Navbar from "../../Components/Navbar/Navbar";
import Header from "../../Components/Header/Header";
import MailList from "../../Components/MailList/MailList";
import Footer from "../../Components/Footer/Footer";
import { LocationOn } from "@mui/icons-material";
import useFetch from "../../Api_Call/useFetch";
import { useLocation } from "react-router-dom";

const Hotel = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const { loading, data } = useFetch(
    `http://localhost:8080/api/hotels/find/${id}`
  );
  console.log(data);
  return (
    <div>
      <Navbar />
      <Header type="list" />
      {loading ? (
        "Loading...."
      ) : (
        <div className="hotelContainer">
          <div className="hotelWrapper">
            <button className="bookNow">Reserve or Book Now!</button>
            <h1 className="hotelTitle">{data.name}</h1>
            <div className="hotelAddress">
              <LocationOn />
              <span>{data.adress}</span>
            </div>
            <span className="hotelDistance">
              Excellent location - {data.distance} m from center
            </span>
            <span className="hotelPriceHighlight">
              Book a stay over ${data.cheapstPrice} at this property and get a
              free airport taxi
            </span>
            <div className="hotelImages">
              {data.photos?.map((img, i) => (
                <div className="hotelImgWrapper" key={i}>
                  <img src={img} alt="hotel" className="hotelImg" />
                </div>
              ))}
            </div>
            <div className="hotelDetails">
              <div className="hotelDetailsText">
                <h1 className="hotelTitle">{data.name}</h1>
                <p className="hotelDesc">{data.desc}</p>
              </div>
              <div className="hotelDetailsPrice">
                <h1>Perfect for a 9-nights stay!</h1>
                <span>{data.desc}</span>
                <h2>
                  <b>${data.cheapstPrice}</b> (9 nights)
                </h2>
                <button>Reserve or Book now!</button>
              </div>
            </div>
          </div>
          <MailList />
          <Footer />
        </div>
      )}
    </div>
  );
};

export default Hotel;
