import "./Hotel.css";
import Navbar from "../../Components/Navbar/Navbar";
import Header from "../../Components/Header/Header";
import MailList from "../../Components/MailList/MailList";
import Footer from "../../Components/Footer/Footer";
import { LocationOn } from "@mui/icons-material";

const Hotel = () => {
  const photos = [
    {
      src: "https://gttp.imgix.net/202499/x/0/101659a-hb-a-001-jpg?auto=format%2Ccompress&crop=faces%2Cedges%2Ccenter&bg=%23fff&q=35&fit=crop",
    },
    {
      src: "https://gttp.imgix.net/202499/x/0/101659a-hb-a-001-jpg?auto=format%2Ccompress&crop=faces%2Cedges%2Ccenter&bg=%23fff&q=35&fit=crop",
    },
    {
      src: "https://gttp.imgix.net/202499/x/0/101659a-hb-a-001-jpg?auto=format%2Ccompress&crop=faces%2Cedges%2Ccenter&bg=%23fff&q=35&fit=crop",
    },
    {
      src: "https://gttp.imgix.net/202499/x/0/101659a-hb-a-001-jpg?auto=format%2Ccompress&crop=faces%2Cedges%2Ccenter&bg=%23fff&q=35&fit=crop",
    },
    {
      src: "https://gttp.imgix.net/202499/x/0/101659a-hb-a-001-jpg?auto=format%2Ccompress&crop=faces%2Cedges%2Ccenter&bg=%23fff&q=35&fit=crop",
    },
    {
      src: "https://gttp.imgix.net/202499/x/0/101659a-hb-a-001-jpg?auto=format%2Ccompress&crop=faces%2Cedges%2Ccenter&bg=%23fff&q=35&fit=crop",
    },
  ];
  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="hotelContainer">
        <div className="hotelWrapper">
          <button className="bookNow">Reserve or Book Now!</button>
          <h1 className="hotelTitle">Grand Hotel</h1>
          <div className="hotelAddress">
            <LocationOn />
            <span>Elton St 125 New York</span>
          </div>
          <span className="hotelDistance">
            Excellent location - 500m from center
          </span>
          <span className="hotelPriceHighlight">
            Book a stay over $114 at this property and get a free airport taxi
          </span>
          <div className="hotelImages">
            {photos.map((img) => (
              <div className="hotelImgWrapper">
                <img src={img.src} alt="hotel" className="hotelImg" />
              </div>
            ))}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsText">
              <h1 className="hotelTitle">Stay in the heart of Krakow</h1>
              <p className="hotelDesc">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
            </div>
            <div className="hotelDetailsPrice">
              <h1>Perfect for a 9-nights stay!</h1>
              <span>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s.
              </span>
              <h2>
                <b>$945</b> (9 nights)
              </h2>
              <button>Reserve or Book now!</button>
            </div>
          </div>
        </div>
        <MailList />
        <Footer />
      </div>
    </div>
  );
};

export default Hotel;
