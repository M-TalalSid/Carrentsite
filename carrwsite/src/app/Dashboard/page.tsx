import Header from "../components/header";
import Sidebar2 from "../components/sidebar2";
import DetailsRental from "../components/detailsRental";
import Top5CarRental from "../components/top5CarRental";
import RecentTransactions from "../components/recentTransactions";
import Footer from "../components/footer";

export function Dashboard() {
  return (
    <div>
      <Header />
      <Sidebar2 />
      <DetailsRental />
      <Top5CarRental />
      <RecentTransactions />
      <Footer />
    </div>
  );
}

export default Dashboard;