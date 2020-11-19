import React from 'react';

import './styles.css';
import Star from '../icons/star';

const Loader = () => (
  <div className="loading-indicator">
    <Star className='fa-spin'/>
  </div>
);

export default Loader;
