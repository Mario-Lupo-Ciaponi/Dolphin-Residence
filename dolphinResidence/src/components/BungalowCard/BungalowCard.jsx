import "./BungalowCard.css";

const BungalowCard = ({ image, name, pricePerNight }) => {
  return (
    <article className="bungalow-card first-bungalow">
      <img className="bungalow-image" src={image} alt="бунгало" />

      <div class="card-content">
        <h3 className="card-title">{name}</h3>

        <p className="price">{pricePerNight} &euro; / на нощувка</p>
      </div>
    </article>
  );
};

export default BungalowCard;
