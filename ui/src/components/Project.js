import React from 'react'
import PropTypes from 'prop-types'
import AddResourceToProject from '../containers/AddResourceToProject';

const Project = ({ id, onClick, collapsed, text, resources }) => (
  <React.Fragment>
  <tr onClick={onClick} className='table-light'>
    <th scope='row'>{id}</th>
    <td>{text}</td>
    <td>({collapsed ? 'collapsed' : 'visible'})</td>
  </tr>
  {resources.map((resource, index) => {
          return (
            <tr key={index} style={ { visibility: collapsed ? 'collapse' : 'visible'}}>
              <th scope='row'> </th>
              <td>{resource.id}</td>
              <td>{resource.text}</td>
            </tr>
          )
        })} 
  <tr style={ { visibility: collapsed ? 'collapse' : 'visible'}}>
      <th scope='row'> </th>
      <td> 
        <AddResourceToProject projectId={id}/>
      </td>
      <td></td>
  </tr>
  </React.Fragment>
)

Project.propTypes = {
  onClick: PropTypes.func.isRequired,
  collapsed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  resources: PropTypes.array.isRequired
}

export default Project