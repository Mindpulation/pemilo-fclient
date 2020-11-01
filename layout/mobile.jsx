import React from 'react';
import s from '../styles/layout/Mobile.module.css';

const Mobile = ({children}) => {
  return(
    <React.Fragment>
      <div className={s.content}>
        {children}
      </div>
    </React.Fragment>
  )
}

export default Mobile;