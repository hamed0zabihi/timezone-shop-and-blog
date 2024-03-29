const Video = () => {
  return (
    <div className="video-area mb-100">
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-lg-12">
            <div className="video-wrap">
              <div className="play-btn ">
                <a
                  className="popup-video"
                  href="/#"
                  onClick={(e) => e.preventDefault()}
                >
                  <i className="fas fa-play"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="thumb-content-box">
          <div className="thumb-content">
            <h3>Next Video</h3>
            <a href="/#" onClick={(e) => e.preventDefault()}>
              <i className="flaticon-arrow"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Video;
