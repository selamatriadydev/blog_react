
import NavBar from "./Component/NavBar";
import Home from "./Portofolio/Home";
import Blog from "./Blog/Blog";
import {
  HashRouter,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
import About from "./About/About";

function App() {
  return (
    <>
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blog" element={<Blog />}>
            <Route path=":parslug" element={<Blog />} />
            <Route path="category/:parcategory" element={<Blog />} />
            <Route path="tag/:partag" element={<Blog />} />
            <Route path="year/:paryear" element={<Blog />} />
          </Route>
          <Route path="about" element={<About />}/>
        </Route>
      </Routes>
    </HashRouter>
    </>
  );
}

function Layout(){
    return (
        <>
        <div className="main-wrapper container">
            <div className="navbar-bg"></div>
            {/* navbar */}
            <NavBar />
            <div className="main-content">
                <section className="section">
                  {/* content  */}
                  <Outlet />
                </section>
            </div>
        </div>

        <footer className="main-footer">
                <div className="footer-left">
                Copyright &copy; 2022 <div className="bullet"></div> Design By Selamat Riady
                </div>
                <div className="footer-right">
                1.0
                </div>
            </footer>
        </>
    )
}

export default App;
