import { withRouter } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
const SearchModal = ({ modal, toggle, history }) => {
  return (
    <>
      <div className={modal ? "search-model-box d-block" : "search-model-box"}>
        <div className="h-100 d-flex align-items-center justify-content-center">
          <div className="search-close-btn" onClick={toggle}>
            +
          </div>
          <Formik
            initialValues={{
              search: "",
            }}
            validationSchema={Yup.object({
              search: Yup.string().required("required"),
            })}
            onSubmit={(values, { resetForm, setErrors, setSubmitting }) => {
              setTimeout(() => {
                setSubmitting(false);
                history.replace(`/search/${values.search}`);
                resetForm();
                toggle();
              }, 500);
            }}
          >
            <Form className="search-model-form">
              <Field
                type="text"
                name="search"
                placeholder="Searching key....."
              />
              <button
                type="submit"
                style={{ background: "none", border: "none" }}
              >
                <span className="flaticon-search text-primary"></span>
              </button>
              <ErrorMessage
                component="div"
                name="search"
                className="text-danger"
              />
            </Form>
          </Formik>
        </div>
      </div>
    </>
  );
};

export default withRouter(SearchModal);
