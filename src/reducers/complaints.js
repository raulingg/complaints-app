// Expenses Reducer

const complaintsReducerDefaultState = [];

export default (state = complaintsReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_COMPLAINT':
      return [...state, action.complaint];
    case 'REMOVE_COMPLAINT':
      return state.filter(({ id }) => id !== action.id);
    case 'EDIT_COMPLAINT':
      return state.map(complaint => {
        if (complaint.id === action.id) {
          return {
            ...complaint,
            ...action.updates,
          };
        }
        return complaint;
      });
    case 'SET_COMPLAINTS':
      return action.complaints;
    default:
      return state;
  }
};
