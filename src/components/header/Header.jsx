import React from 'react';
import { useDispatch, useTheme } from '../../hooks/appContext';
import { useEffect } from 'react';
import Switch from '@material-ui/core/Switch';
import styles from './Header.css';

const Header = () => {
  const theme = useTheme();
  const dispatch = useDispatch();

  const handleChange = () => {
    dispatch({ type: 'TOGGLE_THEME' });
  };

  useEffect(() => {
    document.body.style = `background-color: var(--${theme}-bg-color); color: var(--${theme}-fg-color)`;
  }, [theme]);

  return (
    <div>
      <Switch
        onChange={handleChange}
        name="checkedA"
        inputProps={{ 'aria-label': 'secondary checkbox' }}
      />
    </div>
  );
};


export default Header;
