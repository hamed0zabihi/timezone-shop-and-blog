import { Link } from "react-router-dom";
import Image from "../../../Utils/Image";

const CardBlog = ({
  id = 1,
  createdAt = "",
  image,
  title = "Google inks pact for new 35-storey office",
  body = "  That dominion stars lights dominion divide years for fourth have don stars is that he earth it first without heaven in place seed it second morning saying.",
  category = ["Travel", "Lifestyle"],
  comments = [],
}) => {
  //date
  const date = new Date(createdAt);
  const dt = date.getDate();
  const month = date.toLocaleString("default", { month: "short" });

  return (
    <article className="blog_item">
      <div className="blog_item_img">
        {/* <img className="card-img rounded-0" src={image} alt={title} /> */}
        <Image src={image} />
        <a
          href="/#"
          className="blog_item_date"
          onClick={(e) => e.preventDefault()}
        >
          <h3>{dt}</h3>
          <p>{month}</p>
        </a>
      </div>

      <div className="blog_details">
        <Link to={`/blog/${id}`} className="d-inline-block">
          <h2>{title}</h2>
        </Link>

        <p className="text-justify">{body.slice(0, 140)}...</p>
        <ul className="blog-info-link">
          <li>
            <i className="fa fa-user"></i>{" "}
            {category.map((el, i) => (
              <Link to={`/blog/search/category/${el.toLowerCase()}`} key={i}>
                <span> {el} </span>
              </Link>
            ))}
          </li>
          <li>
            <a href="/#" onClick={(e) => e.preventDefault()}>
              <i className="fa fa-comments"></i> {comments.length} Comments
            </a>
          </li>
        </ul>
      </div>
    </article>
  );
};

export default CardBlog;
