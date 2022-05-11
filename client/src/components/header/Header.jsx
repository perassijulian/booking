import './header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBed, faPlaneDeparture,faCar, faCab, faGuitar } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
  return (
    <div className='header'>
        <div className='headerContainer'>
            <div className='headerList'>
                <div className='headerListItem active'>
                    <FontAwesomeIcon icon={faBed} />
                    <span>Stays</span>
                </div>
                <div className='headerListItem'>
                    <FontAwesomeIcon icon={faPlaneDeparture} />
                    <span>Flights</span>
                </div>
                <div className='headerListItem'>
                    <FontAwesomeIcon icon={faCar} />
                    <span>Cars</span>
                </div>
                <div className='headerListItem'>
                    <FontAwesomeIcon icon={faGuitar} />
                    <span>Attractions</span>
                </div>
                <div className='headerListItem'>
                    <FontAwesomeIcon icon={faCab} />
                    <span>Taxis</span>
                </div>
            </div>
            <h1 className='headerTitle'>A lifetime of discounts? It's Genius.</h1>
            <p className='headerDesc'>Get rewarded for your travels – unlock instant savings of 10% or more with a free Booking.com account</p>
            <button className='headerButton'>Sign in / Register</button>
            </div>
    </div>

  )
}

export default Header