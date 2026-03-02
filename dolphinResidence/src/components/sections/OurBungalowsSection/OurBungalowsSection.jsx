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

        <p className="more-info-p">
          Повече информация на{" "}
          <a
            className="booking-link"
            target="_blank"
            href="https://www.booking.com/hotel/bg/dolphin-residence-bulgaria.bg.html?aid=318615&app_hotel_id=15507842&checkin=2026-03-02&checkout=2026-03-03&from_sn=android&group_adults=2&group_children=0&label=New_English_EN_BG_27034798705-VosclDn2ZCoOGOtLz5ZrswSM640874750389%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg%3Afi%3Atidsa-140566012825%3Alp1001462%3Ali%3Adem%3Adm%3Aag27034798705%3Acmp400849705-kpl0Ja%401772446799&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA"
          >
            Booking
          </a>
        </p>
      </div>

      <div className="bungalows">
        {bungalowCardsInfo.map((bungalowInfo) => {
          return (
            <BungalowCard
              image={bungalowInfo.image}
              name={bungalowInfo.title}
              pricePerPeson={bungalowInfo.pricePerPeson}
              pricePerTwo={bungalowInfo.pricePerTwo}
              pricePerFive={bungalowInfo.pricePerFive}
            />
          );
        })}
      </div>
    </section>
  );
};

export default OurBungalowsSection;
