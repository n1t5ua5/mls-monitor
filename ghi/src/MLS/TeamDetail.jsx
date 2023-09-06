import { useState } from "react";
import { useParams } from "react-router-dom";
import { useGetTeamByNameQuery, useGetCommentsForTeamQuery, useGetTokenQuery } from 'mls/app/apiSlice';
import { Link } from "react-router-dom";
import CommentButtons from "./CommentButtons";

const TeamDetails = () => {
    const {data: account } = useGetTokenQuery();
    const { name } = useParams();
    const { data: teams, isLoading } = useGetTeamByNameQuery(name);
    const { data: comments, isLoading: isLoadingComments } = useGetCommentsForTeamsQuery(name);

    if (isLoading || isLoadingComments) return <div>Loading...</div>

    return (
        <div>
        <div className="row">
            <div className="col-8">
                <h1>{teams.name.toUpperCase()}</h1>
            </div>
            <div className="col-4 text-end">
                {account ? <CommentButtons name={name} /> : <Link to={'/login'} className="btn btn-outline-primary">Login</Link>}
            </div>
        </div>
        <ul className="list-group">
            <li className="list-group-item">
                Comments: {comments.length}
            </li>
            <li className="list-group-item">
                Order: {teams.order}
            </li>
        </ul>
        </div>
    )
}

export default TeamDetails;
