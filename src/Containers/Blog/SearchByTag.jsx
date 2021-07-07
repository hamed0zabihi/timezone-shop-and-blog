import BigHeroTitle from "../../Components/Layout/Slider/BigheroTitle";
import SearchByTagBlog from "../../Components/Blog/SearchBlog/SearchByTagBlog";
import SideBar from "../../Components/Blog/SideBar/Sidebar";

const SearchByTag = () => {
  return (
    <main>
      <BigHeroTitle name="Search By In Tag" />
      <section className="blog_area section-padding">
        <div className="container">
          <div className="row">
            <SearchByTagBlog />
            <SideBar />
          </div>
        </div>
      </section>
    </main>
  );
};

export default SearchByTag;
