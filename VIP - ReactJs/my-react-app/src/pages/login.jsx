import { Link } from "react-router-dom";
import FormLogin from "../components/Fragments/FormLogin";
import AuthLayouts from "../components/Layouts/AuthLayouts";

const LoginPage = () => {
  return (
    <AuthLayouts title="Login">
      <FormLogin />
      <p className="text-sm mt-5 text-center">
        Don`t have an account?{" "}
        {/* ======== Jangan Menggunakan Tag a ======== */}
        {/* <a href="/register" className="font-bold text-blue-600">
          Sign Up
        </a> */}
        {/* ======== Gunakan <Link to/> untuk navigasi ======== */}
        <Link to="/register" className="font-bold text-blue-600">
          Sign Up
        </Link>
      </p>
    </AuthLayouts>
  );
};

export default LoginPage;
