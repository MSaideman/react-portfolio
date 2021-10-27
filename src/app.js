import Header from "./components/header";
import Footer from "./components/footer";
import Home from "./components/pages/home";
import About from "./components/pages/about";
import Contact from "./components/pages/contact";
import Portfolio from "./components/pages/portfolio";
import PortfolioContainer from "./components/portfoliocontainer";
import Resume from "./components/pages/resume";
import React, { useState } from "react";

function App() {
  const [currentPage, setCurrentPage] = useState("Home");

  const renderPage = () => {
    if (currentPage === "Home") {
      return <Home />;
    }
    if (currentPage === "About") {
      return <About />;
    }
    if (currentPage === "Portfolio") {
      return <Portfolio />;
    }
    if (currentPage === "Contact") {
      return <Contact />;
    }
    return <Resume />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <Header handlePageChange={handlePageChange} currentPage={currentPage} />
      <PortfolioContainer renderPage={renderPage} />
      <Footer />
    </div>
  );
}

export default App;
