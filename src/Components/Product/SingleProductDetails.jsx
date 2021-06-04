const SingleProductDetails = () => {
  return (
    <>
      <div className="col-lg-8">
        <div className="single_product_text text-center">
          <h3>
            Foam filling cotton slow <br></br>
            rebound pillows
          </h3>
          <p>
            Seamlessly empower fully researched growth strategies and
            interoperable internal or “organic” sources. Credibly innovate
            granular internal or “organic” sources whereas high standards in
            web-readiness. Credibly innovate granular internal or organic
            sources whereas high standards in web-readiness. Energistically
            scale future-proof core competencies vis-a-vis impactful
            experiences. Dramatically synthesize integrated schemas. with
            optimal networks.
          </p>
          <div className="card_area">
            <div className="product_count_area">
              <p>Quantity</p>
              <div className="product_count d-inline-block">
                <span className="product_count_item inumber-decrement">
                  <i className="ti-minus"></i>
                </span>
                <input
                  className="product_count_item input-number"
                  type="text"
                  min="0"
                  max="10"
                  defaultValue="1"
                />
                <span className="product_count_item number-increment">
                  <i className="ti-plus"></i>
                </span>
              </div>
              <p>$5</p>
            </div>
            <div className="add_to_cart">
              <a href="/#" className="btn_3">
                add to cart
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleProductDetails;
