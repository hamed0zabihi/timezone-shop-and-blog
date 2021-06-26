import { withRouter } from "react-router";
import { Link } from "react-router-dom";
const FavoriteModalForLogin = ({ modal, toggle }) => {
  return (
    <div
      className={modal ? "modal fade show d-block" : "modal fade"}
      id="exampleModalCenter"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="exampleModalCenterTitle"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
              onClick={toggle}
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body text-center">You are not logged in</div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-dismiss="modal"
              onClick={toggle}
            >
              Close
            </button>
            <Link to="/login" className="btn btn-primary">
              login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FavoriteModalForLogin;
