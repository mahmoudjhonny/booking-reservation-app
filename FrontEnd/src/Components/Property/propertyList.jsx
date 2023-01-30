import "./propertyList.css";
import useFetch from "../../Api_Call/useFetch.js";

const PropertyList = () => {
  const { data, loading } = useFetch(
    "http://localhost:8080/api/hotels/countByType"
  );
  const images = [
    "https://www.helnan.com/Uploads/HotelImages/595c476f-61c5-4b3b-b223-e2e0741aa99f.jpg",
    "https://i0.wp.com/afkar1.com/wp-content/uploads/2021/12/v5.jpg?fit=1133%2C900&ssl=1",
    "https://media-cdn.tripadvisor.com/media/photo-s/08/5e/39/90/les-cabines-du-phare.jpg",
    "https://www.waterair.com/wp-content/uploads/2021/10/piscine-rectangle-sara-couloir-de-nage.jpg",
  ];
  return (
    <div className="pList">
      {loading ? (
        <div>Loading ...</div>
      ) : (
        <>
          {images.map((image, i) => (
            <div className="pListItem" key={i}>
              <img src={image} alt="" className="pListImg" />
              <div className="pListTitles">
                <h1>{data[i]?.type}</h1>
                <h2>
                  {data[i]?.count} {data[i]?.type}
                </h2>
              </div>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default PropertyList;
