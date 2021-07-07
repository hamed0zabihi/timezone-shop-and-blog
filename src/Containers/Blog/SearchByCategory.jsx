import BigHeroTitle from "../../Components/Layout/Slider/BigheroTitle";
import SearchByCategoryBlog from "../../Components/Blog/SearchBlog/SearchByCategoryBlog";
import SideBar from "../../Components/Blog/SideBar/Sidebar";

const SearchByCategory = () => {
  return (
    <main>
      <BigHeroTitle name="Search By In Blog" />
      <section className="blog_area section-padding">
        <div className="container">
          <div className="row">
            <SearchByCategoryBlog />
            <SideBar />
          </div>
        </div>
      </section>
    </main>
  );
};

export default SearchByCategory;
