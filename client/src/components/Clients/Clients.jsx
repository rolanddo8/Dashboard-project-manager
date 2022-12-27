import { useQuery} from '@apollo/client'
import ClientRow from './ClientRow/ClientRow'
import { GET_CLIENTS } from '../../graphQL/queries/clientQueries';
import Spinner from '../Animation/Spinner';

function Clients() {
    const {loading, error, data} = useQuery(GET_CLIENTS);
    if (loading) return <Spinner/>
    if (error) return <p>Something Went Wrong</p>
    return (
        <>
            {!loading && !error && (
                <table className='table table-hover mt-3'>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data?.clients?.map(client => (
                            <ClientRow key={client.id} client={client}/>
                        ))}
                    </tbody>
                </table>
            ) }
        </>
  )
}

export default Clients