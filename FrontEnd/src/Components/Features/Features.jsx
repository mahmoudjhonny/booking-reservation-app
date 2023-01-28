import useFetch from "../../Api_Call/useFetch";
import "./Features.css";

const Features = () => {
  const { data, loading } = useFetch(
    "http://localhost:8080/api/hotels/countByCity?cities=Berlein,Giza,Madried"
  );
  return (
    <div className="features">
      {loading ? (
        <div>please wait. Loading...</div>
      ) : (
        <>
          <div className="featuresItem">
            <img
              src="https://theplanetd.com/images/places-to-visit-in-berlin-germany.jpg"
              alt="Berlin"
              className="img"
            />
            <div className="featuresTitle">
              <h1>Berlin</h1>
              <h2>{data[0]} properties</h2>
            </div>
          </div>
          <div className="featuresItem">
            <img
              src="https://media.architecturaldigest.com/photos/57ad893acfc37bc171ad8082/2:1/w_5122,h_2561,c_limit/madrid-travel-guide.jpg"
              alt="Madrid"
              className="img"
            />
            <div className="featuresTitle">
              <h1>Madrid</h1>
              <h2>{data[1]} properties</h2>
            </div>
          </div>
          <div className="featuresItem">
            <img
              src="https://cdn.britannica.com/26/171026-050-11CE446C/Great-Sphinx-of-Giza-pyramid-background-Khafre.jpg"
              alt="Giza"
              className="img"
            />
            <div className="featuresTitle">
              <h1>Giza</h1>
              <h2>{data[2]} properties</h2>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Features;
