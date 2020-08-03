import React, { useReducer } from 'react';
import { AppContext } from '../hooks/appContext';
import reducer, { initialState } from '../reducers/appReducer';
import { useEffect } from 'react';
import { getAvatarCharactersList } from '../services/getFetchCalls';

// eslint-disable-next-line react/prop-types
const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    getAvatarCharactersList(state.count)
      .then(character => dispatch({ type: 'SET_CHARACTERS', payload: character }));
      
  }, [state.count]);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
