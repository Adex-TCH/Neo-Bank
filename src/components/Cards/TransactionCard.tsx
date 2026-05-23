import { transferItems } from "../../data/mockData";
import { PiFunnel, PiPlus } from "react-icons/pi";
import "./Cards.css";

function TransactionCard() {
  return (
    <section className="transfer-section">
      <div className="transfer-section-header">
        <h2>Latest transfers</h2>
        <div className="filter-options">
          <p>Filter selected: more than 100 $</p>
          <button className="icon-button" type="button" aria-label="Filter transfers">
            <PiFunnel />
          </button>
          <button className="icon-button" type="button" aria-label="Add transfer">
            <PiPlus />
          </button>
        </div>
      </div>

      <div className="transfers">
        {transferItems.map((transfer) => (
          <div className="transfer" key={`${transfer.company}-${transfer.digits}`}>
            <div className="transfer-logo">
              <img src={transfer.logo} alt={`${transfer.company} logo`} />
            </div>

            <dl className="transfer-details">
              <div>
                <dt>{transfer.company}</dt>
                <dd>{transfer.description}</dd>
              </div>
              <div>
                <dt>{transfer.digits}</dt>
                <dd>Last four digits</dd>
              </div>
              <div>
                <dt>{transfer.date}</dt>
                <dd>Date payment</dd>
              </div>
            </dl>

            <div className="transfer-number">{transfer.amount}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TransactionCard;
