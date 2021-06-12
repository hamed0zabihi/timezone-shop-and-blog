import { useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { LoginUser } from "../../Apis/User";
import { AddUser } from "../../Redux/Actions/User";
import PreLoadings from "../Utils/PreLoadings";

const CheckOutLogin = () => {
  const dispatch = useDispatch();
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [remmemberme, setremmemberme] = useState(false);
  const [loading, setloading] = useState(false);
  const handleLogin = async (e) => {
    e.preventDefault();
    setloading(true);
    try {
      const dataUser = { email: email, password: password };
      const { data, status } = await LoginUser(dataUser);
      if (status === 200 && data.length) {
        // fake api don't feature for check email- response return an array of objects emails
        dispatch(AddUser(data[0]));
        setloading(false);
        toast.success(" login success ", {
          position: "top-right",
          onClose: true,
        });
        setpassword("");
        setemail("");
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
  };
  return (
    <>
      {loading ? (
        <PreLoadings />
      ) : (
        <form
          className="row contact_form"
          action="#"
          method="post"
          noValidate="novalidate"
          onSubmit={handleLogin}
        >
          <div className="col-md-6 form-group p_star">
            <input
              type="email"
              className="form-control"
              id="name"
              name="name"
              value={email}
              onChange={(e) => setemail(e.target.value)}
            />
            <span
              className="placeholder"
              data-placeholder="hamed0zabihi@gmail.com"
            ></span>
          </div>
          <div className="col-md-6 form-group p_star">
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setpassword(e.target.value)}
            />
            <span className="placeholder" data-placeholder="123456"></span>
          </div>
          <div className="col-md-12 form-group">
            <button type="submit" value="submit" className="btn_3">
              log in
            </button>
            <div className="creat_account">
              <input
                type="checkbox"
                id="f-option"
                name="selector"
                onChange={(e) => setremmemberme(e.currentTarget.checked)}
              />
              <label htmlFor="f-option">Remember me</label>
            </div>
            <a className="lost_pass" href="/#">
              Lost your password?
            </a>
          </div>
        </form>
      )}
    </>
  );
};

export default CheckOutLogin;
