import "./Features.css";

const Features = () => {
  return (
    <div className="features">
      <div className="featuresItem">
        <img
          src="http://cdn.cnn.com/cnnnext/dam/assets/200924183413-dubai-9-1.jpg"
          alt="Dubai"
          className="img"
        />
        <div className="featuresTitle">
          <h1>Dubai</h1>
          <h2>123 properties</h2>
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
          <h2>240 properties</h2>
        </div>
      </div>
      <div className="featuresItem">
        <img
          src="https://www.atlanticcouncil.org/wp-content/uploads/2021/10/2020-12-08T191655Z_1682490904_RC27JK9UNWXQ_RTRMADP_3_RUSSIA-CITYSCAPE-scaled-e1634651141667.jpg"
          alt="Russia"
          className="img"
        />
        <div className="featuresTitle">
          <h1>Russia</h1>
          <h2>190 properties</h2>
        </div>
      </div>
    </div>
  );
};

export default Features;
