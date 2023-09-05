import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@galvanize-inc/jwtdown-for-react";
import Nav from "./Nav";
import TeamDetail from "./TeamDetail";
import CreateAccount from "./CreateAccount";
import Login from "./Login";
import Logout from "./Logout";
import Home from "./Home";

function App(props) {
  return (
    <div className="container-fluid">
      <BrowserRouter>
        <AuthProvider>
          <Nav />
          <Routes>
            {/* <Route path="/" element={<Home />}></Route>
            <Route path="/TeamDetail" element={<TeamDetail />}></Route> */}
            <Route
              path="/CreateAccountmls/create-account"
              element={<CreateAccount />}
            ></Route>
            {/* <Route path="/Login" element={<Login />}></Route>
            <Route path="/Logout" element={<Logout />}></Route> */}
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
