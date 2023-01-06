import "./Card.css";
export default function Card({ gif }) {
  return (
    <div className="card">
      <img className="img" src={gif} alt="giphy" />
    </div>
  );
}
