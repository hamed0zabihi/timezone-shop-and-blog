import { useDispatch, useSelector } from "react-redux";
import { isEmpty } from "lodash";
import { AddHobby, RemoveHobby } from "../../Redux/Actions/Products/Hobby";

const Favorite = ({ product, toggle }) => {
  const hobby = useSelector((state) => state.hobby);
  const user = useSelector((state) => state.user);
  const isExistHobby = hobby.find((el) => el === product.id.toString());
  const dispatch = useDispatch();

  const handleFavorite = (event) => {
    event.preventDefault();
    if (isEmpty(user)) {
      toggle();
    }
    if (!isEmpty(user) && isExistHobby) {
      dispatch(RemoveHobby(product.id.toString(), user.id));
    }
    if (!isEmpty(user) && !isExistHobby) {
      dispatch(AddHobby(product.id.toString(), user.id));
    }
  };

  return (
    <div className="favorit-items">
      <span
        className={isExistHobby ? "fa fa-heart text-danger" : "flaticon-heart"}
        onClick={handleFavorite}
      ></span>
    </div>
  );
};

export default Favorite;
