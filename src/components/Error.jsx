import React from 'react';
import './Error.scss';

const Error = ({ error }) => (
  <div className='error-message'>Ошибка: {error}</div>
)

export default Error;