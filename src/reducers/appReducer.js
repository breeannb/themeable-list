export const initialState = {
  characters: [], 
  count: 1,
  theme: 'dark'
};
    
export default function reducer(state, action) {
  switch(action.type) {
    case 'SET_CHARACTERS':
      return { ...state, characters: action.payload };
    case 'INCREMENT':
      return { ...state, count: state.count + 1 };
    case 'DECREMENT':
      return { ...state, count: state.count - 1 };
    case 'TOGGLE_THEME':
      return { ...state, theme: state.theme === 'light' ? 'dark' : 'light' };
    default:
      return state;
  }
}

