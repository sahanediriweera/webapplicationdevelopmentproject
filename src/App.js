import EditBuyTicket from "./components/EditBuyTicket/EditBuyTicket";
import Navigation from "./components/Navigation";
//import Seller from "./components/SellingPage/Seller";
//import SellTicket from "./components/SellTicket/SellTicket";
//import SignUp from "./components/SignUp/SignUp";
//import Dashboard from './components/Dashboard/Dashboard';
//import Login from "./components/Login/Login";
//import BuyTicket from "./components/BuyTicket/BuyTicket";

function App() {
  return (
    <div className="App">
      <Navigation/>
      {/* <Dashboard/> */}
      {/* <Login/> */}
      {/* <SignUp/> */}
      {/* <Seller/> */}
      {/* <SellTicket/> */}
      {/* <BuyTicket/> */}
      <EditBuyTicket/>
    </div>
  );
}

export default App;
