import Title from "./Titles";
import { toursContent } from "../data";

const Tours = () => {
  return (
    <>
      <section className="section" id="tours">
        <Title title="featured" subtitle="tours" />

        <div className="section-center featured-center">
          {toursContent.map((content) => {
            const { id, date, title, description, country, duration, cost } =
              content;
            return (
              <article key={id} className="tour-card">
                <>
                  <div className="tour-img-container">
                    <img src={content.image} className="tour-img" alt="" />
                    <p className="tour-date">{date}</p>
                  </div>
                  <div className="tour-info">
                    <div className="tour-title">
                      <h4>{title}</h4>
                    </div>
                    <p>{description}</p>
                    <div className="tour-footer">
                      <p>
                        <span>
                          <i className="fas fa-map"></i>
                        </span>
                        {country}
                      </p>
                      <p>{duration}</p>
                      <p>{cost}</p>
                    </div>
                  </div>
                </>
              </article>
            );
          })}
        </div>
      </section>
    </>
  );
};
export default Tours;
