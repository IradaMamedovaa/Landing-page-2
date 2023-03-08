import React from "react";
import "./style.scss";
import Flatiron from "../../assets/images/flatiron.jpg";
import Pick1 from "../../assets/images/pick1.jpg";
import Pick2 from "../../assets/images/pick2.jpg";
import Pick3 from "../../assets/images/pick3.jpg";
import Pick4 from "../../assets/images/pick4.jpg";

const EditorsPick = () => {
  return (
    <div className="editorsPick">
      <aside>
        <h2>
          Editor's <br /> Pick
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora,
          possimus?
        </p>
      </aside>
      <div className="pics">
        <div id="img1">
          <img src={Flatiron} alt="" />
        </div>
        <div id="img2">
          <img src={Pick1} alt="" />
        </div>
        <div id="img3">
          <img src={Pick2} alt="" />
        </div>
        <div id="img4">
          <img src={Pick3} alt="" />
        </div>
        <div id="img5">
          <img src={Pick4} alt="" />
        </div>
      </div>
    </div>
  );
};

export default EditorsPick;
