import "./FeaturesProperties.css";

const FeaturesProperties = () => {
  return (
    <div className="fp">
      <div className="fpItem">
        <img
          src="https://images.trvl-media.com/hotels/5000000/4320000/4310600/4310502/41e9c7ee_z.jpg"
          alt=""
          className="fpImg"
        />
        <span className="fpName">Aparthotel Stare Miasto</span>
        <span className="fpCity">Madrid</span>
        <span className="fpPrice">Starting from 120$</span>
        <div className="fpRating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://static21.com-hotel.com/uploads/hotel/60785/photo/ramses-hilton-hotel-casino_15382536028.jpg"
          alt=""
          className="fpImg"
        />
        <span className="fpName">Hilton Ramses</span>
        <span className="fpCity">Giza</span>
        <span className="fpPrice">Starting from 80$</span>
        <div className="fpRating">
          <button>9.5</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://www.travelplusstyle.com/wp-content/uploads/2015/11/laamu_water_villa_with_pool_5962-original-1.jpg"
          alt=""
          className="fpImg"
        />
        <span className="fpName">Luxury Resort</span>
        <span className="fpCity">Maldef</span>
        <span className="fpPrice">Starting from 200$</span>
        <div className="fpRating">
          <button>6.5</button>
          <span>Good</span>
        </div>
      </div>
    </div>
  );
};

export default FeaturesProperties;
