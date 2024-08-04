import React from "react";
import "../Blogs/style.css";

function Blogs() {
  return (
    <div className="container mb-5">


      <div className="row">
        <div className="row mt-5 mb-5">
          <div className="shopping_head">
            <h2 className="shopping_title">Latest Blogs</h2>
            <p className="underline"></p>
          </div>
        </div>
        <div className="col-lg-4 mb-4">
          <div className="blog_img blog_img_1">
                <div className="blog_content">
                    <h4 className="content_title">Here are the trends I see coming this fall</h4>
                    <p className="content_info">by admin | dec 01,2017</p>
                    <p className="content_readMore">Read more</p>
                </div>
          </div>
        </div>

        <div className="col-lg-4 mb-4">
          <div className="blog_img blog_img_2">
                <div className="blog_content">
                    <h4 className="content_title">Here are the trends I see coming this fall</h4>
                    <p className="content_info">by admin | dec 01,2017</p>
                    <p className="content_readMore">Read more</p>
                </div>
          </div>
        </div>

        <div className="col-lg-4 mb-4">
          <div className="blog_img blog_img_3">
                <div className="blog_content">
                    <h4 className="content_title">Here are the trends I see coming this fall</h4>
                    <p className="content_info">by admin | dec 01,2017</p>
                    <p className="content_readMore">Read more</p>
                </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blogs;
