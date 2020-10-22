import s from '../../styles/page/Mobile.module.css';

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