import Spinner from "../Animation/Spinner";
import {useQuery} from '@apollo/client'
import {GET_PROJECTS} from '../../graphQL/queries/projectQueries'
import ProjectCard from "./ProjectCard/ProjectCard";

export default function Projects() {
    const {loading, error, data} = useQuery(GET_PROJECTS)
    if (loading) return <Spinner />
    if (error) return <p>Something went wrong</p>

  return (
    <>
        {data.projects.length > 0 ? (
            <div className="row mt-4">
                {data?.projects?.map((project) => (
                    <ProjectCard key={project.id} project={project}/>))}
            </div>
        ) : (<p>No projects found</p>)}
    </>
  )
}
