import { Formik, Form, Field, ErrorMessage } from "formik";
import { useHistory } from "react-router-dom";
import * as Yup from "yup";

const SearchBox = () => {
  let history = useHistory();
  return (
    <aside className="single_sidebar_widget search_widget">
      <Formik
        initialValues={{
          searchBlogQuery: "",
        }}
        validationSchema={Yup.object({
          searchBlogQuery: Yup.string().required("required"),
        })}
        onSubmit={(values, { resetForm, setErrors, setSubmitting }) => {
          setTimeout(() => {
            setSubmitting(false);
            history.replace(`/blog/search/${values.searchBlogQuery}`);
            resetForm();
          }, 500);
        }}
      >
        <Form>
          <div className="form-group">
            <div className="input-group mb-3">
              <Field
                id="searchBlogQuery"
                name="searchBlogQuery"
                placeholder="Search Keyword"
                className="form-control"
              />
              <div className="input-group-append">
                <button className="btns" type="button">
                  <i className="ti-search"></i>
                </button>
              </div>
            </div>
          </div>
          <button
            className="button rounded-0 primary-bg text-white w-100 btn_1 boxed-btn"
            type="submit"
          >
            Search
          </button>
          <ErrorMessage
            component="span"
            name="searchBlogQuery"
            className="text-danger"
          />
        </Form>
      </Formik>
    </aside>
  );
};

export default SearchBox;
