import BigHeroTitle from "../../Components/Layout/Slider/BigheroTitle";
import Archive from "../../Components/Blog/Archive/Archive";
import SideBar from "../../Components/Blog/SideBar/Sidebar";
import ScrollToTop from "../../Components/Utils/ScrollToTop";
const Blog = () => {
  return (
    <main>
      <BigHeroTitle name="Blog" />
      <section className="blog_area section-padding">
        <div className="container">
          <div className="row">
            <Archive />
            <SideBar />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Blog;
