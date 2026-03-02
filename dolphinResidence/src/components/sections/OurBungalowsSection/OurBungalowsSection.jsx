import BungalowCard from "../../BungalowCard/BungalowCard";
import bungalowCardsInfo from "../../../data/bungalowCardInfo";
import "./OurBungalowsSection.css";

const OurBungalowsSection = () => {
  return (
    <section id="our-bungalows-section">
      <div className="section-header">
        <h2 className="main-heading">Нашите Бунгала</h2>
        <h3 className="secondary-heading">
          Разгледайте нашите <span class="special-word">Бунгала</span>
        </h3>
      </div>

      <div className="bungalows">
        {bungalowCardsInfo.map((bungalowInfo) => {
          return (
            <BungalowCard
              image={bungalowInfo.image}
              name={bungalowInfo.title}
              pricePerNight={bungalowInfo.price}
            />
          );
        })}
      </div>
    </section>
  );
};

export default OurBungalowsSection;
