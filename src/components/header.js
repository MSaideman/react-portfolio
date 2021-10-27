import React from "react";
import NavTabs from "./navtabs";

function Header({currentPage, handlePageChange}) {
  return (
    <div>
      <div>
        <nav >
          <NavTabs
            handlePageChange={handlePageChange}
            currentPage={currentPage}
          />
        </nav>
      </div>
    </div>
  );
}

export default Header;
