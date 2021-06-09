const PreLoadings = () => {
  return (
    <div className="row" id="preloader-active">
      <div className="preloader1 d-flex align-items-center justify-content-center">
        <div className="preloader-inner position-relative">
          <div className="preloader-circle"></div>
          <div className="preloader-img pere-text">
            <img src="/images/logo/logo.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreLoadings;
