import BungalowCard from "../../BungalowCard/BungalowCard";
import FirstBungalowImage from "../../../assets/bungalows/bungalow-1-cover.jpg";
import SecondBungalowImage from "../../../assets/bungalows/bungalow-2-cover.jpg";
import ThirdBungalowImage from "../../../assets/bungalows/bungalow-2-cover.jpg";
import "./OurBungalowsSection.css";

const OurBungalowsSection = () => {
  const bungalowCardsInfo = [
    {
      image: FirstBungalowImage,
      title: "Бунгало 1 - Papaver I",
      price: 100,
    },
    {
      image: SecondBungalowImage,
      title: "Бунгало 2 - Orchidea",
      price: 100,
    },
    {
      image: ThirdBungalowImage,
      title: "Бунгало 3 - Балкан",
      price: 100,
    },
  ];

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
