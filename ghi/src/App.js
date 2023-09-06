import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@galvanize-inc/jwtdown-for-react";
import Nav from "./MLS/Nav";
import TeamDetail from "./MLS/TeamDetail";
import CreateAccount from "./MLS/CreateAccount";
import LoginForm from "./MLS/Login";
import Home from "./MLS/Home";
import Favorites from "./MLS/Favorites";
import Search from "./MLS/Search";
import TeamList from "./MLS/TeamList";
import TeamCard from "./MLS/TeamCard";

function App(props) {
  return (
    <div className="container-fluid">
      <BrowserRouter>
        <AuthProvider>
          <Nav />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/TeamDetail" element={<TeamDetail />}></Route>
            <Route path="/CreateAccount" element={<CreateAccount />}></Route>
            <Route path="/Login" element={<LoginForm />}></Route>
            <Route path="/Favorites" element={<Favorites />}></Route>
            <Route path="/Search" element={<Search />}></Route>
            <Route path="/TeamList" element={<TeamList />}></Route>
            <Route path="/TeamCard" element={<TeamCard />}></Route>
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
