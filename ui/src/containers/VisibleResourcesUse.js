import { connect } from 'react-redux'
import { toggleResource } from '../actions/resourcesActions'
import ResourceUseList from '../components/ResourceUseList'
import { getVisibleResources } from './VisibleResourcesList'



const mapStateToProps = state => {
  return {
    resources: getVisibleResources(state.resources, state.utilizations, state.visibilityFilter)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    toggleResource: id => dispatch(toggleResource(id))
    }
  }

const VisibleResourcesUse = connect(
  mapStateToProps,
  mapDispatchToProps
)(ResourceUseList)

export default VisibleResourcesUse