import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const CommentForm = () => {
  return (
    <>
      <Formik
        //initial
        initialValues={{
          commet: "",
          name: "",
          email: "",
        }}
        //validation
        validationSchema={Yup.object({
          comment: Yup.string().required(),
          name: Yup.string().required(),
          email: Yup.string().email().required(),
        })}
        //submit
        onSubmit={(values, { resetForm, setSubmitting }) => {
          setTimeout(() => {
            setSubmitting(false);
            alert(values.email);
            resetForm();
          }, 1500);
        }}
      >
        <Form className="form-contact comment_form">
          <div className="row">
            <div className="col-12">
              <div className="form-group">
                <Field
                  as="textarea"
                  className="form-control"
                  cols="30"
                  rows="9"
                  name="comment"
                  id="comment"
                ></Field>
                <ErrorMessage
                  name="comment"
                  component="span"
                  className="text-danger"
                />
              </div>
            </div>
            <div className="col-sm-6">
              <div className="form-group">
                <Field
                  className="form-control"
                  name="name"
                  id="name"
                  type="text"
                  placeholder="Name"
                />
                <ErrorMessage
                  name="name"
                  component="span"
                  className="text-danger"
                />
              </div>
            </div>
            <div className="col-sm-6">
              <div className="form-group">
                <Field
                  className="form-control"
                  name="email"
                  id="email"
                  type="email"
                  placeholder="email"
                />
                <ErrorMessage
                  name="email"
                  component="span"
                  className="text-danger"
                />
              </div>
            </div>
          </div>
          <div className="form-group">
            <button
              type="submit"
              className="button button-contactForm btn_1 boxed-btn"
            >
              Send Message
            </button>
          </div>
        </Form>
      </Formik>
    </>
  );
};

export default CommentForm;
