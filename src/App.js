import EditBuyTicket from "./components/EditBuyTicket/EditBuyTicket";
import EditSellTicket from "./components/EditSellTicket/EditSellTicket";
import Navigation from "./components/Navigation";
import Seller from "./components/SellingPage/Seller";
import SellTicket from "./components/SellTicket/SellTicket";
import SignUp from "./components/SignUp/SignUp";
import Dashboard from './components/Dashboard/Dashboard';
import Login from "./components/Login/Login";
import BuyTicket from "./components/BuyTicket/BuyTicket";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

function App() {

  const router = createBrowserRouter([
    {
      path:'/',
      element:<Login/>
    },
    {
      path:'/dashboard',
      element:<Dashboard/>
    },
    {
      path:'/editbuyticket',
      element:<EditBuyTicket/>
    },
    {
      path:'/editsellticket',
      element:<EditSellTicket/>
    },
    {
      path:'/sellticket',
      element:<SellTicket/>
    },
    {
      path:'/buyticket',
      element:<BuyTicket/>
    },
    {
      path:'/signup',
      element:<SignUp/>
    },
    {
      path:'/seller',
      element:<Seller/>
    },
  ])

  return (
    <RouterProvider router={router}/>
  );
}

export default App;
