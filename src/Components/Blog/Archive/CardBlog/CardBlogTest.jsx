import React, { Suspense } from "react";
import { Link } from "react-router-dom";
import Images from "../../../Utils/Image";
const CardBlogTest = ({ articles }) => {
  //date
  function progressDate(createdAt) {
    let date = new Date(createdAt);
    return date;
    // let dt = date.getDate();
    // let month = date.toLocaleString("default", { month: "short" });
  }

  return (
    <>
      {articles.map((article, index) => (
        <div key={index}>
          <article className="blog_item">
            <div className="blog_item_img">
              <Images image={article.image} />
              <img
                className="card-img rounded-0"
                src={article.image}
                alt={article.title}
              />
              <a
                href="/#"
                className="blog_item_date"
                onClick={(e) => e.preventDefault()}
              >
                <h3>{progressDate(article.createdAt).getDate()}</h3>
                <p>
                  {progressDate(article.createdAt).toLocaleString("default", {
                    month: "short",
                  })}
                </p>
              </a>
            </div>

            <div className="blog_details">
              <Link to={`/blog/${article.id}`} className="d-inline-block">
                <h2>{article.title}</h2>
              </Link>

              <p className="text-justify">{article.body.slice(0, 140)}...</p>
              <ul className="blog-info-link">
                <li>
                  <i className="fa fa-user"></i>{" "}
                  {article.category.map((el, i) => (
                    <Link
                      to={`/blog/search/category/${el.toLowerCase()}`}
                      key={i}
                    >
                      <span> {el} </span>
                    </Link>
                  ))}
                </li>
                <li>
                  <a href="/#" onClick={(e) => e.preventDefault()}>
                    <i className="fa fa-comments"></i> {article.comments.length}{" "}
                    Comments
                  </a>
                </li>
              </ul>
            </div>
          </article>
        </div>
      ))}
    </>
  );
};

export default CardBlogTest;
