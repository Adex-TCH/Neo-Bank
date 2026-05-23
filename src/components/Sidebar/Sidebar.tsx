import { navigationItems } from "../../data/mockData";
import "./Sidebar.css";

function Sidebar() {
  return (
    <aside className="app-body-navigation">
      <nav className="navigation">
        {navigationItems.map((item) => {
          const Icon = item.icon;

          return (
            <a key={item.label} href="#">
              <Icon />
              <span>{item.label}</span>
            </a>
          );
        })}
      </nav>

      <footer className="footer">
        <h1>
          Almeria<small>{"\u00A9"}</small>
        </h1>
        <div>
          {"Almeria \u00A9"}
          <br />
          All Rights Reserved 2021
        </div>
      </footer>
    </aside>
  );
}

export default Sidebar;
