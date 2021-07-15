import Slider from "react-slick";

const SingleProductSlider = ({ images = [] }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1140,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 930,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 690,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 510,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 345,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="col-lg-12">
      <div className="product_img_slide owl-carousel">
        <Slider {...settings}>
          {images.map((el, index) => {
            return (
              <div key={index}>
                <img
                  style={{ width: "100%" }}
                  src={`${el}`}
                  alt="#"
                  className="img-fluid"
                />
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default SingleProductSlider;
