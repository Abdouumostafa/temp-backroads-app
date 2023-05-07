import Title from "./Titles";
import { servicesContent } from "../data";

const Services = () => {
  return (
    <>
      <section className="section services" id="services">
        <Title title="Our" subtitle="services" />
        <div className="section-center services-center">
          {servicesContent.map((myContent) => {
            return (
              <>
                <article key={myContent.id} className="service">
                  <span className="service-icon">
                    <i className={myContent.icon}></i>
                  </span>
                  <div className="service-info">
                    <h4 className="service-title">{myContent.title}</h4>
                    <p className="service-text">{myContent.info}</p>
                  </div>{" "}
                </article>
              </>
            );
          })}
        </div>
      </section>
    </>
  );
};
export default Services;
