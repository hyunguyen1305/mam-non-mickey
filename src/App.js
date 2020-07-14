import React, { useEffect, useRef, useState } from "react";
import { Link, Route, Switch } from "react-router-dom";
import "./App.css";
import ChatBox from "./components/ChatBox";
import Footer from "./components/Footer/Footer";
import NavbarHeader from "./components/Header/NavbarHeader";
import "./css/bootstrap.css";
import banner from "./images/baanner.png";
import ChuongTrinhHocPage from "./pages/ChuongTrinhHocPage/ChuongTrinhHocPage";
import GioiThieuPage from "./pages/GioiThieuPage/GioiThieuPage";
import LienHePage from "./pages/LienHePage/LienHePage";
import SinglePost from "./pages/SinglePost/SinglePost";
import SuKienPage from "./pages/SuKienPage/SuKienPage";
import ThuVienAnhPage from "./pages/ThuVienAnhPage/ThuVienAnhPage";
import TrangChuPage from "./pages/TrangChuPage/TrangChuPage";
import ScrollToTop from "./ScrollToTop";

function App() {
  const navBar = useRef(null);
  const [isSticky, setSticky] = useState(false);
  const handleScroll = () => {
    if (navBar.current) {
      setSticky(navBar.current.getBoundingClientRect().top <= 0);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", () => handleScroll);
    };
  }, []);
  return (
    <main>
      <div className="container" style={{ padding: "0.8rem 0" }}>
        <Link to="/">
          <img src={banner} alt="banner" style={{ margin: "0 auto" }}></img>
        </Link>
      </div>
      <div className={`${isSticky ? " sticky" : ""}`} ref={navBar}>
        <NavbarHeader></NavbarHeader>
      </div>

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

      <ChatBox></ChatBox>
      <Footer></Footer>
    </main>
  );
}

export default App;
