import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import React from "react";

// import StarRating from "./StarRating";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    {/* <StarRating maxRating={5} />
    <StarRating
      defaultRating={4}
      color="black"
      size={20}
      messages={["Ugly", "Bad", "Good", "Best", "Top G"]}
    /> */}
  </React.StrictMode>
);
