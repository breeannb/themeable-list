export const initialState = {
  character: null
};
  
export default function reducer(state, action) {
  switch(action.type) {
    case 'SET_CHARACTER':
      return { ...state, character: action.payload };
    default:
      return state;
  }
}
