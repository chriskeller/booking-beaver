import React from 'react'
import { connect } from 'react-redux'
import { addProject } from '../actions/projectsActions'

let AddProject = ({ dispatch }) => {
  let input

  return (
    <div>
      <form onSubmit={e => {
          e.preventDefault()
          if (!input.value.trim()) {
            return
          }
          dispatch(addProject(input.value))
          input.value = ''
        }}
      >
      <div className='form-row'>
        <div className='col'>
          <input ref={node => input = node} className='form-control form-control-sm' placeholder='Project name'/>
        </div>
        <div className='col'>
          <button type="submit" className='btn btn-outline-primary btn-sm'>
            Add Project
          </button>
        </div>
      </div>
      
      </form>
    </div>
  )
}


export default connect()(AddProject)