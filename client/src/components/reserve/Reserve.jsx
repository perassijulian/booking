import './reserve.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleXmark,
} from "@fortawesome/free-solid-svg-icons";
import useFetch from '../../hooks/useFetch';
import { useState } from 'react';

const Reserve = ({ setOpen, id }) => {
  const { data, error, isLoading } = useFetch(`/hotels/room/${id}`);
  const [selection, setSelection] = useState([]);

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
    console.log(selection)
  }
  
  return (
    <div className='reserve'>
        <div className='rContainer'>
        <FontAwesomeIcon icon={faCircleXmark} onClick={() => setOpen(false)} />
            <span>Select Your Rooms:</span>
            {data.map(room => (
              <div className='rWrapper'>
                <div className='rInfo'>
                  <div className='rTitle'>{room.title}</div>
                  <div className='rDesc'>{room.desc}</div>
                  <div className='rPeople'>Max people: {room.maxPeople}</div>
                  <div className='rPrice'>{room.price}</div>
                </div>
                {room.roomNumbers.map(item=>(
                  <div className='rSelect'>
                    <span className='rNumber'>{item.number}</span>
                    <input type='checkbox' value={room._id} onChange={handleSelect}></input>
                  </div>
                ))}
              </div>
            ))}
        </div>
    </div>
  )
}

export default Reserve