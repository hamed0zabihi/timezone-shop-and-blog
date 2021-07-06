import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const NewsletterBox = () => {
  return (
    <aside className="single_sidebar_widget newsletter_widget">
      <h4 className="widget_title">Newsletter</h4>
      <Formik
        initialValues={{
          email: "",
        }}
        validationSchema={Yup.object({
          email: Yup.string().email().required("required"),
        })}
      >
        <Form>
          <div className="form-group">
            <Field
              name="email"
              type="email"
              className="form-control"
              placeholder="Enter email"
            />
          </div>
          <button
            className="button rounded-0 primary-bg text-white w-100 btn_1 boxed-btn"
            type="submit"
          >
            Subscribe
          </button>
          <ErrorMessage component="span" name="email" className="text-danger" />
        </Form>
      </Formik>
    </aside>
  );
};

export default NewsletterBox;
