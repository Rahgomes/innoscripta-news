import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "./components/header";
import Footer from "./components/footer";
import Loader from "./components/loader";
const Home = lazy(() => import("./pages/home"));
const Search = lazy(() => import("./pages/search"));
const Category = lazy(() => import("./pages/category"));
const Favorites = lazy(() => import("./pages/favorites"));

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />

        <main className="bg-gray-100 flex-grow flex flex-col">
          <Suspense fallback={<Loader />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/search" element={<Search />} />
              <Route path="/favorites" element={<Favorites />} />
              <Route path="/category/:category" element={<Category />} />
            </Routes>
          </Suspense>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
