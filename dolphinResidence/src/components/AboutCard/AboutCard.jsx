import "./AboutCard.css";

const AboutCard = ({ image, title, description, isRight }) => {
  return (
    <article class="about-card">
      <img
        class={`card-image ${isRight ? "right" : ""}`}
        src={image}
        alt="снимка на Dolphin Residence"
      />

      <div class="content">
        <h3 class="card-title">{title}</h3>

        <p class="card-primary-info">{description}</p>
      </div>
    </article>
  );
};

export default AboutCard;
