import React from "react";
import "../index.css";
import { IconName, FiMapPin } from "react-icons/fi";

// title={info.title}
// location={info.location}
// map={info.googleMapsUrl}
// start={info.startDate}
// end={info.endDate}
// description={info.description}
// image={info.imageUrl}

const Card = ({ title, location, map, start, end, description, image }) => {
  return (
    <div className="card">
      <img
        className="cardimage"
        src={`${image}`}
        alt="beautiful travel destinations"
      />
      <div className="cardcontainer">
        <section className="countrymap">
          <FiMapPin color="red" fontSize={15} />{" "}
          <div className="country">{location.toUpperCase()}</div>
          <a href={map} target="_blank" rel="noreferrer">
            <p>View on Google maps</p>
          </a>
        </section>
        <h1>{title}</h1>
        <span className="time">
          <b>
            {" "}
            {start}-{end}
          </b>
        </span>
        <p className="description">{description}</p>
      </div>
    </div>
  );
};

export default Card;
