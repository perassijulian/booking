import './reserve.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleXmark,
} from "@fortawesome/free-solid-svg-icons";
import useFetch from '../../hooks/useFetch';
import { useContext, useEffect, useState } from 'react';
import { SearchContext } from '../../context/SearchContext';
import axios from 'axios';

const Reserve = ({ setOpen, id }) => {
  const { data, error, isLoading } = useFetch(`/hotels/room/${id}`);
  const [selection, setSelection] = useState([]);

  const { dates } = useContext(SearchContext);
  
  const getRangeDays = (startDate, endDate) => {
    const start = new Date(startDate);
    const end = new Date(endDate);

    const date = new Date(start.getTime());
    const list = [];

    while (date <= end) {
      list.push(new Date(date).getTime());
      date.setDate(new Date(date).getDate() + 1)
    }

    return list
  }

  const allDays = getRangeDays(dates[0].startDate, dates[0].endDate);

  const isAvailable = (roomNumber) => {
    const isFound = roomNumber.unavailableDates.some((date) =>
      allDays.includes(new Date(date).getTime())
    );

    return !isFound;
  };

  const handleSelect = (e) => {
    const checked = e.target.checked;
    const value = e.target.value;
    setSelection(prevState=>{
      return(
        checked ?
          [...prevState, value] :
          selection.filter((item) => item !== value )
      )
    })
  }

  const handleClick = async (e) => {
    e.preventDefault();
    await Promise.all(
      selection.map(roomId => (
        axios.put(`/rooms/availability/${roomId}`, {dates: allDays})
      ))
    )
  }
  
  return (
    <div className="reserve">
      <div className="rContainer">
        <FontAwesomeIcon
          icon={faCircleXmark}
          className="rClose"
          onClick={() => setOpen(false)}
        />
        <span>Select your rooms:</span>
        {data.map((item) => (
          <div className="rItem" key={item._id}>
            <div className="rItemInfo">
              <div className="rTitle">{item.title}</div>
              <div className="rDesc">{item.desc}</div>
              <div className="rMax">
                Max people: <b>{item.maxPeople}</b>
              </div>
              <div className="rPrice"><b>${item.price}</b> <small>per night</small></div>
            </div>
            <div className="rSelectRooms">
              {item.roomNumbers.map((roomNumber) => (
                <div className="room">
                  <label>{roomNumber.number}</label>
                  <input
                    type="checkbox"
                    value={roomNumber._id}
                    onChange={handleSelect}
                    disabled={!isAvailable(roomNumber)}
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
        <button onClick={handleClick} className="rButton">
          Reserve Now!
        </button>
      </div>
    </div>
  )
}

export default Reserve