import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  function loginHandler(event) {
    event.preventDefault();
    // const username = event.target.username.value;
    // const password = event.target.password.value;
    const checkLogin = true;
    if (checkLogin) {
      navigate("/dashboard");
    }
  }

  return (
    <>
      <form onSubmit={loginHandler} action="">
        <input type="text" name="username" />
        <input type="password" name="password" />
        <button>Login</button>
      </form>
    </>
  );
}
