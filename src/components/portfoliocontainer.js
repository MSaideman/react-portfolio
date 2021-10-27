import React from 'react';

function PortfolioContainer({renderPage}) {
    return (
      <div>
        {renderPage()}
      </div>
    );
  }

export default PortfolioContainer;