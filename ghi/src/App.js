import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@galvanize-inc/jwtdown-for-react";
import Nav from "./Nav";
import TeamDetail from './TeamDetail';
import CreateAccount from "./CreateAccount";
import Login from "./Login";
import Logout from "./Logout";


function App(props) {
  return (
    <div className="container-fluid">
      <BrowserRouter>
        <AuthProvider>
          <Nav />
          <Routes>
            <Route path="/" element={<TeamDetail />}></Route>
            <Route path="/" element={<CreateAccount />}></Route>
            <Route path="/" element={<Login />}></Route>
            <Route path="/" element={<Logout />}></Route>
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
