import { Formik, Form } from "formik";
import RegisterInput from "../inputs/registerInput";
import { useState } from "react";
import * as Yup from "yup";
import { DateOfBirthSelect } from "./DateOfBirthSelect";
import GenderSelect from "./GenderSelect";
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

  //user안에 이 userinfos가 저장됨..
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

  const yearTemp = new Date().getFullYear();
  const handleRegisterChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };
  const years = Array.from(new Array(108), (val, index) => bYear - index);
  // bYear == current year
  //// Since the array is initialized with `undefined` on each position,
  // the value of `val` below will be `undefined`
  //그러면 val 없애면 작동안됨 왜 그런건지는 모르겠음...
  console.log(years);
  const months = Array.from(new Array(12), (val, index) => 1 + index);
  const getDays = () => {
    return new Date(bYear, bMonth).getDate();
  };

  // const days = Array.from(new Array(getDays()), (val, index) => 1 + index);

  const days = Array.from(new Array(31), (val, index) => 1 + index);
  const registerValidation = Yup.object({
    first_name: Yup.string()
      .required("What is your first name ?")
      .min(2, "First name must be between 2 and 16 characters.")
      .max(16, "First name must be between 2 and 16 characters.")
      .matches(/^[aA-zZ]+$/, "Numbers and special characters are not allowed."),
    //Yup뜻은 모르겠지만 이 기능은 그 input place holder이랑 연동되어서 작동하는거 같다
    last_name: Yup.string()
      .required("What is your last name ?")
      .min(2, "Last name must be between 2 and 16 characters.")
      .max(16, "Last name must be between 2 and 16 characters.")
      .matches(/^[aA-zZ]+$/, "Numbers and special characters are not allowed."),
    email: Yup.string()
      .required("You will need this when you login and forgot your password")
      .email("Endter a valid email address"),
    password: Yup.string()
      .required(
        "Enter a combination of at least six numbers, letters and punctuation marks(such as ! and &"
      )
      .min(6, "Password must be atleast 6 characters.")
      .max(36, "Password can't be more than 36 characters"),
  });
  console.log(user);

  const [dateError, setDateError] = useState("");
  const [genderErro, setGenderError] = useState("");
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
        <Formik
          enableReinitialize
          //Default is false. Control whether Formik should reset the form if initialValues changes (using deep equality).

          initialValues={{
            first_name,
            last_name,
            email,
            password,
            bYear,
            bMonth,
            bMonth,
            gender,
          }}
          //what is the difference of putting just user and first_name,last_name stufff
          validationSchema={registerValidation}
          onSubmit={() => {
            let current_date = new Date();
            let picked_date = new Date(bYear, bMonth - 1, bDay);
            let atleast = new Date(1970 + 14, 0, 1);
            let noMoreThan70 = new Date(1970 + 70, 0, 1);
            if (current_date - picked_date < atleast) {
              setDateError(
                "it looks like you've entered wrong info. Please make sure that use your real date of birth."
              );
            } else if (current_date - picked_date > noMoreThan70) {
              setDateError(
                "it looks like you've entered wrong info. Please make sure that use your real date of birth."
              );
            } else if (gender === "") {
              setDateError("");

              setGenderError(
                "Plase choose a gender. You can change who can see this later"
              );
            } else {
              setGenderError("");
              setDateError("");
            }
          }}
        >
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
                <DateOfBirthSelect
                  bDay={bDay}
                  bMonth={bMonth}
                  bYear={bYear}
                  days={days}
                  months={months}
                  years={years}
                  handleRegisterChange={handleRegisterChange}
                  dateError={dateError}
                ></DateOfBirthSelect>
              </div>
              <div className="reg-col">
                <div className="register__line__header">
                  Gender <i className="info_icon"></i>
                </div>
                <GenderSelect
                  handleRegisterChange={handleRegisterChange}
                  genderErro={genderErro}
                ></GenderSelect>
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
