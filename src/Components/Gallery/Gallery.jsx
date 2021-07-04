const Gallery = () => {
  const imageOne = "./images/gallery/gallery1.png";
  const imageTwo = "./images/gallery/gallery2.png";
  const imageThree = "./images/gallery/gallery3.png";
  const imageFour = "./images/gallery/gallery4.png";

  return (
    <div className="gallery-area">
      <div className="container-fluid p-0 fix">
        <div className="row">
          <div className="col-xl-6 col-lg-4 col-md-6 col-sm-6">
            <div className="single-gallery mb-30">
              <div
                className="gallery-img big-img"
                style={{
                  backgroundImage: `url( ${imageOne} )`,
                }}
              ></div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
            <div className="single-gallery mb-30">
              <div
                className="gallery-img big-img"
                style={{
                  backgroundImage: `url( ${imageTwo} )`,
                }}
              ></div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-12">
            <div className="row">
              <div className="col-xl-12 col-lg-12 col-md-6 col-sm-6">
                <div className="single-gallery mb-30">
                  <div
                    className="gallery-img small-img"
                    style={{
                      backgroundImage: `url( ${imageThree} )`,
                    }}
                  ></div>
                </div>
              </div>
              <div className="col-xl-12 col-lg-12  col-md-6 col-sm-6">
                <div className="single-gallery mb-30">
                  <div
                    className="gallery-img small-img"
                    style={{
                      backgroundImage: `url( ${imageFour} )`,
                    }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
