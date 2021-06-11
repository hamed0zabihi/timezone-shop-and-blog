import { useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { RegisterUser } from "../../Apis/User";
import { AddUser } from "../../Redux/Actions/User";
import PreLoadings from "../Utils/PreLoadings";
import { isEmpty } from "lodash";
const CheckOutRegister = () => {
  const dispatch = useDispatch();
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [confirmpassword, setconfirmpassword] = useState("");
  const [country, setcountry] = useState("Iran");
  const [addressone, setaddressone] = useState("");
  const [addresstwo, setaddresstwo] = useState("");
  const [city, setcity] = useState("");
  const [ordernote, setordernote] = useState("");
  const [loading, setloading] = useState(false);

  const handleSubmitForRegister = async (event) => {
    event.preventDefault();
    const finaladdress = {
      country: country,
      city: city,
      addressone: addressone,
      addresstwo: addresstwo,
    };
    const user = {
      name: name,
      email: email,
      password: password,
      address: [finaladdress],
    };
    setloading(true);
    try {
      const { status, data } = await RegisterUser(user);
      if (status === 201 && !isEmpty(data)) {
        toast.success("User Create Success", {
          position: "top-right",
          onClose: true,
        });
        // dispatch(AddUser(data));
        setloading(false);
      } else if (status !== 201) {
        toast.warining("error", {
          position: "top-right",
          onClose: true,
        });

        setloading(false);
      }
    } catch (exp) {
      console.log(exp);
      setloading(false);
      toast.error("error", {
        position: "top-right",
        onClose: true,
      });
    }
  };
  return (
    <>
      {loading ? (
        <PreLoadings />
      ) : (
        <form
          className="row contact_form"
          action="/#"
          method="post"
          noValidate="novalidate"
          onSubmit={handleSubmitForRegister}
        >
          <div className="col-md-6 form-group p_star">
            <input
              type="text"
              className="form-control"
              id="first"
              name="name"
              value={name}
              onChange={(e) => setname(e.target.value)}
            />
            <span className="placeholder" data-placeholder="name"></span>
          </div>
          <div className="col-md-6 form-group p_star">
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setemail(e.target.value)}
            />
            <span className="placeholder" data-placeholder="email"></span>
          </div>

          <div className="col-md-6 form-group p_star">
            <input
              type="password"
              className="form-control"
              id="password1"
              name="password1"
              value={password}
              onChange={(e) => setpassword(e.target.value)}
            />
            <span className="placeholder" data-placeholder="password"></span>
          </div>
          <div className="col-md-6 form-group p_star">
            <input
              type="password"
              className="form-control"
              id="password2"
              name="password2"
              value={confirmpassword}
              onChange={(e) => setconfirmpassword(e.target.value)}
            />
            <span
              className="placeholder"
              data-placeholder="confirm password"
            ></span>
          </div>
          <div className="col-md-12 form-group p_star">
            <select
              className="country_select"
              onChange={(e) => setcountry(e.target.value)}
            >
              <option value="IRAN">IRAN</option>
              <option value="United State">United State</option>
              <option value="sweden">sweden</option>
            </select>
          </div>
          <div className="col-md-12 form-group p_star">
            <input
              type="text"
              className="form-control"
              id="add1"
              name="add1"
              value={addressone}
              onChange={(e) => setaddressone(e.target.value)}
            />
            <span
              className="placeholder"
              data-placeholder="Address line 01"
            ></span>
          </div>
          <div className="col-md-12 form-group p_star">
            <input
              type="text"
              className="form-control"
              id="add2"
              name="add2"
              value={addresstwo}
              onChange={(e) => setaddresstwo(e.target.value)}
            />
            <span
              className="placeholder"
              data-placeholder="Address line 02"
            ></span>
          </div>
          <div className="col-md-12 form-group p_star">
            <input
              type="text"
              className="form-control"
              id="city"
              name="city"
              value={city}
              onChange={(e) => setcity(e.target.value)}
            />
            <span className="placeholder" data-placeholder="Town/City"></span>
          </div>

          <div className="col-md-12 form-group">
            <div className="creat_account">
              <h3>Shipping Details</h3>
            </div>
            <textarea
              className="form-control"
              name="message"
              id="message"
              rows="1"
              placeholder="Order Notes"
              onChange={(e) => setordernote(e.target.value)}
            ></textarea>
          </div>
          <button type="submit" value="submit" className="btn_3">
            register
          </button>
        </form>
      )}
    </>
  );
};

export default CheckOutRegister;
