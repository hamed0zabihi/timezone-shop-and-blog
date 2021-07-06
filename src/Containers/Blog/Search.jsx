import BigHeroTitle from "../../Components/Layout/Slider/BigheroTitle";
import SearchBlog from "../../Components/Blog/SearchBlog/SearchBlog";
import SideBar from "../../Components/Blog/SideBar/Sidebar";

const Search = () => {
  return (
    <main>
      <BigHeroTitle name="Search in Blog" />
      <section className="blog_area section-padding">
        <div className="container">
          <div className="row">
            <SearchBlog />
            <SideBar />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Search;
