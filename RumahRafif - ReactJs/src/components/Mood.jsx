import PropTypes from "prop-types";

function Mood({ hari, mood }) {
  return (
    <>
      <div>
        <h1>
          Sekarang Hari : {hari} / Mood Hari Sekarang : {mood}
        </h1>
      </div>
    </>
  );
}

Mood.propTypes = {
  hari: PropTypes.string,
  mood: PropTypes.string,
};

export default Mood;
