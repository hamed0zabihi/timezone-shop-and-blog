import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { isEmpty } from "lodash";
import { toast } from "react-toastify";
import { FavoriteProductsUser } from "../../Redux/Actions/User";
import { FavoriteApi } from "../../Apis/User";
const Favorite = ({ product }) => {
  //   let a = user.map(
  //     (el) => el.id === product.id && el.fav.find((el) => el === 10)
  //   );

  // const handleFavorite = async (event) => {
  //   event.preventDefault();
  //   if (!isEmpty(user)) {
  //     let dataFavorites = {};
  //     if (isExistFavorite && favoritess.length) {
  //       //   addOrdeleteFavorite = user.Favorites.filter((el) => el !== product.id);
  //       setfavoritess(
  //         favoritess.filter((el) => el !== JSON.stringify(product.id))
  //       );
  //       dataFavorites = {
  //         favorites: [
  //           favoritess.filter((el) => el !== JSON.stringify(product.id)),
  //         ],
  //       };
  //     }
  //     if (!isExistFavorite) {
  //       setfavoritess([...favoritess, JSON.stringify(product.id)]);
  //       dataFavorites = {
  //         favorites: [...favoritess, JSON.stringify(product.id)],
  //       };
  //     }

  //     console.log("dataFavorites:inside", dataFavorites);
  //   try {
  //     const { status, data } = await FavoriteApi(dataFavorites, user.id);

  //     if (status === 200 && !isEmpty(data)) {
  //       toast.success("order submit successful", {
  //         position: "top-right",
  //         onClose: true,
  //       });
  //       dispatch(FavoriteProductsUser(data));
  //     }
  //   } catch (exp) {
  //     toast.error("order submit error", {
  //       position: "top-right",
  //       onClose: true,
  //     });
  //     console.log(exp);
  //   }
  // }
  // };
  // console.log("isExistFavorite", isExistFavorite);

  // console.log("is", JSON.stringify(product.id));
  // console.log("favoritess after", favoritess);
  // className={isExistFavorite ? "fa fa-heart" : "flaticon-heart"}
  return (
    <div className="favorit-items">
      <span className="flaticon-heart"></span>
    </div>
  );
};

export default Favorite;
