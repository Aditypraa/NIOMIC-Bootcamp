import { Link } from "react-router-dom";
import FormRegister from "../components/Fragments/FormRegister";
import AuthLayouts from "../components/Layouts/AuthLayouts";

const RegisterPage = () => {
  return (
    <AuthLayouts title="Register">
      <FormRegister />
      <p className="text-sm mt-5 text-center">
        have an account? {/* ======== Jangan Menggunakan Tag a ======== */}
        {/* <a href="/register" className="font-bold text-blue-600">
          Sign Up
        </a> */}
        {/* ======== Gunakan <Link to/> untuk navigasi ======== */}
        <Link to="/login" className="font-bold text-blue-600">
          Login
        </Link>
      </p>
    </AuthLayouts>
  );
};

export default RegisterPage;
