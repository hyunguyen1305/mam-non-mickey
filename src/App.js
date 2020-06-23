import React from "react";
import { Route, Switch } from "react-router-dom";

import NavbarHeader from "./components/Header/NavbarHeader";
import TrangChuPage from "./pages/TrangChuPage/TrangChuPage";
import LienHePage from "./pages/LienHePage/LienHePage";
import Footer from "./components/Footer/Footer";
import MessengerChatBox from "./components/MessengerChatBox";

import "./css/bootstrap.css";
import "./App.css";

function App() {
  return (
    <main>
      <NavbarHeader></NavbarHeader>
      <Switch>
        <Route exact path="/" component={TrangChuPage}></Route>

        <Route exact path="/lien-he" component={LienHePage}></Route>
      </Switch>
      <MessengerChatBox></MessengerChatBox>
      <Footer></Footer>
    </main>
  );
}

export default App;
