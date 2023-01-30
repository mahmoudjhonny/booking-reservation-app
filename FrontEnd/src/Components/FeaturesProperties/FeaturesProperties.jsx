import useFetch from "../../Api_Call/useFetch";
import "./FeaturesProperties.css";

const FeaturesProperties = () => {
  const { data, loading, error } = useFetch(
    "http://localhost:8080/api/hotels?featured=true&limit=3"
  );
  return (
    <div className="fp">
      {loading ? (
        <div>Loading...</div>
      ) : (
        <>
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
        </>
      )}
    </div>
  );
};

export default FeaturesProperties;
