import AboutCard from "../../AboutCard/AboutCard";
import aboutCardInfo from "../../../data/aboutCardInfo";
import "./AboutUsSection.css";

const AboutUsSection = () => {
  return (
    <section id="about-us-section">
      <h2 class="about-us-heading">За нас</h2>

      {aboutCardInfo.map((aboutInfo) => {
        return (
          <AboutCard
            image={aboutInfo.image}
            title={aboutInfo.title}
            description={aboutInfo.description}
            isRight={aboutInfo.isRight}
          />
        );
      })}
    </section>
  );
};

export default AboutUsSection;
