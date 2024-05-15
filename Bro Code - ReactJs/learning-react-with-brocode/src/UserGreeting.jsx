import PropTypes from "prop-types";

const UserGreeting = ({ isLoggedIn, username }) => {
  return isLoggedIn ? (
    <h1 className="welcome-message">Welcome back, {username}!</h1>
  ) : (
    <h1 className="login-prompt">Please Loggin to Continue</h1>
  );
};

UserGreeting.propTypes = {
  isLoggedIn: PropTypes.bool,
  username: PropTypes.string,
};

UserGreeting.defaultProps = {
  isLoggedIn: false,
  username: "Guest",
};
export default UserGreeting;
