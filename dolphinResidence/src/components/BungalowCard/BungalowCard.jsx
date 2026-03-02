import "./BungalowCard.css";

const BungalowCard = ({
  image,
  name,
  pricePerPeson,
  pricePerTwo,
  pricePerFive,
}) => {
  return (
    <article className="bungalow-card first-bungalow">
      <img className="bungalow-image" src={image} alt="бунгало" />

      <div class="card-content">
        <h3 className="card-title">{name}</h3>

        <div className="prices">
          <p className="price">{pricePerPeson} &euro; / за човек</p>
          <p className="price">{pricePerTwo} &euro; / за двама</p>
          <p className="price">{pricePerFive} &euro; / за петима</p>
        </div>
      </div>
    </article>
  );
};

export default BungalowCard;
