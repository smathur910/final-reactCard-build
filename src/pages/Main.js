import Card from "../components/Card";
import "./Main.css";
import Details from "../Details";

const createCard = (Details) => {
  return (
    <Card
      key={Details.id}
      Name={Details.Name}
      img={Details.imgURL}
      Email={Details.Email}
      Phone={Details.Phone}
    />
  );
};

const Main = () => {
  return (
    <div className="wrapper row">
      <div className="title">
        <h1>
          This is my Card Section
          <span role="img" aria-labelledby="smiley">
            😀
          </span>
        </h1>
      </div>
      <div className="container">
      {Details.map(createCard)}</div>
    </div>
  );
};

export default Main;
