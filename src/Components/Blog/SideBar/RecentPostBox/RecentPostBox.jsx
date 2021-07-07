import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import _ from "lodash";

const RecentPostBox = () => {
  const articles = useSelector((state) => state.articles);
  //select 5 recent post
  const fiveRecentArticle = _(articles)
    .orderBy("createdAt", "desc")
    .take(5)
    .value();
  //date

  return (
    <aside className="single_sidebar_widget popular_post_widget">
      <h3 className="widget_title">Recent Post</h3>
      {fiveRecentArticle.map((el, index) => (
        <div className="media post_item" key={index}>
          <img src={el.image} alt="post" width="80px" height="80px" />
          <div className="media-body">
            <Link to={`/blog/${el.id}`}>
              <h3>{el.title.slice(0, 20)}...</h3>
            </Link>
            <p>January 12, 2019</p>
          </div>
        </div>
      ))}
    </aside>
  );
};

export default RecentPostBox;
