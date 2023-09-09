import { Link } from 'react-router-dom';

const TeamCard = ({ name }) => {
  console.log(name, "@@@@@@@@@@");
  return (
    <div className="col-3">
      <div className="card mb-3">
        <div className="card mb-3">
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <Link to={`/teams/${name}`}>Details</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
