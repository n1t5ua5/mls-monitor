import { Link } from "react-router-dom";

const TeamCard = ({ name, logo, ranking, stats }) => {
  return (
    <div className="col-3">
      <div className="card mb-3">
        <img src={logo} alt={`${name} logo`} className="card-img-top" />
        <div className="card mb-3">
          <div className="card-body">
            <h5 className="card-title">
              {name[0].toUpperCase() + name.slice(1)}
            </h5>
            <p>Ranking: {ranking}</p>
            <p>
              Record: {stats.wins} - {stats.losses}
            </p>
            <Link to={`/teams/${name}`}>Details</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
