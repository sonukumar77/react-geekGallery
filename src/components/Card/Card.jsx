import "./Card.css";

const Card = ({ created_at, urls, user }) => {
  return (
    <div className="card-container">
      <div className="card-header">
        <img src={urls.regular} alt="poster" />
      </div>
      <div className="card-body">
        <h2>{user?.username}</h2>
        <p>{created_at}</p>
      </div>
    </div>
  );
};

export default Card;
