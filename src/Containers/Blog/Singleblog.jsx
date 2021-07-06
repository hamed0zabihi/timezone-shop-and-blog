import BigHeroTitle from "../../Components/Layout/Slider/BigheroTitle";
import SinglePost from "../../Components/Blog/SinglePost/SinglePost";
import SideBar from "../../Components/Blog/SideBar/Sidebar";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router";
import { GetArticle } from "../../Redux/Actions/Blog/Articles/GetArticles";
const SingleBlog = () => {
  const dispatch = useDispatch();
  const article = useSelector((state) => state.article);
  const { blogId } = useParams();
  const idBlog = blogId;
  //get id
  useEffect(() => {
    dispatch(GetArticle(idBlog));
  }, [dispatch, idBlog]);
  console.log("article in single blog", article.title);
  return (
    <main>
      <BigHeroTitle name={article.title} />
      <section class="blog_area single-post-area section-padding">
        <div class="container">
          <div class="row">
            <SinglePost {...article} />
            <SideBar />
          </div>
        </div>
      </section>
    </main>
  );
};

export default SingleBlog;
