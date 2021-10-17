const params = () => {
  let queryString = window.location.search;
  let url = new URLSearchParams(queryString);
  let entries = url.entries();

  let params = {};
  for (let entry of entries) {
    params[entry[0]] = entry[1];
  }

  return params;
};

export { params };
