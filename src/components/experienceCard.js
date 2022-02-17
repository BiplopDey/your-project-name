import { Link } from "react-router-dom";

export default function ExperienceCard({ id, img, title, location }) {
  return (
    <div className="card card-block">
      <figure className="position-relative">
          <img src={img} alt=""/>
          <div className="card-featured position-absolute bottom-0">
            <figcaption>{title}</figcaption>
            <figcaption>{location}</figcaption>
            <Link className="btn btn-primary" to={`/experience/${id}`}>
              Ver mas
            </Link>
          </div>
      </figure>
    </div>
  );
}
