import { useState } from 'react'
import {Link, useParams} from 'react-router-dom'
import Spinner from '../Animation/Spinner'
import { useQuery } from '@apollo/client'
import { GET_PROJECT } from '../../graphQL/queries/projectQueries'
import ClientInfo from '../Clients/ClientInfo/ClientInfo'
import DeleteProjectButton from '../Projects/DeleteProjectButton/DeleteProjectButton'
import EditProjectForm from '../Projects/EditProjectForm/EditProjectForm'
import { FaEdit } from 'react-icons/fa'

export default function ProjectPage() {
  const {id} = useParams();
  const {loading, error, data} = useQuery(GET_PROJECT,{
    variables: {id: id}
  });
  const [edit, setEdit] = useState(false);

  if (loading) return <Spinner />
  if (error) return <p>Something went wrong</p>
  return <>
    {!loading && !error && (
      <div className='mx-auto w-75 card p-5'>
      <Link to='/' className='btn btn-light btn-sm w-25 d-inline ms-auto'>
        Back
      </Link>

      <h1>{data.project.name}</h1>
      <p>{data.project.description}</p>

      <h5 className='mt-3'>Project Status</h5>
      <p className='lead'>{data.project.status}</p>
      
      {data.project.client ? <ClientInfo client={data.project.client} /> : <p>No client assigned</p>}
      

      {edit ? (<EditProjectForm project={data.project}/>) : (
      <div className='d-flex mt-2 ms-auto'>
        <button className='btn btn-warning m-2' onClick={() => setEdit(true)}>
          <FaEdit className='icon' /> Edit Project
        </button>
      </div>) }

      <DeleteProjectButton projectId={data.project.id} /> 
    </div>
    )}
    </>
}
