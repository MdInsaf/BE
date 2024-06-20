import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Images from "../../Images/Images";


function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState(""); // New state for selection
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [userTypeError, setUserTypeError] = useState(""); // New state for selection error
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [showPassword, setShowPassword] = useState(false); // State for showing password

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setEmailError("");
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setPasswordError("");
  };

  const handleUserTypeChange = (e) => {
    setUserType(e.target.value);
    setUserTypeError("");
  };

  const handleShowPasswordChange = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let valid = true;

    if (!email.includes("@")) {
      setEmailError("Invalid email address");
      valid = false;
    }

    if (password.length < 6) {
      setPasswordError("Password must be at least 6 characters long");
      valid = false;
    }

    if (!userType) {
      setUserTypeError("Please select a user type");
      valid = false;
    }

    if (valid) {
      console.log("Form submitted successfully");
      setFormSubmitted(true);
    }
  };

  return (
    <div className="Loginpage pt-4">
      <div className="container mt-5">
        <div className="row">
          <div className="col-12 col-md-12 col-lg-6 mt-5">
            <div className="Login-top text-center px-5 pb-5">
              <img src={Images.Logo} className="img-fluid" alt="Logo" />
            </div>
            <div className="Login-top pt-5">
              <img src={Images.Loginbanner} className="img-fluid" alt="Login Banner" />
            </div>
          </div>
          <div className="col-12 col-md-12 col-lg-6 px-5">
            <div className="UserFrom">
              <h1>Login to your Account</h1>
              <p className="pb-5">
                See what is going on with your business
              </p>
              <form className="pt-4" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="userType">Select User Type</label>
                  <select
                    className="form-control"
                    id="userType"
                    value={userType}
                    onChange={handleUserTypeChange}
                  >
                    <option value="">Select</option>
                    <option value="admin">Admin</option>
                    <option value="user">User</option>
                  </select>
                  {userTypeError && <small className="text-danger">{userTypeError}</small>}
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    value={email}
                    onChange={handleEmailChange}
                    aria-describedby="emailHelp"
                    placeholder="Enter email"
                  />
                  {emailError && <small className="text-danger">{emailError}</small>}
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input
                    type={showPassword ? "text" : "password"}
                    className="form-control"
                    id="password"
                    value={password}
                    onChange={handlePasswordChange}
                    placeholder="Enter password"
                  />
                  {passwordError && <small className="text-danger">{passwordError}</small>}
                </div>
                <div className="row pt-3 check-box">
                  <div className="col">
                    <input
                      type="checkbox"
                      name="remember"
                      value=""
                      onChange={handleShowPasswordChange}
                    /> Show Password
                  </div>
                  <div className="col text-end text-black">
                    <NavLink to="/forgot-password">Forgot Password?</NavLink>
                  </div>
                </div>
                <NavLink to="/Select-Rooms">
                <div className="row mt-4 mx-1 loginbutton">
                  <button type="submit" >     Login
              
                  </button>
                </div>
                </NavLink>
              </form>
              {formSubmitted && <div className="alert alert-success mt-3">Form submitted successfully!</div>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
