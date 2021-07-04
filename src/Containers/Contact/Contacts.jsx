import BigHeroTitle from "../../Components/Layout/Slider/BigheroTitle";
import MapLeaflet from "../../Components/Utils/MapLeaflet";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import PreLoadings from "../../Components/Utils/PreLoadings";

const Contacts = () => {
  const [loading, setLoading] = useState(false);

  return (
    <>
      <BigHeroTitle name="contacts" />
      <br />
      <section className="contact-section">
        <div className="container">
          <div className="d-none d-sm-block mb-5 pb-4">
            <MapLeaflet />
          </div>
          <div className="row">
            <div className="col-12">
              <h2 className="contact-title">Get in Touch</h2>
            </div>
            <div className="col-lg-8">
              {loading ? (
                <PreLoadings />
              ) : (
                <Formik
                  initialValues={{
                    bodyMessage: "",
                    name: "",
                    email: "",
                    subject: "",
                  }}
                  validationSchema={Yup.object({
                    bodyMessage: Yup.string()
                      .required("Required")
                      .min(6, "minimum 6 length"),
                    name: Yup.string()
                      .required("required")
                      .min(2, "minimum 2 length."),
                    email: Yup.string()
                      .email("Invalid email address")
                      .required("Required"),
                    subject: Yup.string()
                      .required("required")
                      .min(2, "minimum 2 length."),
                  })}
                  onSubmit={(values) => {
                    setLoading(true);
                    setTimeout(() => {
                      alert(JSON.stringify(values, null, 2));
                      setLoading(false);
                    }, 5000);
                  }}
                >
                  <Form>
                    <div className="row">
                      <div className="col-12">
                        <div className="form-group">
                          <Field
                            cols="30"
                            rows="9"
                            className="form-control w-100"
                            name="bodyMessage"
                            placeholder=" Enter Message"
                            as="textarea"
                          />
                          <ErrorMessage
                            component="span"
                            className="text-danger"
                            name="bodyMessage"
                          />
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="form-group">
                          <Field
                            type="text"
                            name="name"
                            className="form-control"
                            placeholder="Enter your name"
                          />
                          <ErrorMessage
                            component="span"
                            className="text-danger"
                            name="name"
                          />
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="form-group">
                          <Field
                            type="email"
                            name="email"
                            className="form-control"
                            placeholder="Email"
                          />
                          <ErrorMessage
                            component="span"
                            className="text-danger"
                            name="email"
                          />
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-group">
                          <Field
                            type="text"
                            name="subject"
                            className="form-control"
                            placeholder="Enter Subject"
                          />
                          <ErrorMessage
                            component="span"
                            className="text-danger"
                            name="subject"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="form-group mt-3">
                      <button
                        type="submit"
                        className="button button-contactForm boxed-btn"
                      >
                        Send
                      </button>
                    </div>
                  </Form>
                </Formik>
              )}
            </div>
            <div className="col-lg-3 offset-lg-1">
              <div className="media contact-info">
                <span className="contact-info__icon">
                  <i className="ti-home"></i>
                </span>
                <div className="media-body">
                  <h3>Buttonwood, California.</h3>
                  <p>Rosemead, CA 91770</p>
                </div>
              </div>
              <div className="media contact-info">
                <span className="contact-info__icon">
                  <i className="ti-tablet"></i>
                </span>
                <div className="media-body">
                  <h3>+1 253 565 2365</h3>
                  <p>Mon to Fri 9am to 6pm</p>
                </div>
              </div>
              <div className="media contact-info">
                <span className="contact-info__icon">
                  <i className="ti-email"></i>
                </span>
                <div className="media-body">
                  <h3>support@colorlib.com</h3>
                  <p>Send us your query anytime!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contacts;
