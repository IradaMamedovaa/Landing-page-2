import React from "react";
import "./style.scss";

const Header = () => {
  return (
    <header>
      <nav>
        <div className="logo">
          <p> trppd __</p>
        </div>
        <div className="user">
          <a href="#">My Collection</a>
          <p> | </p>
          <a href="#" className="account">
            Name Surname{" "}
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/b/b2/A_black_background.jpg"
              alt=""
              className="avatar"
            />
          </a>
        </div>
      </nav>
      <div className="container">
        <aside>
          <a href="#">Home</a>
          <a href="#">Recommendation</a>
          <a href="#">Explore</a>
          <a href="#">Help</a>
          <a href="#">About us</a>
        </aside>
        <div className="content">
          <h2>
            The Walchen <br />
            Lake
          </h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto
            debitis in hic culpa assumenda error modi dolores odio praesentium
            labore.
          </p>
          <button>Read more</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
