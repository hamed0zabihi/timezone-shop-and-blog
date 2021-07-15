import Comments from "./Comments";
import CommentForm from "./CommentForm/CommentForm";
import { Link } from "react-router-dom";
import moment from "moment";

const SinglePost = ({
  title = "Google inks pact for new 35-storey office",
  image = "/images/blog/single_blog_1.png",
  createdAt,
  body = "MCSE boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction of the camp price. However, who has the willpower to actually sit through a self-imposed MCSE training. who has the willpower to actually",
  author,
  authorAvatar = "/images/blog/author.png",
  category = [],
  tag = [],
  comments = [],
}) => {
  return (
    <div className="col-lg-8 posts-list">
      <div className="single-post">
        <div className="feature-img">
          <img className="img-fluid" src={image} alt={title} />
        </div>
        <div className="blog_details">
          <h2>{title}</h2>
          <ul className="blog-info-link mt-3 mb-4">
            <li>
              <i className="fa fa-user"></i>
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
            <li>
              <a href="/#" onClick={(e) => e.preventDefault()}>
                <i className="fa fa-calender"></i>{" "}
                {moment(createdAt).format("DD MMM YYYY")}
              </a>
            </li>
          </ul>

          <p className="text-justify">{body}</p>
        </div>
      </div>
      <div className="navigation-top">
        <div className="d-sm-flex justify-content-between text-center">
          <p className="like-info">
            <span className="align-middle">
              <i className="fa fa-heart"></i>
            </span>
            Lily and 4 people like this
          </p>
          <div className="col-sm-4 text-center my-2 my-sm-0">
            <p className="comment-count">
              <span className="align-middle">
                <i className="fa fa-comment"></i>
              </span>
              {comments.length} Comments
            </p>
          </div>
          <ul className="social-icons">
            <li>
              <a href="/#" onClick={(e) => e.preventDefault()}>
                <i className="fab fa-facebook-f"></i>
              </a>
            </li>
            <li>
              <a href="/#" onClick={(e) => e.preventDefault()}>
                <i className="fab fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="/#" onClick={(e) => e.preventDefault()}>
                <i className="fab fa-dribbble"></i>
              </a>
            </li>
            <li>
              <a href="/#" onClick={(e) => e.preventDefault()}>
                <i className="fab fa-behance"></i>
              </a>
            </li>
          </ul>
        </div>
        <div className="navigation-area">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-12 nav-left flex-row d-flex justify-content-start align-items-center">
              <div className="thumb">
                <a href="/#" onClick={(e) => e.preventDefault()}>
                  <img
                    className="img-fluid"
                    src="/images/post/preview.png"
                    alt=""
                  />
                </a>
              </div>
              <div className="arrow">
                <a href="/#" onClick={(e) => e.preventDefault()}>
                  <span className="lnr text-white ti-arrow-left"></span>
                </a>
              </div>
              <div className="detials">
                <p>Prev Post</p>
                <a href="/#" onClick={(e) => e.preventDefault()}>
                  <h4>Space The Final Frontier</h4>
                </a>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-12 nav-right flex-row d-flex justify-content-end align-items-center">
              <div className="detials">
                <p>Next Post</p>
                <a href="/#" onClick={(e) => e.preventDefault()}>
                  <h4>Telescopes 101</h4>
                </a>
              </div>
              <div className="arrow">
                <a href="/#" onClick={(e) => e.preventDefault()}>
                  <span className="lnr text-white ti-arrow-right"></span>
                </a>
              </div>
              <div className="thumb">
                <a href="/#" onClick={(e) => e.preventDefault()}>
                  <img
                    className="img-fluid"
                    src="/images/post/next.png"
                    alt=""
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="blog-author">
        <div className="media align-items-center">
          <img src={authorAvatar} alt={author} />
          <div className="media-body">
            <a href="/#" onClick={(e) => e.preventDefault()}>
              <h4>{author}</h4>
            </a>
            <p>
              Second divided from form fish beast made. Every of seas all
              gathered use saying you're, he our dominion twon Second divided
              from
            </p>
          </div>
        </div>
      </div>
      <div className="comments-area">
        <h4>{comments.length} Comments</h4>
        {comments.length > 0
          ? comments.map((el, index) => <Comments key={index} {...el} />)
          : ""}
      </div>
      <div className="comment-form">
        <h4>Leave a Reply</h4>
        <CommentForm />
      </div>
    </div>
  );
};

export default SinglePost;
