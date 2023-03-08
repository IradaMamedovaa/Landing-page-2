import React from "react";
import "./style.scss";

const Subscription = () => {
  return (
    <div className="subscription">
      <div className="container">
        <h3>Subscribe to our news letter</h3>
        <div>
          <input type="text" placeholder="Your Email"/> <button>Subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default Subscription;
