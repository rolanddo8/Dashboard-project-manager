import React from 'react'
import AddClientModal from '../Clients/Modal/AddClientModal';
import AddProjectModal from '../Projects/Modal/AddProjectModal';
import Projects from '../Projects/Projects';
import Clients from '../Clients/Clients';

export default function HomePage() {
  return (
    <>
    <div className='d-flex gap-3 mb-4'>               
        <AddClientModal />
        <AddProjectModal/>
    </div>
        <Projects />
        <hr/>
        <Clients />
    </>
  )
}
