
// state is basically an array of project objects

const projectsReducer = ( state = [], action) => {
    switch (action.type) {
        case 'ADD_PROJECT':
            state = [...state, {
                id: action.id,
                text: action.text,
                collapsed: true, 
                resources: [1,2,3]       // an array of resource ids
                }]
            break;
        case 'TOGGLE_PROJECT':
            return state.map(project =>
            (project.id === action.id)
              ? {...project, collapsed: !project.collapsed}
              : project
            )
        default:
            return state
    }
    return state
}


export default projectsReducer