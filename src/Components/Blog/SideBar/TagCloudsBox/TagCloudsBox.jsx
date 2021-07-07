import { useSelector } from "react-redux";

const TagCloudsBox = () => {
  const AllArticles1 = useSelector((state) => state.articles);
  const AllTagsInOneArray = AllArticles1.map((el) => el.tag).flat(1);
  //toLowerCase every tag
  const AllTagsInOneArrayLowerCase = AllTagsInOneArray.map((el) =>
    el.toLowerCase()
  );
  //uniqe Tag
  let uniqueTags = [...new Set(AllTagsInOneArrayLowerCase)];
  const tagUniquePerArticle = uniqueTags.reduce((acc, tag) => {
    return [
      ...acc,
      {
        tag,
        productdat: AllArticles1.filter((product) =>
          product.category.find((cat) => cat.toLowerCase() === tag)
        ),
      },
    ];
  }, []);
  console.log("tag unique", tagUniquePerArticle);

  return (
    <aside className="single_sidebar_widget tag_cloud_widget">
      <h4 className="widget_title">Tag Clouds</h4>
      <ul className="list">
        {tagUniquePerArticle.map((el, index) => (
          <li key={index}>
            <a href="/#">{el.tag}</a>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default TagCloudsBox;
