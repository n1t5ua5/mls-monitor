import { Link } from 'react-router-dom';

const TeamCard = ({name}) => {
    return (
        <div className="col-3">
            <div className="card mb-3">
                <div className="card mb-3">
                    <div className="card-body">
                        <h5 className="card-title">{name[0].tuUpperCase() + name.slice(1)}</h5>
                        <Link to={`/team/${name}`}>Details</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TeamCard;
