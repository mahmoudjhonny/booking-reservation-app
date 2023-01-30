import "./propertyList.css";
import useFetch from "../../Api_Call/useFetch.js";

const PropertyList = () => {
  const { data, loading } = useFetch(
    "http://localhost:8080/api/hotels/countByType"
  );
  return (
    <div className="pList">
      {loading ? (
        <div>Loading ...</div>
      ) : (
        <>
          <div className="pListItem">
            <img
              src="https://www.helnan.com/Uploads/HotelImages/595c476f-61c5-4b3b-b223-e2e0741aa99f.jpg"
              alt=""
              className="pListImg"
            />
            <div className="pListTitles">
              <h1>Hotels</h1>
              <h2> hotels</h2>
            </div>
          </div>
          <div className="pListItem">
            <img
              src="https://i0.wp.com/afkar1.com/wp-content/uploads/2021/12/v5.jpg?fit=1133%2C900&ssl=1"
              alt=""
              className="pListImg"
            />
            <div className="pListTitles">
              <h1>Villas</h1>
              <h2>Villas</h2>
            </div>
          </div>
          <div className="pListItem">
            <img
              src="https://media-cdn.tripadvisor.com/media/photo-s/1b/64/1a/36/walnut-cabin.jpg"
              alt=""
              className="pListImg"
            />
            <div className="pListTitles">
              <h1>Cabins</h1>
              <h2>Cabins</h2>
            </div>
          </div>

          <div className="pListItem">
            <img
              src="https://www.waterair.com/wp-content/uploads/2021/10/piscine-rectangle-sara-couloir-de-nage.jpg"
              alt=""
              className="pListImg"
            />
            <div className="pListTitles">
              <h1>Swimming Pool</h1>
              <h2>Swimming Pool</h2>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default PropertyList;
