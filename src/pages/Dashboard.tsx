import BalanceCard from "../components/Cards/BalanceCard";
import TransactionCard from "../components/Cards/TransactionCard";
import ExpenseChart from "../components/Charts/ExpenseChart";

function Dashboard() {
  return (
    <div className="dashboard-layout">
      <div className="dashboard-main-column">
        <BalanceCard />
        <TransactionCard />
      </div>
      <div className="dashboard-sidebar-column">
        <ExpenseChart />
      </div>
    </div>
  );
}

export default Dashboard;
