import { ErrorMessage } from "formik";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { LoginUser } from "../../Server/User";
import { AddUser } from "../../Redux/Actions/User";
import PreLoadings from "../Utils/PreLoadings";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
const CheckOutLogin = () => {
  const dispatch = useDispatch();
  const [loading, setloading] = useState(false);

  return (
    <>
      {loading ? (
        <PreLoadings />
      ) : (
        <>
          <Formik
            initialValues={{
              email: "hamed0zabihi@gmail.com",
              password: "123456",
              remmemberme: false,
            }}
            validationSchema={Yup.object({
              password: Yup.string()
                .required("No password provided.")
                .min(6, "Password is too short - should be 6 chars minimum."),
              email: Yup.string()
                .email("Invalid email address")
                .required("Required"),
            })}
            onSubmit={async (values) => {
              setloading(true);
              try {
                const dataUser = {
                  email: values.email,
                  password: values.password,
                };
                const { data, status } = await LoginUser(dataUser);
                if (status === 200 && data.length) {
                  // fake api don't feature for check email- response return an array of objects emails
                  dispatch(AddUser(data[0]));
                  setloading(false);
                  toast.success(" login success ", {
                    position: "top-right",
                    onClose: true,
                  });
                }
                if (status === 200 && data.length === 0) {
                  setloading(false);
                  toast.error(" user not found ", {
                    position: "top-right",
                    onClose: true,
                  });
                }
              } catch (exp) {
                setloading(false);
                toast.error("failed", {
                  position: "top-right",
                  onClose: true,
                });
                console.log(exp);
              }
            }}
          >
            {({ values }) => (
              <Form className="row contact_form">
                <div className="col-md-6 form-group p_star">
                  <Field className="form-control" type="email" name="email" />

                  {values.email ? (
                    ""
                  ) : (
                    <span
                      className="placeholder"
                      data-placeholder="hamed0zabihi@gmail.com"
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
                      data-placeholder="123456"
                    ></span>
                  )}
                  <ErrorMessage
                    name="password"
                    component="span"
                    className="text-danger"
                  />
                </div>
                <div className="col-md-12 form-group">
                  <button type="submit" value="submit" className="btn_3">
                    log in
                  </button>
                  <div className="creat_account">
                    <Field type="checkbox" name="remmemberme" />
                    <label htmlFor="remmemberme">Remember me</label>
                  </div>
                  <a
                    className="lost_pass"
                    href="/#"
                    onClick={(e) => e.preventDefault()}
                  >
                    Lost your password?
                  </a>
                </div>
              </Form>
            )}
          </Formik>
        </>
      )}
    </>
  );
};

export default CheckOutLogin;
