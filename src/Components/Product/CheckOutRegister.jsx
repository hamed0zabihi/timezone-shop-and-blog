import { useState } from "react";
import { useDispatch } from "react-redux";

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

  return (
    <form
      className="row contact_form"
      action="/#"
      method="post"
      noValidate="novalidate"
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
        <span className="placeholder" data-placeholder="Address line 01"></span>
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
        <span className="placeholder" data-placeholder="Address line 02"></span>
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
    </form>
  );
};

export default CheckOutRegister;
