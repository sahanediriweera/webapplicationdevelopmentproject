import Navigation from "./components/Navigation";
import SignUp from "./components/SignUp/SignUp";
//import Dashboard from './components/Dashboard/Dashboard';
//import Login from "./components/Login/Login";

function App() {
  return (
    <div className="App">
      <Navigation/>
      {/* <Dashboard/> */}
      {/* <Login/> */}
      <SignUp/>
    </div>
  );
}

export default App;
