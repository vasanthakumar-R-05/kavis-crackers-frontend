// SplitPage.jsimport React, { useState } from "react";
import '../Styles/SplitPage.css'; // Import CSS file for styling

const SplitPage = () => {
  return (
    <div className="split-container">
      <div className="left-pane">
        <div className="content">
          <h1>Left Pane</h1>
          <p>Content for the left pane goes here.</p>
         
         
        </div>
      </div>
      <div className="right-pane">
        <div className="content">
          <h1>Right Pane</h1>
          <p>Content for the right pane goes here.</p>
        </div>
      </div>
    </div>
  );
};

export default SplitPage;
