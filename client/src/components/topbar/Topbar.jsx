import "./topbar.css";
import { Search, Person, Chat, Notifications } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { FaFacebook, FaFontAwesomeFlag, FaGamepad, FaHome, FaSistrix, FaUsers, FaVideo, FaFacebookMessenger, FaBell, FaCaretDown, FaUserCircle, } from "react-icons/fa";



export default function Topbar() {
  const { user } = useContext(AuthContext);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  function logout() {
    window.localStorage.clear();
    window.location.href = '/register';
  }
  
  return (
    <div className="Header">
    <div className="header__left">
    <a className="hleftlogo" href="/"><FaFacebook className="hlogo"/></a> 
    <div className="header__input">
    <FaSistrix />
    <input placeholder="Search Facebook" type="text" />
  </div>
    </div>
    <div className="header__middle">
  <div className="header__option header__option--active">
    <FaHome fontSize="25px" />
  </div>
  <div className="header__option">
    <FaFontAwesomeFlag fontSize="25px" />
  </div>
  <div className="header__option">
    <FaVideo fontSize="25px" />
  </div>
  <div className="header__option">
    <FaUsers fontSize="25px" />
  </div>
  <div className="header__option">
    <FaGamepad fontSize="25px" />
  </div>
</div>
    <div className="header__right">
    <Link to={`/profile/${user.username}`}>
    <img
      src={
        user.profilePicture
          ? PF + user.profilePicture
          : PF + "person/noAvatar.png"
      }
      alt=""
      className="topbarImg"
    />
  </Link>
        <a className="header__option" ><FaBell fontSize="25px"/></a>
        <a className="header__option" ><FaFacebookMessenger fontSize="25px"/></a>
        <a className="header__option" onClick={logout} >Logout</a>
    </div>
</div>
)
}
