import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from '../../hooks/appContext';

const Pagination = ({ count }) => {

  const dispatch = useDispatch(); 

  const increment = () => dispatch({ type: 'INCREMENT' });
  const decrement = () => dispatch({ type: 'DECREMENT' });

  console.log('countpaginationpage', count);
  return (
    <div>
        Page: {count}
      <button onClick={decrement}>Prev</button>
      <button onClick={increment}>Next</button>
    </div>
  );
};

Pagination.propTypes = {
  count: PropTypes.number.isRequired
};

export default Pagination;

