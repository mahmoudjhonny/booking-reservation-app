import "./Reserve.css";
import { Cancel } from "@mui/icons-material";
import useFetch from "../../Api_Call/useFetch";
import { useContext, useState } from "react";
import { SearchContaxt } from "../../contaxt/SearchContext";

const Reserve = ({ setOpenModal, hotelId }) => {
  const { data, loading, error } = useFetch(
    `http://localhost:8080/api/hotels/rooms/${hotelId}`
  );
  const { dates } = useContext(SearchContaxt);
  const getDatesRange = (start, end) => {
    const date = new Date(start).getTime();
    let list = [];
    while (data <= end) {}
  };

  const [selectedRooms, setSelectedRooms] = useState([]);

  const handleSelect = (e) => {
    const checked = e.target.checked;
    const value = e.target.value;
    setSelectedRooms(
      checked
        ? [...selectedRooms, value]
        : selectedRooms.filter((item) => item !== value)
    );
  };
  const handleClick = () => {};
  return (
    <div className="reserve">
      <div className="rContainer">
        <Cancel className="rClose" onClick={() => setOpenModal(false)} />
        <span>Select your rooms: </span>
        {data.map((item) => (
          <div className="rItem">
            <div className="rItemInfo">
              <div className="rTitle">{item.title}</div>
              <div className="rDesc">{item.desc}</div>
              <div className="rMax">
                Max people: <b>{item.maxPeople}</b>
              </div>
              <div className="rPrice">{item.price}</div>
            </div>
            {item.roomNumbers.map((roomNumber) => (
              <div className="room">
                <label>{roomNumber.number}</label>
                <input
                  type="checkBox"
                  value={roomNumber._id}
                  onChange={handleSelect}
                />
              </div>
            ))}
          </div>
        ))}
        <button onClick={handleClick} className="rButton">
          Reserve Now!
        </button>
      </div>
    </div>
  );
};

export default Reserve;
