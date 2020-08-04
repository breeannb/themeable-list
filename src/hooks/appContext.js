import React, { useContext } from 'react';

export const AppContext = React.createContext();

export const useCharacters = () => {
  const { state } = useContext(AppContext);
  return state.characters;
};
  
export const useCount = () => {
  const { state } = useContext(AppContext);
  return state.count;
};

export const useDispatch = () => {
  const { dispatch } = useContext(AppContext);
  return dispatch;
};

export const useTheme = () => {
  const { state } = useContext(AppContext);
  return state.theme;
};
