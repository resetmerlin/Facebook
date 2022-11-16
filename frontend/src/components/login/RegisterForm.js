import { Formik, Form } from "formik";
import RegisterInput from "../inputs/registerInput";
import { useState } from "react";

export default function RegisterForm() {
  const userInfos = {
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    bYear: new Date().getFullYear(),
    bMonth: new Date().getMonth + 1,
    bDay: new Date().getDate(),
    gender: "",
  };
  const [user, setUser] = useState(userInfos);
  const {
    first_name,
    last_name,
    email,
    password,
    bYear,
    bMonth,
    bDay,
    gender,
  } = user;
  const handleRegisterChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };
  const years = Array.from(new Array(108), (val, index) => bYear - index);
  const months = Array.from(new Array(12), (val, index) => 1 + index);
  const getDays = () => {
    return new Date(bYear, bMonth, 0).getDate();
  };
  const days = Array.from(new Array(getDays()), (val, index) => 1 + index);
  return (
    <div className="blur">
      <div className="login__register">
        <div className="login__register__header">
          <i className="exit_icon"></i>

          <span className="login__register__header-title">Sign up</span>

          <span className="login__register__header-sideTitle">
            It's quick and easy
          </span>
        </div>
        <Formik>
          {(formik) => (
            <Form className="register__form">
              <div className="register__form__line">
                <RegisterInput
                  type="text"
                  placeholder={"First name"}
                  name="first_name"
                  onChange={handleRegisterChange}
                ></RegisterInput>

                <RegisterInput
                  type="text"
                  placeholder={"Last name"}
                  name="last_name"
                  onChange={handleRegisterChange}
                ></RegisterInput>
              </div>
              <div className="register__form__line">
                <RegisterInput
                  type="email"
                  placeholder={"Mobile number or email address"}
                  name="email"
                  onChange={handleRegisterChange}
                ></RegisterInput>
              </div>
              <div className="register__form__line">
                <RegisterInput
                  type="password"
                  placeholder={"New password"}
                  name="password"
                  onChange={handleRegisterChange}
                ></RegisterInput>
              </div>
              <div className="register__form__col">
                <div className="register__line__header">
                  Date of birth <i className="info_icon"></i>
                </div>
                <div className="reg_grid">
                  <select
                    name="bDay"
                    value={bDay}
                    onChange={handleRegisterChange}
                  >
                    {days.map((day, i) => (
                      <option value={day} key={i}>
                        {day}
                      </option>
                    ))}
                  </select>
                  <select
                    name="bMonth"
                    value={bMonth}
                    onChange={handleRegisterChange}
                  >
                    {months.map((month, i) => (
                      <option value={month} key={i}>
                        {month}
                      </option>
                    ))}
                  </select>

                  <select
                    name="bYear"
                    value={bYear}
                    onChange={handleRegisterChange}
                  >
                    {years.map((year, i) => (
                      <option value={year} key={i}>
                        {year}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="reg-col">
                <div className="register__line__header">
                  Gender <i className="info_icon"></i>
                </div>
                <div className="reg_grid">
                  <label htmlFor="male">
                    Male
                    <input
                      type={"radio"}
                      name="gender"
                      id="male"
                      value={"male"}
                      onChange={handleRegisterChange}
                    />
                  </label>

                  <label htmlFor="female">
                    Male
                    <input
                      type={"radio"}
                      name="gender"
                      id="female"
                      value={"female"}
                      onChange={handleRegisterChange}
                    />
                  </label>
                </div>
              </div>
              <div className="reg_infos">
                By clicking Sign Up, you agree to our{" "}
                <span>Terms, Data Policy &nbsp;</span>
                and <span>Cookie Policy.</span> You may receive SMS
                notifications from us and can opt out at any time.
              </div>
              <div className="reg_btn_wrapper ">
                <button className="blue_btn open_signup signup_register__button">
                  Sign up
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}
