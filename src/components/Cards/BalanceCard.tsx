import { serviceItems } from "../../data/mockData";
import { PiCaretDown, PiCaretRightBold, PiMagnifyingGlass } from "react-icons/pi";
import "./Cards.css";

function BalanceCard() {
  return (
    <section className="service-section">
      <h2>Service</h2>

      <div className="service-section-header">
        <div className="search-field">
          <PiMagnifyingGlass />
          <input type="text" placeholder="Account number" />
        </div>

        <div className="dropdown-field">
          <select defaultValue="Home">
            <option>Home</option>
            <option>Work</option>
          </select>
          <PiCaretDown />
        </div>

        <button className="flat-button" type="button">
          Search
        </button>
      </div>

      <div className="mobile-only">
        <button className="flat-button" type="button">
          Toggle search
        </button>
      </div>

      <div className="tiles">
        {serviceItems.map((item) => {
          const Icon = item.icon;

          return (
            <article className="tile" key={item.title}>
              <div className="tile-header">
                <Icon />
                <h3>
                  <span>{item.title}</span>
                  <span>{item.subtitle}</span>
                </h3>
              </div>

              <a href="#">
                <span>Go to service</span>
                <span className="icon-button">
                  <PiCaretRightBold />
                </span>
              </a>
            </article>
          );
        })}
      </div>

      <div className="service-section-footer">
        <p>
          Services are paid according to the current state of the currency and
          tariff.
        </p>
      </div>
    </section>
  );
}

export default BalanceCard;
