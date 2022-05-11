import './navbar.css';

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='navbarContainer'>
            <span className='logo'>booking</span>
            <div className='navbarItems'>
                <button className='navbarItem'>Login</button>
                <button className='navbarItem'>Register</button>
            </div>
        </div>
    </div>
  )
}

export default Navbar