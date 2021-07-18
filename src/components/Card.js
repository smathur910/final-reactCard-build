import "./Card.css";

const Card = (props) => {
  return (
    <div className="main-card">
      <div className="card-wrapper">
        <div className="profile-img"></div>
        <div className="content">
          <div className="profile">
            <img src={props.img} alt="test" />
          </div>

          <p>{props.Name}</p>
          <p>{props.Email}</p>
          <p>{props.Phone}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
