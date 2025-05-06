import React ,{useState}from 'react'
import './Navbar.css'
import { assets } from '../../assets/frontend_assets/assets'
import { Link } from 'react-router-dom';
const Navbar = ({setShowLogin}) => {
  const [menu , setmenu] = useState();
  return (
    <div className='navbar'>
        <img src={assets.logo} alt="" className='logo'/>
        <ul className="nav-menu">
            {/* when click setMenue updated for that respectiveo one , then className assigned 
            for example for Home , if menue == home than classNmae active will assigned otherwise it removed also ""*/}
            <Link to='/' onClick={()=>{setmenu("home")} }className={menu==="home"?"active":""}>home</Link>
            <a href='#explore-menu' onClick={()=>{setmenu("menu")} }className={menu==="menu"?"active":""}>menu</a>
            <a href='#app-download' onClick={()=>{setmenu("mobile app")} }className={menu==="mobile app"?"active":""}>mobile app</a>
            <a href='#footer' onClick={()=>{setmenu("contact us")} }className={menu==="contact us"?"active":""}>contact us</a>
        </ul>
        <div className="nav-icons">
          <img src={assets.search_icon} alt="" />
          <div className="navbar-search-icon">
              <img src={assets.basket_icon} alt="" />
              <div className="dot"></div>
          </div>
          <button onClick={()=>setShowLogin(true)}> sign in</button>
        </div>
    </div>
  )
}

export default Navbar
