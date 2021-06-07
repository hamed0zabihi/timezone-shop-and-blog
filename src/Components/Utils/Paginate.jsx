import _ from "lodash";
export const Paginate = (Items, PerPage, CurrentPage) => {
  const StartIndex = (CurrentPage - 1) * PerPage;
  return _(Items).drop(StartIndex).take(PerPage).value();
};
