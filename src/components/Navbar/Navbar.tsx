import { tabs } from "../../data/mockData";
import { PiBell, PiList, PiMagnifyingGlass } from "react-icons/pi";
import almeriaLogo from "../../assets/almeria-logo.svg";
import profilePhoto from "../../assets/profile-photo.jpg";
import "./Navbar.css";

function Navbar() {
  return (
    <header className="app-header">
      <div className="app-header-logo">
        <div className="logo">
          <span className="logo-icon">
            <img src={almeriaLogo} alt="Almeria logo" />
          </span>
          <h1 className="logo-title">
            <span>Almeria</span>
            <span>NeoBank</span>
          </h1>
        </div>
      </div>

      <div className="app-header-navigation">
        <div className="tabs">
          {tabs.map((tab) => (
            <a
              key={tab.label}
              href="#"
              className={tab.active ? "active" : undefined}
            >
              {tab.label}
            </a>
          ))}
        </div>
      </div>

      <div className="app-header-actions">
        <button className="user-profile" type="button">
          <span>Adesina Emmanuel</span>
          <span>
            <img
              src={profilePhoto}
              alt="Adesina Emmanuel"
              className="user-profile-image"
            />
          </span>
        </button>

        <div className="app-header-actions-buttons">
          <button className="icon-button large" type="button" aria-label="Search">
            <PiMagnifyingGlass />
          </button>
          <button
            className="icon-button large"
            type="button"
            aria-label="Notifications"
          >
            <PiBell />
          </button>
        </div>
      </div>

      <div className="app-header-mobile">
        <button className="icon-button large" type="button" aria-label="Menu">
          <PiList />
        </button>
      </div>
    </header>
  );
}

export default Navbar;
