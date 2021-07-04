import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { LoginUser } from "../../Server/User";
import BigHeroTitle from "../../Components/Layout/Slider/BigheroTitle";
import PreLoadings from "../../Components/Utils/PreLoadings";
import { AddUser } from "../../Redux/Actions/User";
import { isEmpty } from "lodash";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { SetHobby } from "../../Redux/Actions/Products/Hobby";

const Login = () => {
  const dispatch = useDispatch();
  const userIsExist = useSelector((state) => state.user);
  const [loading, setLoading] = useState(false);

  return (
    <main>
      <BigHeroTitle name="Login" />
      {!isEmpty(userIsExist) ? (
        <section className="login_part section_padding ">
          <div className="container">
            <div className="row align-items-center">
              {" "}
              <p className="mx-auto text-center text-danger">you are logined</p>
            </div>
          </div>
        </section>
      ) : (
        <section className="login_part section_padding ">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-6">
                <div className="login_part_text text-center">
                  <div className="login_part_text_iner">
                    <h2>New to our Shop?</h2>
                    <p>
                      There are advances being made in science and technology
                      everyday, and a good example of this is the
                    </p>

                    <Link to="/register" className="btn_3">
                      Create an Account
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="login_part_form">
                  <div className="login_part_form_iner">
                    <h3>
                      Welcome Back ! <br />
                      Please Sign in now
                    </h3>
                    {loading ? (
                      <PreLoadings />
                    ) : (
                      <>
                        <Formik
                          initialValues={{
                            email: "hamed0zabihi@gmail.com",
                            password: "123456",
                            acceptTerms: false,
                          }}
                          validationSchema={Yup.object({
                            password: Yup.string()
                              .required("No password provided.")
                              .min(
                                6,
                                "Password is too short - should be 6 chars minimum."
                              ),
                            email: Yup.string()
                              .email("Invalid email address")
                              .required("Required"),
                          })}
                          onSubmit={async (values, { setSubmitting }) => {
                            // setTimeout(() => {
                            //   alert(JSON.stringify(values, null, 2));
                            //   setSubmitting(false);
                            // }, 400);
                            setSubmitting(false);
                            const user = {
                              name: "hamed zabihi",
                              email: values.email,
                              password: values.password,
                            };
                            try {
                              setLoading(true);
                              const { status, data } = await LoginUser(user);
                              //mockapi.io dont feature for get one user base username and password
                              if (status === 200 && data && data.length) {
                                toast.success(" login success ", {
                                  position: "top-right",
                                  onClose: true,
                                });
                                dispatch(AddUser(data[0]));
                                dispatch(SetHobby());
                                setLoading(false);
                              }
                              if (status === 200 && data.length === 0) {
                                toast.error(" user not found ", {
                                  position: "top-right",
                                  onClose: true,
                                });
                                setLoading(false);
                              }
                            } catch (exp) {
                              toast.error("failed", {
                                position: "top-right",
                                onClose: true,
                              });
                              setLoading(false);
                              console.log(exp);
                            }
                            // end onSubmit formik
                          }}
                        >
                          <Form className="row contact_form">
                            <div className="col-md-12 form-group p_star">
                              <label htmlFor="email">Email Address</label>
                              <Field
                                className="form-control"
                                name="email"
                                type="email"
                              />
                              <ErrorMessage
                                component="span"
                                className="text-danger"
                                name="email"
                              />
                            </div>
                            <div className="col-md-12 form-group p_star">
                              <label htmlFor="password">password</label>
                              <Field
                                className="form-control"
                                name="password"
                                type="password"
                              />
                              <ErrorMessage
                                component="span"
                                className="text-danger"
                                name="password"
                              />
                            </div>
                            <div className="col-md-12 form-group">
                              <Field
                                className="form-check-label"
                                type="checkbox"
                                name="acceptTerms"
                              />
                              <label htmlFor="acceptTerms">Remember me</label>
                              <button className="btn_3" type="submit">
                                login
                              </button>
                              <a className="lost_pass" href="/#">
                                forget password?
                              </a>
                            </div>
                          </Form>
                        </Formik>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </main>
  );
};

export default Login;
