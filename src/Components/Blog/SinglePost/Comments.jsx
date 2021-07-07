const Comments = ({
  avatar = "/images/comment/comment_1.png",
  name = "name family",
  comment = "Multiply sea night grass fourth day sea lesser rule open subduefemale fill which them Blessed, give fill lesser bearing multiply sea night grass fourth day sea lesser",
  createdAt = "2021-03-02T12:50:43.504Z",
}) => {
  const date = new Date(createdAt);
  const month = date.toString();
  return (
    <div className="comment-list">
      <div className="single-comment justify-content-between d-flex">
        <div className="user justify-content-between d-flex">
          <div className="thumb">
            <img src={avatar} alt={name} />
          </div>
          <div className="desc">
            <p className="comment">{comment}</p>
            <div className="d-flex justify-content-between">
              <div className="d-flex align-items-center ">
                <h5>
                  <a
                    href="/#"
                    className="text-dark"
                    onClick={(e) => e.preventDefault()}
                  >
                    {name}
                  </a>
                </h5>
                <p className="date">{month}</p>
              </div>
              <div className="reply-btn">
                <a href="/#" className="btn-reply text-uppercase">
                  reply
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comments;
