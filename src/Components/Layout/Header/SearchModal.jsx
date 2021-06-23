const SearchModal = ({ modal, toggle }) => {
  return (
    <>
      <div className={modal ? "search-model-box d-block" : "search-model-box"}>
        <div className="h-100 d-flex align-items-center justify-content-center">
          <div className="search-close-btn" onClick={toggle}>
            +
          </div>
          <form className="search-model-form" _lpchecked="1">
            <input
              type="text"
              id="search-input"
              placeholder="Searching key....."
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default SearchModal;
