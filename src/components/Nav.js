import React from "react";
import { Link } from "react-router-dom";
import { FaHome, FaBitbucket } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";


function Nav() {
  return (
    <nav>
      <Link to="/">
        <i>
          <FaHome />
        </i>{" "}
        People
      </Link>

      {/* <Link to="/projects">
        <i>
        <CgWebsite />
        </i>{" "}
        Projects
      </Link> */}

      {/* <Link to="/topics">
        <i>
          <FcIdea />
        </i>{" "}
        Topics
      </Link> */}

      <Link to="/bucketlistlog">
        <i>
          <FaBitbucket />
        </i>{" "}
        Bucket List
      </Link>

      <Link to="/orders">
        <i>
          <FiShoppingCart />
        </i>{" "}
        Orders
      </Link>



      {/* <Link to="/contact">
        <i>
          <IoIosContact />
        </i>{" "}
        Contact
      </Link> */}
    </nav>
  );
}

export default Nav;
