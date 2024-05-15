import propTypes from "prop-types";

function Student({ name, age, isStudent }) {
  return (
    <div className="student">
      <p>Nama : {name}</p>
      <p>Age : {age}</p>
      <p>Student : {isStudent ? "Yes" : "No"}</p>
    </div>
  );
}

Student.propTypes = {
  name: propTypes.string,
  age: propTypes.number,
  isStudent: propTypes.bool,
};

Student.defaultProps = {
  name: "Unknown",
  age: 0,
  isStudent: false,
};

export default Student;
