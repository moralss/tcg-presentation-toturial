
const initialState = {
  tasks: []
};

// POST_ERROR

const workShopReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TASK":
      return { ...state, tasks: [...state.tasks, action.payload] };
    case "DELETE_TASK":
      return { ...state, tasks: [...state.tasks.filter((item, index) => index !== action.payload)] }
    case "EDIT_TASK":
      const newValues = state.tasks.map(item => {
        if (item.id === action.payload.id) {
          return {
            ...item, taskName: action.payload.taskName
          }
        }
        return item
      }
      )
      return { ...state, tasks: newValues }
    case "CHANGE_COMPLETE":
      const newStateValues = state.tasks.map(item => {
        if (item.id === action.payload.id) {
          return {
            ...item, isComplete: action.payload.isComplete
          }
        }
        return item
      }
      )
      return { ...state, tasks: newStateValues }
    default:
      return state;
  }
};


export default workShopReducer