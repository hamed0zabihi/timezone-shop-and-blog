import { useEffect, useState } from "react";

const CheckOutBillingDetails = ({ user }) => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [country, setcountry] = useState("Iran");
  const [addressone, setaddressone] = useState("");
  const [addresstwo, setaddresstwo] = useState("");
  const [city, setcity] = useState("");

  useEffect(() => {
    setname(user.name);
    setemail(user.email);
    setcountry(user.address[0].country);
    setaddressone(user.address[0].addressone);
    setaddresstwo(user.address[0].addresstwo);
    setcity(user.address[0].city);
    return () => {
      setname();
      setemail();
      setcountry();
      setaddressone();
      setaddresstwo();
      setcity();
    };
  }, [user]);
  return (
    <form
      className="row contact_form"
      action="/#"
      method="post"
      noValidate="novalidate"
    >
      <div className="col-md-6 form-group p_star">
        <span>your name</span>
        <input
          type="text"
          className="form-control"
          id="first"
          name="name"
          value={name}
          disabled
        />
      </div>
      <div className="col-md-6 form-group p_star">
        <span>your email</span>
        <input
          type="email"
          className="form-control"
          id="email"
          name="email"
          value={email}
          disabled
        />
      </div>

      <div className="col-md-12 form-group p_star">
        <span>country</span>
        <select className="country_select" disabled>
          <option value={country}>{country}</option>
        </select>
      </div>
      <div className="col-md-12 form-group p_star">
        <span>address line 1</span>
        <input
          type="text"
          className="form-control"
          id="add1"
          name="add1"
          value={addressone}
          disabled
        />
      </div>
      <div className="col-md-12 form-group p_star">
        <span>address line 2</span>
        <input
          type="text"
          className="form-control"
          id="add2"
          name="add2"
          value={addresstwo}
          disabled
        />
      </div>
      <div className="col-md-12 form-group p_star">
        <span>city</span>
        <input
          type="text"
          className="form-control"
          id="city"
          name="city"
          value={city}
          disabled
        />
      </div>
    </form>
  );
};

export default CheckOutBillingDetails;
