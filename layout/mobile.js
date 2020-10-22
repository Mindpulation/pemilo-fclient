import s from '../../styles/layout/Mobile.module.css';

const Mobile = ({children}) => {
  return(
    <div>
      <div className={s.content}>
        {children}
      </div>
    </div>
  )
}

export default Mobile;