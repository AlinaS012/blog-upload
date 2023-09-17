import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faMagnifyingGlass, faXmark } from '@fortawesome/free-solid-svg-icons'
import { faSquareFacebook, faSquareInstagram, faSquarePinterest, faSquareTwitter } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom'
import './topBar.css'
import { useContext, useState } from 'react'
import { Context } from '../../context/authContext'

const TopBar = () => {
  const {user,dispatch} = useContext(Context);
  const [openMenu,setOpenMenu]=useState(false)
  const handleLogout =()=>{
    dispatch({type:"LOGOUT"})
  }
 
  return (<>
  <div onClick={()=>setOpenMenu(!openMenu)} className="menuIcon">
    { !openMenu? <FontAwesomeIcon  icon={faBars} />:<FontAwesomeIcon icon={faXmark} />}
  </div>
    {openMenu && 
    <div className="menu">
      <div className="menuWrapper">
        <ul>
          <li>HOME</li>
          <li>ABOUT</li>
          <li>CONTACT</li>
          <li>WRITE</li>
          {user && <li>LOGOUT</li>}
        </ul>
      </div>
    </div>}
    <div className="topbar">
      <div className="socials">
        <FontAwesomeIcon icon={faSquareFacebook} />
        <FontAwesomeIcon icon={faSquareInstagram} />
        <FontAwesomeIcon icon={faSquarePinterest} />
        <FontAwesomeIcon icon={faSquareTwitter} />
      </div>
      <div className="tpOptions">
        <ul className="tpOptions">
          <Link to="/" style={{ color: "gray", textDecoration: "none", fontFamily: "Josefin Sans" }}>
            <li>HOME</li>
          </Link>
          <li>ABOUT</li>
          <li>CONTACT</li>
          <Link to="/newPost" style={{color:'inherit',textDecoration:'none'}}>
            <li>WRITE</li>
          </Link>
          {user && <li onClick={handleLogout}>LOGOUT</li>}
        </ul>
      </div>
      <div className="tpSearch">
        <Link to="/settings">
          <div className="userIcon">
            {
              user ? (
              <img src={user.details?.picture} alt="" />
              ) : (
              <ul className='tpOptions'>
                <li>
                  <Link to="/register" style={{ textDecoration: "none", color: "gray" }}>REGISTER</Link>
                </li>
                <li>
                  <Link to="/login" style={{ textDecoration: "none", color: "gray" }}>LOGIN</Link>
                </li>
              </ul>
              )
            }
          </div>
        </Link>
        <div className="search">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </div>
      </div>
    </div>
  </>)
}

export default TopBar
