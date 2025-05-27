import searchIcon from '../assets/images/search.svg';
import Notification from '../assets/images/notification.png';
import Avatar from '../assets/images/profileIocn.png';
import Add from '../assets/images/add.jpeg';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <span>Health</span>care.
      </div>
      <div className="main-layout">
        <div className="search-bar">
          <div className="search-container">
            <img
              className="search-icon"
              src={searchIcon}
              alt="prefix icon search"
            />
            <input type="text" placeholder="Search" />
          </div>
          <img
            className="notification-icon"
            src={Notification}
            alt="suffix-icon-bell"
          />
        </div>
        <div className="user-profile">
          <img src={Avatar} alt="User Avatar" />
          <img src={Add} alt="Add icon" />
        </div>
      </div>
    </header>
  );
}

export default Header