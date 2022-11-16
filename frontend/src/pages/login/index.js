import "./style.css";
import { LoginForm } from "../../components/login/LoginForm";
import { Footer } from "../../components/login/Footer";
import RegisterForm from "../../components/login/RegisterForm";

export default function Login() {
  return (
    <div className="login">
      <div className="login__wrapper">
        <LoginForm></LoginForm>
        <RegisterForm></RegisterForm>
        <Footer></Footer>
      </div>
    </div>
  );
}
