import SearchBox from "./SearchBox/SearchBox";
import CategoryBox from "./CategoryBox/CategoryBox";
import RecentPostBox from "./RecentPostBox/RecentPostBox";
import TagCloudsBox from "./TagCloudsBox/TagCloudsBox";
import InstagramFeedsBox from "./InstagramFeedsBox/InstagramFeedBox";
import NewsletterBox from "./NewsletterBox/NewsletterBox";

const SideBar = () => {
  return (
    <div className="col-lg-4">
      <div className="blog_right_sidebar">
        <SearchBox />
        <CategoryBox />
        <RecentPostBox />
        <TagCloudsBox />
        <InstagramFeedsBox />
        <NewsletterBox />
      </div>
    </div>
  );
};

export default SideBar;
