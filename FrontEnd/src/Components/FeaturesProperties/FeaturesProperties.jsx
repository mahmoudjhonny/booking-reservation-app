import useFetch from "../../Api_Call/useFetch";
import "./FeaturesProperties.css";

const FeaturesProperties = () => {
  const { data, loading } = useFetch(
    "http://localhost:8080/api/hotels?featured=true&limit=3"
  );
  console.log(data);
  return (
    <div className="fp">
      {loading ? (
        <div>Loading...</div>
      ) : (
        <>
          {data.map((item) => (
            <div className="fpItem" key={item._id}>
              <img src={item.photos[0]} alt={item.name} className="fpImg" />
              <span className="fpName">{item.name}</span>
              <span className="fpCity">{item.city}</span>
              <span className="fpPrice">Starting from {item.cheapstPrice}</span>
              {item.rating && (
                <div className="fpRating">
                  <button>{item.rating}</button>
                  <span>Excellent</span>
                </div>
              )}
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default FeaturesProperties;
