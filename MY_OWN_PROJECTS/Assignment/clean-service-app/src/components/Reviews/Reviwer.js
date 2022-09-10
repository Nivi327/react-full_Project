import "./Reviewer.css";

import Person from "../../assets/2x/outline_person_outline_black_24dp.png";

const Reviewer = ({ rating, description, name }) => {
  return (
    <div className="reviewer">
      <div className="user">
        <div className="user-pic">
          <img src={Person} className="user-profile" />
        </div>
        <div className="user-details">
          <span className="user-name">{name}</span>
          <span className="user-location">
            July 2022 • Noida, Uttar Pradsh 201301, India
          </span>
        </div>
        <div className="user-rating">★ {rating}</div>
      </div>
      <p>{description}</p>
    </div>
  );
};

export default Reviewer;
