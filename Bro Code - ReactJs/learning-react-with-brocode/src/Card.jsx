import imagepic from "./assets/Ai.jpeg";

function Card() {
  return (
    <div className="card">
      <img className="card-image" src={imagepic} alt="imagePic" />
      <h2 className="card-title">Aditya Pratama</h2>
      <p className="card-text">I Make Website with learning Bro Code</p>
    </div>
  );
}

export default Card;
