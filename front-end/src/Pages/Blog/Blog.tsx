import React from "react";
import "./Blog.scss";

type Props = {};

const Blog = (props: Props) => {
  return (
    <div className="Blog">
      <h1>Check Back Soon</h1>
      <p>
        We are working on something special, check back soon to see what it is.
      </p>
      <div className="notify">
        <label htmlFor="">
          <input type="text" placeholder="Please enter your email address" />
          <button>Notify me</button>
        </label>
        <label htmlFor="" id="check">
          <span>Notify me when the product is ready.</span>
        </label>
      </div>
    </div>
  );
};

export default Blog;