import React, { useEffect, useRef, useState } from "react";
import { Route, Switch } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";

import NavbarHeader from "./components/Header/NavbarHeader";
import TrangChuPage from "./pages/TrangChuPage/TrangChuPage";
import ThuVienAnhPage from "./pages/ThuVienAnhPage/ThuVienAnhPage";
import LienHePage from "./pages/LienHePage/LienHePage";
import SuKienPage from "./pages/SuKienPage/SuKienPage";
import SinglePost from "./pages/SinglePost/SinglePost";
import Footer from "./components/Footer/Footer";
import GioiThieuPage from "./pages/GioiThieuPage/GioiThieuPage";

import "./css/bootstrap.css";
import "./App.css";
import ChuongTrinhHocPage from "./pages/ChuongTrinhHocPage/ChuongTrinhHocPage";

function App() {
  const navBar = useRef(null);
  const [isSticky, setSticky] = useState(false);
  useEffect(() => {
    const sticky = navBar.current.getBoundingClientRect().top + 99;
    window.addEventListener("scroll", () => {
      if (window.pageYOffset >= sticky) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    });
  }, []);
  return (
    <main>
      <NavbarHeader refBar={navBar} isSticky={isSticky}></NavbarHeader>
      <div className={isSticky ? "paddingIfSticky" : ""}>
        <ScrollToTop></ScrollToTop>
        <Switch>
          <Route exact path="/" component={TrangChuPage}></Route>
          <Route exact path="/gioi-thieu" component={GioiThieuPage}></Route>
          <Route exact path="/thu-vien-anh" component={ThuVienAnhPage}></Route>
          <Route exact path="/su-kien" component={SuKienPage}></Route>
          <Route exact path="/su-kien/:id" component={SinglePost}></Route>
          <Route
            exact
            path="/chuong-trinh-hoc"
            component={ChuongTrinhHocPage}
          ></Route>
          <Route
            exact
            path="/chuong-trinh-hoc:cth"
            component={SinglePost}
          ></Route>
          <Route exact path="/lien-he" component={LienHePage}></Route>
        </Switch>
      </div>
      <Footer></Footer>
    </main>
  );
}

export default App;
