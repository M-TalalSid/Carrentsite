import Header from "../components/header";
import Sidebar from "../components/sidebar";
import MainCarList from "../components/mainCarList";
import Footer from "../components/footer";

export function AllCars() {
  return (
    <div>
      <Header />
      <Sidebar />
      <MainCarList />
      <Footer />
    </div>
  );
}
export default AllCars;