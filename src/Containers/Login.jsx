import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { LoginUser } from "../Apis/User";
import BigHeroTitle from "../Components/Layout/Slider/BigheroTitle";
import PreLoadings from "../Components/Utils/PreLoadings";
import { AddUser } from "../Redux/Actions/User";
import { isEmpty } from "lodash";
const Login = () => {
  const dispatch = useDispatch();
  const userIsExist = useSelector((state) => state.user);

  const [email, setemail] = useState();
  const [password, setpassword] = useState();
  const [rememberme, setrememberme] = useState();
  const [loading, setloading] = useState(false);
  const handleLogin = async (event) => {
    event.preventDefault();
    const user = {
      name: "hamed zabihi",
      email: email,
      password: password,
    };

    try {
      setloading(true);
      const { status, data } = await LoginUser(user);
      //mockapi.io dont feature for get one user base username and password
      if (status === 200 && data && data.length) {
        toast.success(" login success ", {
          position: "top-right",
          onClose: true,
        });

        dispatch(AddUser(data[0]));
        setloading(false);
      }
      if (status === 200 && data.length === 0) {
        toast.error(" user not found ", {
          position: "top-right",
          onClose: true,
        });
        setloading(false);
      }
    } catch (exp) {
      toast.error("failed", {
        position: "top-right",
        onClose: true,
      });
      setloading(false);
      console.log(exp);
    }
  };
  return (
    <main>
      <BigHeroTitle name="Login" />
      {!isEmpty(userIsExist) ? (
        <section className="login_part section_padding ">
          <div className="container">
            <div className="row align-items-center">your are logined</div>
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

                    <Link to="/" className="btn_3">
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
                      <form
                        onSubmit={handleLogin}
                        className="row contact_form"
                        action="/#"
                        method="post"
                        noValidate="novalidate"
                      >
                        <div className="col-md-12 form-group p_star">
                          <input
                            type="email"
                            className="form-control"
                            id="name"
                            name="name"
                            value={email}
                            placeholder="hamed0zabihi@gmail.com"
                            onChange={(e) => setemail(e.target.value)}
                          />
                        </div>
                        <div className="col-md-12 form-group p_star">
                          <input
                            type="password"
                            className="form-control"
                            id="password"
                            name="password"
                            value={password}
                            placeholder="123456"
                            onChange={(e) => setpassword(e.target.value)}
                          />
                        </div>
                        <div className="col-md-12 form-group">
                          <div className="creat_account d-flex align-items-center">
                            <input
                              type="checkbox"
                              id="f-option"
                              name="selector"
                              value={rememberme}
                              onChange={(e) =>
                                setrememberme(e.currentTarget.checked)
                              }
                            />
                            <label htmlFor="f-option">Remember me</label>
                          </div>
                          <button
                            type="submit"
                            value="submit"
                            className="btn_3"
                          >
                            log in
                          </button>
                          <a className="lost_pass" href="/#">
                            forget password?
                          </a>
                        </div>
                      </form>
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
