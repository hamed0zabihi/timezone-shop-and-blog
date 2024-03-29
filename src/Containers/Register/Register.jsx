import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { isEmpty } from "lodash";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useHistory } from "react-router";
import { RegisterUser } from "../../Server/User";
import { AddUser } from "../../Redux/Actions/User";
import PreLoadings from "../../Components/Utils/PreLoadings";
import BigHeroTitle from "../../Components/Layout/Slider/BigheroTitle";

import * as Yup from "yup";

const Register = () => {
  const isUserExist = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(true);
  let history = useHistory();

  return (
    <>
      <BigHeroTitle name="Register" />
      <div className="container mt-120">
        <div className="row mx-auto">
          {isEmpty(isUserExist) ? (
            <>
              {loading ? (
                <PreLoadings />
              ) : (
                <>
                  <Formik
                    initialValues={{
                      name: "",
                      email: "",
                      password: "",
                      confirmpassword: "",
                      country: "iran",
                      addressone: "",
                      addresstwo: "",
                      city: "",
                      ordernote: "",
                    }}
                    validationSchema={Yup.object({
                      name: Yup.string()
                        .min(2, "Too Short!")
                        .max(50, "Too Long!")
                        .required("Required"),
                      email: Yup.string()
                        .required("Required")
                        .email("Invalid email address"),
                      password: Yup.string()
                        .required("Required.")
                        .min(
                          6,
                          "Password is too short - should be 6 chars minimum."
                        ),
                      confirmpassword: Yup.string()
                        .oneOf(
                          [Yup.ref("password"), null],
                          "Passwords must match"
                        )
                        .required("Required.")
                        .min(
                          6,
                          "Password is too short - should be 6 chars minimum."
                        ),
                      country: Yup.string().required(
                        "must one country selected"
                      ),
                      addressone: Yup.string().required("Required"),
                      addresstwo: Yup.string().required("Required"),
                      city: Yup.string().required("Required"),
                      // acceptTerms: Yup.bool().oneOf(
                      //   [true],
                      //   "Accept Terms & Conditions is required"
                      // ),
                    })}
                    onSubmit={async (values) => {
                      const finaladdress = {
                        country: values.country,
                        city: values.city,
                        addressone: values.addressone,
                        addresstwo: values.addresstwo,
                      };
                      const user = {
                        name: values.name,
                        email: values.email,
                        password: values.password,
                        address: [finaladdress],
                      };
                      setLoading(true);
                      try {
                        const { status, data } = await RegisterUser(user);
                        if (status === 201 && !isEmpty(data)) {
                          toast.success("User Create Success", {
                            position: "top-right",
                            onClose: true,
                          });

                          if (isSubscribed) {
                            // setdatauserdispatch(data);
                            dispatch(AddUser(data));
                          }
                          setLoading(false);
                          setIsSubscribed(false);
                          history.replace("/");
                        } else if (status !== 201) {
                          toast.warining("error", {
                            position: "top-right",
                            onClose: true,
                          });

                          setLoading(false);
                        }
                      } catch (exp) {
                        console.log(exp);
                        setLoading(false);
                        toast.error("error", {
                          position: "top-right",
                          onClose: true,
                        });
                      }
                    }}
                  >
                    {({ values }) => (
                      <Form className="row contact_form">
                        <div className="col-md-6 form-group p_star">
                          <Field
                            className="form-control"
                            type="name"
                            name="name"
                          />
                          {values.name ? (
                            ""
                          ) : (
                            <span
                              className="placeholder"
                              data-placeholder="name"
                            ></span>
                          )}

                          <ErrorMessage
                            name="name"
                            component="span"
                            className="text-danger"
                          />
                        </div>
                        <div className="col-md-6 form-group p_star">
                          <Field
                            className="form-control"
                            type="email"
                            name="email"
                          />
                          {values.email ? (
                            ""
                          ) : (
                            <span
                              className="placeholder"
                              data-placeholder="email"
                            ></span>
                          )}
                          <ErrorMessage
                            name="email"
                            component="span"
                            className="text-danger"
                          />
                        </div>
                        <div className="col-md-6 form-group p_star">
                          <Field
                            className="form-control"
                            type="password"
                            name="password"
                          />
                          {values.password ? (
                            ""
                          ) : (
                            <span
                              className="placeholder"
                              data-placeholder="password"
                            ></span>
                          )}
                          <ErrorMessage
                            name="password"
                            component="span"
                            className="text-danger"
                          />
                        </div>
                        <div className="col-md-6 form-group p_star">
                          <Field
                            className="form-control"
                            type="password"
                            name="confirmpassword"
                          />
                          {values.confirmpassword ? (
                            ""
                          ) : (
                            <span
                              className="placeholder"
                              data-placeholder="confirm password"
                            ></span>
                          )}
                          <ErrorMessage
                            name="confirmpassword"
                            component="span"
                            className="text-danger"
                          />
                        </div>
                        <div className="col-md-12 form-group p_star">
                          <Field
                            name="country"
                            as="select"
                            className="country_select"
                          >
                            <option value="Iran">Iran</option>
                            <option value="United State">United State</option>
                            <option value="Sweden">Sweden</option>
                          </Field>
                          <ErrorMessage
                            name="country"
                            component="span"
                            className="text-danger"
                          />
                        </div>
                        <div className="col-md-12 form-group p_star">
                          <Field
                            className="form-control"
                            type="text"
                            name="addressone"
                          />
                          {values.addressone ? (
                            ""
                          ) : (
                            <span
                              className="placeholder"
                              data-placeholder="Address line 01"
                            ></span>
                          )}
                          <ErrorMessage
                            name="addressone"
                            component="span"
                            className="text-danger"
                          />
                        </div>
                        <div className="col-md-12 form-group p_star">
                          <Field
                            className="form-control"
                            type="text"
                            name="addresstwo"
                          />

                          {values.addresstwo ? (
                            ""
                          ) : (
                            <span
                              className="placeholder"
                              data-placeholder="Address line 02"
                            ></span>
                          )}
                          <ErrorMessage
                            name="addresstwo"
                            component="span"
                            className="text-danger"
                          />
                        </div>
                        <div className="col-md-12 form-group p_star">
                          <Field
                            className="form-control"
                            type="text"
                            name="city"
                          />
                          {values.city ? (
                            ""
                          ) : (
                            <span
                              className="placeholder"
                              data-placeholder="Town/City"
                            ></span>
                          )}
                          <ErrorMessage
                            name="city"
                            component="span"
                            className="text-danger"
                          />
                        </div>
                        <button type="submit" value="submit" className="btn_3">
                          register
                        </button>
                      </Form>
                    )}
                  </Formik>
                </>
              )}
            </>
          ) : (
            <p className="mx-auto text-center text-danger">you are logined</p>
          )}
        </div>
      </div>
    </>
  );
};

export default Register;
