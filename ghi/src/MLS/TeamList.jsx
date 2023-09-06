import TeamCard from './TeamCard';
import { useSelector } from 'react-redux';
import { useGetAllTeamsQuery } from './app/apiSlice';

const TeamList = () => {
    const searchCriteria = useSelector(state => state.search.vale);
    const { data, isLoading } = useGetAllTeamsQuery();

    if (isLoading) return <>Loading...</>

    const filteredData = () => {
        if (searchCriteria) return data.filter(team => team.name.includes(searchCriteria))
        return data;
    }

    return (
        <>
            <h1 className='mt-3'>
                Teams{' '}
                {searchCriteria && <small className='text-body-secondary'>"{searchCriteria}"</small>}
            </h1>
            <div className="row mt-3">
                {filteredData().map(p => <TeamCard key={p.name} name={p.name} />)}
            </div>
        </>
    )
}

export default TeamList;
