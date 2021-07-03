import * as types from "../ActionTypes";
import { FavoriteApi } from "../../../Server/User";

export const SetHobby = () => {
  return async (dispatch, getState) => {
    const data = [...getState().user.favorites];
    await dispatch({ type: types.SET_HOBBY_PRODUCTS, payload: data });
  };
};

export const AddHobby = (id, userid) => {
  return async (dispatch, getState) => {
    const addProductIdToFavortes = [...getState().hobby, id];
    const favorite = { favorites: [...addProductIdToFavortes] };
    const { status } = await FavoriteApi(favorite, userid);
    if (status === 200) {
      await dispatch({
        type: types.ADD_HOBBY,
        payload: addProductIdToFavortes,
      });
    }
  };
};

export const RemoveHobby = (id, userid) => {
  return async (dispatch, getState) => {
    const allHobby = getState().hobby;
    const removeProductIdFromFavorites = allHobby.filter((el) => el !== id);
    const favorite = { favorites: [...removeProductIdFromFavorites] };
    const { status } = await FavoriteApi(favorite, userid);
    if (status === 200) {
      await dispatch({
        type: types.REMOVE_HOBBY,
        payload: removeProductIdFromFavorites,
      });
    }
  };
};
