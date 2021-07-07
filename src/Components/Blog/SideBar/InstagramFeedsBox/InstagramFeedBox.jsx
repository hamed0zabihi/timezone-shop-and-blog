const InstagramFeedsBox = () => {
  return (
    <aside className="single_sidebar_widget instagram_feeds">
      <h4 className="widget_title">Instagram Feeds</h4>
      <ul className="instagram_row flex-wrap">
        <li>
          <a href="/#" onClick={(e) => e.preventDefault()}>
            <img className="img-fluid" src="/images/post/post_5.png" alt="" />
          </a>
        </li>
        <li>
          <a href="/#" onClick={(e) => e.preventDefault()}>
            <img className="img-fluid" src="/images/post/post_6.png" alt="" />
          </a>
        </li>
        <li>
          <a href="/#" onClick={(e) => e.preventDefault()}>
            <img className="img-fluid" src="/images/post/post_7.png" alt="" />
          </a>
        </li>
        <li>
          <a href="/#" onClick={(e) => e.preventDefault()}>
            <img className="img-fluid" src="/images/post/post_8.png" alt="" />
          </a>
        </li>
        <li>
          <a href="/#" onClick={(e) => e.preventDefault()}>
            <img className="img-fluid" src="/images/post/post_9.png" alt="" />
          </a>
        </li>
        <li>
          <a href="/#" onClick={(e) => e.preventDefault()}>
            <img className="img-fluid" src="/images/post/post_10.png" alt="" />
          </a>
        </li>
      </ul>
    </aside>
  );
};

export default InstagramFeedsBox;
