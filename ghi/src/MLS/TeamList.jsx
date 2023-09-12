import TeamCard from "./TeamCard";
import { useSelector } from "react-redux";
import { useGetAllTeamsQuery } from "./app/apiSlice";

const TeamList = () => {
  const searchCriteria = useSelector((state) => state.search.value);
  const { data = [], isLoading, isError } = useGetAllTeamsQuery();
  if (isLoading) return <>Loading...</>;
  if (isError) return <>Error fetching teams.</>;
  const filteredData = () => {
    if (!data) return [];
    if (searchCriteria)
      return data.filter((team) => team.name.includes(searchCriteria));
    return data;
  };

  return (
    <>
      <h1 className="mt-3">
        {searchCriteria && (
          <small className="text-body-secondary">"{searchCriteria}"</small>
        )}
      </h1>
      <div className="row mt-3">
        {filteredData().map((team) => (
          <TeamCard
            key={team.name}
            name={team.name}
            logo={team.logo}
            ranking={team.ranking}
            stats={team.stats}
          />
        ))}
      </div>
    </>
  );
};
export default TeamList;
