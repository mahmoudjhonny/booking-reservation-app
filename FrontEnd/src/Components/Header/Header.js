import "./Header.css";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRangePicker } from "react-date-range";
import { useState } from "react";
import {
  Hotel,
  Flight,
  DirectionsCar,
  LocalTaxi,
  CalendarMonth,
  Person,
} from "@mui/icons-material";
import { format } from "date-fns";

function Header({ type }) {
  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });

  const handleClick = (name, opt) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: opt === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };

  return (
    <div className="header">
      <div
        className={type !== "list" ? "headerContainer" : "headerContainer list"}
      >
        <div className="headerList">
          <div className="headerListItem active">
            <Hotel />
            <span>Stays</span>
          </div>
          <div className="headerListItem">
            <Flight />
            <span>Flights</span>
          </div>
          <div className="headerListItem">
            <DirectionsCar />
            <span>Car Rental</span>
          </div>
          <div className="headerListItem">
            <Hotel />
            <span>Attractions</span>
          </div>
          <div className="headerListItem">
            <LocalTaxi />
            <span>Airport taxis</span>
          </div>
        </div>
        {type !== "list" && (
          <>
            <h1 className="headerTitle">
              A lifetime of discount? It's Genius.
            </h1>
            <p className="headerDesc">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
            <button className="headerBtn">Sign in / Register</button>
            <div className="headerSearch">
              <div className="headerSearchItem">
                <Hotel className="headerIcon" />
                <input
                  type="text"
                  className="headerSearchInput"
                  placeholder="Where are you going?"
                />
              </div>
              <div className="headerSearchItem">
                <CalendarMonth className="headerIcon" />
                <span
                  onClick={() => setOpenDate(!openDate)}
                  className="headerSearchText"
                >{`${format(date[0].startDate, "dd/MM/yyyy")} to ${format(
                  date[0].endDate,
                  "dd/MM/yyyy"
                )}`}</span>
                {openDate && (
                  <DateRangePicker
                    editableDateInputs={true}
                    ranges={date}
                    onChange={(item) => setDate([item.selection])}
                    moveRangeOnFirstSelection={false}
                    className="date"
                  />
                )}
              </div>
              <div className="headerSearchItem">
                <Person className="headerIcon" />
                <span
                  className="headerSearchText"
                  onClick={() => setOpenOptions(!openOptions)}
                >{`${options.adult} adults . ${options.children} children . ${options.room} room`}</span>
                {openOptions && (
                  <div className="options">
                    <div className="optionItem">
                      <span className="optionText">Adult</span>
                      <div className="optionCounter">
                        <button
                          disabled={options.adult <= 1}
                          className="optionCounterButton"
                          onClick={() => handleClick("adult", "d")}
                        >
                          -
                        </button>
                        <span className="optionCounterNumber">
                          {options.adult}
                        </span>
                        <button
                          className="optionCounterButton"
                          onClick={() => handleClick("adult", "i")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="optionItem">
                      <span className="optionText">Children</span>
                      <div className="optionCounter">
                        <button
                          disabled={options.children < 1}
                          className="optionCounterButton"
                          onClick={() => handleClick("children", "d")}
                        >
                          -
                        </button>
                        <span className="optionCounterNumber">
                          {options.children}
                        </span>
                        <button
                          className="optionCounterButton"
                          onClick={() => handleClick("children", "i")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="optionItem">
                      <span className="optionText">Room</span>
                      <div className="optionCounter">
                        <button
                          disabled={options.room <= 1}
                          className="optionCounterButton"
                          onClick={() => handleClick("room", "d")}
                        >
                          -
                        </button>
                        <span className="optionCounterNumber">
                          {options.room}
                        </span>
                        <button
                          className="optionCounterButton"
                          onClick={() => handleClick("room", "i")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div className="headerSearchItem">
                <button className="headerBtn">Search</button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Header;
